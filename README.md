# Full Stack Food Delivery Application

A full-stack food delivery web application built using the MERN stack. It provides a customer-facing website for browsing food, managing carts, placing orders and making payments, along with an admin panel for managing food items and orders.

## Features

### Customer Frontend
- Browse available food items.
- Explore food categories.
- Add and remove items from the shopping cart.
- User registration and login using JWT authentication.
- Manage delivery information.
- Place food orders.
- Secure online payment integration using Stripe.
- View order history and order status.

### Admin Panel
- Admin dashboard.
- Add new food items.
- Upload food images.
- View available food items.
- Remove food items.
- View customer orders.
- Update order status.

### Backend
- RESTful APIs using Node.js and Express.js.
- MongoDB database integration using Mongoose.
- User authentication using JWT.
- Password hashing.
- Cart management APIs.
- Order management APIs.
- Stripe Checkout integration.
- Image upload handling using Multer.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, CSS |
| Admin Panel | React.js, Vite, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Token (JWT), bcrypt |
| Payment Gateway | Stripe |
| API Requests | Axios |
| Image Uploads | Multer |
| Routing | React Router |

## Project Structure

```text
full_stack_food_delivery/
│
├── admin/
│   └── Admin panel application
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   └── Customer-facing React application
│
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Aryan03112005/full-stack-food-delivery.git
cd full-stack-food-delivery
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder and configure the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Add any other environment variables required by your backend configuration.

Start the backend:

```bash
npm run server
```

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Setup Admin Panel

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

The frontend and admin development URLs will be displayed in their respective terminals.

## Environment Variables

Never commit your actual `.env` files or secret keys to GitHub.

Configure your MongoDB connection string, JWT secret, Stripe secret key and any frontend API URL variables according to your project configuration.

## Payment Integration

This project integrates Stripe Checkout for online payments.

Use Stripe test mode credentials while testing payments. Never expose your Stripe secret key in frontend code.


## Future Enhancements

- **Automated Testing:** Implement unit and integration tests for authentication, cart management, order processing and payment workflows.
- **Enhanced Security:** Introduce rate limiting, stronger input validation and role-based access control.
- **Payment Reliability:** Implement Stripe webhook verification for reliable payment confirmation.
- **Cloud Image Storage:** Integrate Cloudinary or similar services for scalable food image storage.
- **Advanced Order Tracking:** Provide more detailed order status updates and tracking for customers.
- **Performance Optimization:** Implement pagination, caching and optimized API responses as the application grows.


## Deployment

The application is planned to be deployed using:

| Component | Deployment Platform |
|---|---|
| Customer Frontend | Vercel |
| Admin Panel | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |

Live Demo: Coming Soon

*Deployment configuration and live links will be updated after deployment.*



## Author

**Aryan Sachan**

B.Tech Student | IIIT Kota

GitHub: [Aryan03112005](https://github.com/Aryan03112005)

Project Repository: [Full Stack Food Delivery](https://github.com/Aryan03112005/full-stack-food-delivery)

---

If you find this project useful, consider giving the repository a star!