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
<img width="1676" height="799" alt="1" src="https://github.com/user-attachments/assets/15e7cb97-af6d-4634-80a4-4528b7d04c1e" />
<img width="1920" height="1080" alt="1 5" src="https://github.com/user-attachments/assets/ee0880ab-6ea7-493b-a907-003d8bb6d3ff" />
<img width="1123" height="362" alt="2" src="https://github.com/user-attachments/assets/20527f80-2ea8-4736-b649-d928c35fcb44" />
<img width="1920" height="969" alt="3" src="https://github.com/user-attachments/assets/664c86e3-9090-419b-9fbc-ff2208c30acc" />
<img width="1127" height="508" alt="4" src="https://github.com/user-attachments/assets/22d8a816-8af8-41db-b654-ccafa34e8179" />



