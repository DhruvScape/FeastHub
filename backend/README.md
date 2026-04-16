# FeastHub — Dummy Backend

A reference Express + MongoDB scaffold for the FeastHub frontend.

> ⚠️ This folder is **not** executed inside the Lovable sandbox (Lovable runs a frontend-only Vite app). It exists as a starting point you can copy into a standalone Node.js project, or use as a guide when wiring the frontend to a real API.

## Stack
- **Express 4** — HTTP server & routing
- **Mongoose** — MongoDB ODM
- **JWT** — auth tokens
- **bcryptjs** — password hashing

## Structure
```
backend/
├── src/
│   ├── server.js              # Entry point
│   ├── config/db.js           # Mongo connection
│   ├── middleware/auth.js     # JWT auth guard
│   ├── models/                # Mongoose schemas
│   │   ├── User.js
│   │   ├── Restaurant.js
│   │   ├── MenuItem.js
│   │   └── Order.js
│   ├── controllers/           # Route handlers
│   │   ├── authController.js
│   │   ├── restaurantController.js
│   │   └── orderController.js
│   └── routes/                # Express routers
│       ├── auth.js
│       ├── restaurants.js
│       └── orders.js
├── .env.example
└── package.json
```

## Endpoints (dummy)
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET  /api/auth/me`
- `GET  /api/restaurants`
- `GET  /api/restaurants/:id`
- `GET  /api/restaurants/:id/menu`
- `POST /api/orders`           *(auth required)*
- `GET  /api/orders/me`        *(auth required)*

## Run locally (outside Lovable)
```bash
cp .env.example .env
npm install
npm run dev
```
