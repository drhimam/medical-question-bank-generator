# QBank Backend

This is the backend for the QBank Generator app, providing user authentication (JWT), MongoDB storage, and Stripe subscription management.

## Setup

1. Install dependencies:
   ```
npm install
   ```
2. Copy `.env.example` to `.env` and fill in your MongoDB URI, JWT secret, Stripe secret key, and webhook secret.
3. Start the server:
   ```
npm run dev
   ```

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT
- `GET /api/auth/me` — Get current user info (JWT required)
- `GET /api/subscription/status` — Get subscription status (JWT required)
- `POST /api/subscription/create-checkout-session` — Create Stripe checkout session (JWT required)
- `POST /api/subscription/webhook` — Stripe webhook (set endpoint in Stripe dashboard)

## Notes
- Requires MongoDB running locally or in the cloud.
- Set up Stripe and get your API keys and webhook secret.
- The frontend should use the JWT for authenticated requests.
