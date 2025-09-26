const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscription: {
    active: { type: Boolean, default: false },
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    plan: String,
    currentPeriodEnd: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
