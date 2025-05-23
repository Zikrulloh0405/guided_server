# Tour Booking API

A RESTful API for managing tours, guides, bookings, tourists, and reviews with JWT authentication, built using Express.js.

## Features

- Manage Tours, Guides, Bookings, Tourists, and Reviews
- User authentication with registration and login (JWT)
- Protected routes for authenticated tourists
- Modular code structure with controllers, routes, and middleware
- Environment configuration using dotenv

## Technologies

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- bcrypt.js for password hashing
- dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repo

```bash
git clone https://github.com/yourusername/tour-booking-api.git
cd tour-booking-api
````

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
PORT=3000
JWT_SECRET=your_super_secret_jwt_key_here
```

4. Start the server

```bash
npm start
```

The API will run on `http://localhost:3000` (or your specified PORT).

## API Endpoints

### Authentication

* `POST /api/auth/register` - Register a new tourist
* `POST /api/auth/login` - Login and receive a JWT token

### Tours

* `GET /api/tours` - Get all tours
* `GET /api/tours/:id` - Get tour by ID

### Guides

* `GET /api/guides` - Get all guides
* `GET /api/guides/:id` - Get guide by ID

### Bookings

* `GET /api/bookings` - Get all bookings
* `GET /api/bookings/:id` - Get booking by ID

### Reviews

* `GET /api/reviews` - Get all reviews
* `GET /api/reviews/:id` - Get review by ID

### Tourists (Protected)

* `GET /api/tourists` - Get all tourists (requires JWT)
* `GET /api/tourists/:id` - Get tourist by ID (requires JWT)

## Authentication

* Use the `/api/auth/login` endpoint to obtain a JWT token.
* Include the token in the `Authorization` header as `Bearer <token>` for protected routes.

## Project Structure

```
.
├── controllers
│   ├── authController.js
│   ├── bookingController.js
│   ├── guideController.js
│   ├── reviewController.js
│   ├── touristController.js
│   └── tourController.js
├── data
│   ├── bookings.js
│   ├── guides.js
│   ├── reviews.js
│   ├── tourists.js
│   └── tours.js
├── middleware
│   └── authMiddleware.js
├── routes
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── guideRoutes.js
│   ├── reviewRoutes.js
│   ├── touristRoutes.js
│   └── tourRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
