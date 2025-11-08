# ✅ PrimeTrade.ai Internship Assignment — Backend + Frontend (Full Stack Project)

## 🚀 Project Overview

This project is part of the **Backend Developer Intern Assignment** for **PrimeTrade.ai**.

The requirement was to build:

### ✅ Backend (Primary Focus)
- User authentication (Register + Login)
- Role-based access (User / Admin)
- JWT Authentication (Access token)
- CRUD operations on a task entity
- Secure & scalable folder structure
- API Versioning (`/api/v1/`)
- MongoDB database integration (Mongoose)
- Proper error handling & middleware
- API documentation via **Postman**

### ✅ Frontend (Supportive)
- Built using **React**
- User Registration + Login UI
- Dashboard to manage tasks (CRUD actions)
- Uses JWT token stored in `localStorage`
- Fetches data from backend via REST APIs

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Backend | Node.js, Express.js, Mongoose, JWT, bcryptjs |
| Database | MongoDB (Compass / Atlas) |
| Frontend | React (CRA) |
| Tools | Postman (API documentation), GitHub, Nodemon |

---

## ⚙️ Features (Implemented)

✅ User sign-up & login  
✅ JWT authentication (with expiry)  
✅ Role-based access control (admin / user)  
✅ Create / update / delete tasks  
✅ View own tasks (user)  
✅ Admin can view all tasks  
✅ Protected routes with `authMiddleware`  
✅ Postman documentation included  
✅ Log files added inside repository  

---

## 🔥 API Endpoints (Postman Collection Included)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/v1/auth/register` | Register user | ❌ |
| POST | `/api/v1/auth/login` | Login user & return JWT | ❌ |
| GET | `/api/v1/tasks` | Get tasks (admin -> all, user -> own) | ✅ |
| POST | `/api/v1/tasks` | Create new task | ✅ |
| GET | `/api/v1/tasks/:id` | Get single task | ✅ |
| PUT | `/api/v1/tasks/:id` | Update task | ✅ |
| DELETE | `/api/v1/tasks/:id` | Delete task | ✅ |

---

## Basic Frontend

