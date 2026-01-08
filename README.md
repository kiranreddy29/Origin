# 📌 Origin – Full-Stack MERN Portfolio

A full-stack portfolio web application built using the MERN stack, showcasing projects, skills, and a fully functional contact form with backend persistence.

## 🚀 Tech Stack

### Frontend
- React
- JavaScript
- HTML, CSS

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB Atlas
- Mongoose

### Other
- Git & GitHub
- Environment variables (`.env`)
- CORS

---

## ✨ Features
- Responsive portfolio website built with React
- Client-side routing using React Router
- Contact form implemented using controlled components
- RESTful API built with Express to handle form submissions
- Contact messages stored persistently in MongoDB
- Secure handling of sensitive data using environment variables
- Clean project structure with separation of frontend and backend

---

## 🧠 What I Learned
- Building end-to-end full-stack applications using MERN
- Handling async operations and API communication
- Designing REST APIs and MongoDB schemas
- Managing application state and form validation in React
- Following best practices for Git and project structure

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/kiranreddy29/Origin.git
cd Origin
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a .env file in backend/:
```bash
MONGO_URI=your_mongodb_connection_string
```
Start backend:
```bash
node server.js
```
### 3. Frontend setup
```bash
cd ../frontend
npm install
npm start
```

### 📬 Contact Form Flow
```bash
React Form → Express API → MongoDB Atlas → Response to React
```
