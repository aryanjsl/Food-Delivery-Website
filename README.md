
# Big Bites - Food delivery Website

This repository hosts the source code for Big Bites, a dynamic food ordering website built with the MERN Stack and integrated with Stripe for secure payments. It offers a user-friendly platform for seamless online food ordering.


## Features

- User Panel
- Admin Panel
- JWT Authentication
- Password Hashing with Bcrypt
- Stripe Payment Integration
- Login/Signup
- Logout
- Add to Cart
- Place Order
- Order Management
- Products Management
- Login/Signup
- Authenticated APIs
- REST APIs

## Demo
- User Panel - https://food-delivery-frontend-ylc2.onrender.com
- Admin Panel - https://food-delivery-admin-pu82.onrender.com

## Screenshots
- Main Page
![App Screenshot](https://github.com/aryanjsl/Food-Delivery-Website/blob/7717b733bf7de94a3dd25b802d04cae9be41b5c4/1.png)
- Login Section
![App Screenshot](https://github.com/aryanjsl/Food-Delivery-Website/blob/7717b733bf7de94a3dd25b802d04cae9be41b5c4/2.png)
- Product Section
![App Screenshot](https://github.com/aryanjsl/Food-Delivery-Website/blob/7717b733bf7de94a3dd25b802d04cae9be41b5c4/3.5.png)
- Cart Page
![App Screenshot](https://github.com/aryanjsl/Food-Delivery-Website/blob/7717b733bf7de94a3dd25b802d04cae9be41b5c4/3.png)


## Run Locally


Go to the project directory

```bash
    cd food-Delivery
```

Install dependencies(Frontend)

```bash
    cd frontend
    npm install
```

Install dependencies(Backend)

```bash
    cd backend
    npm install
```
Install dependencies(Admin)
```bash
    cd admin
    npm install
```

Setup Environment Vaiables
```bash
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
```
Setup the Frontend and Backend URL

- App.jsx in Admin folder const url = YOUR_BACKEND_URL
- StoreContext.js in Frontend folder const url = YOUR_BACKEND_URL
- orderController in Backend folder const frontend_url = YOUR_FRONTEND_URL

Start the Backend server
```bash
    nodemon server.js
```
Start the Frontend server
```bash
    npm start
```
Start the Backend server
```bash
    npm start
```
## Tech Stack

- React
- Node.js
- Express.js
- Mongodb Atlas
- Stripe
- JWT-Authentication
- Multer

## Contributing

Contributions are always welcome! Just raise an issue, and we will discuss it.


## Feedback

If you have any feedback, please reach out to me here aryanjs999@gmail.com

