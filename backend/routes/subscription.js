const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// Middleware to check JWT
function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Get subscription status
router.get('/status', auth, async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ subscription: user.subscription });
});

// Create Stripe Checkout session
router.post('/create-checkout-session', auth, async (req, res) => {
  const { priceId } = req.body; // Stripe price ID for the plan
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: user.email,
      success_url: `${process.env.CLIENT_URL}/?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/?canceled=true`,
      metadata: { userId: user._id.toString() }
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ message: 'Stripe error', error: err.message });
  }
});

// Stripe webhook to update subscription status
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;
    const subscriptionId = session.subscription;
    const customerId = session.customer;
    // Update user subscription
    await User.findByIdAndUpdate(userId, {
      subscription: {
        active: true,
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscriptionId,
        plan: session.display_items ? session.display_items[0].plan.id : '',
        currentPeriodEnd: null // You can fetch from Stripe API if needed
      }
    });
  }
  res.json({ received: true });
});

module.exports = router;
