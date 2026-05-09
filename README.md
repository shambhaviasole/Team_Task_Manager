# 📌 Team Task Management System

A full-stack web application to manage projects, assign tasks, and track team progress with role-based access (Admin & Member).

---

# 🚀 Live Demo

* 🌐 Frontend: `https://your-vercel-url.vercel.app`
* ⚙️ Backend: `https://your-railway-url.up.railway.app`

---

# 🧰 Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router DOM
* CSS

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Bcrypt

### Deployment

* Frontend: Vercel
* Backend: Railway
* Database: MongoDB Atlas

---

# ✨ Features

## 🔐 Authentication

* Signup / Login
* JWT-based authentication
* Role-based access (Admin / Member)

## 📁 Project Management

* Create projects
* Add team members
* View all projects

## ✅ Task Management

* Create tasks
* Assign tasks to users
* Update task status (Pending / In Progress / Completed)
* Set priority & deadline

## 📊 Dashboard

* Total projects
* Total tasks
* Completed tasks
* Pending tasks
* Overdue tasks
* High priority tasks

---

# 📂 Folder Structure

```txt
client
 ├── src
 │   ├── pages
 │   ├── components
 │   ├── services
 │   ├── styles
 │   └── App.jsx

server
 ├── models
 ├── routes
 ├── controllers
 ├── middleware
 └── index.js
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/Team_Task_Manager.git
```

---

## 2. Backend Setup

```bash
cd server
npm install
```

### Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Run Backend

```bash
npm start
```

---

## 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔌 API Endpoints

## Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

## Projects

* GET `/api/projects`
* POST `/api/projects`

## Tasks

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id/status`

## Dashboard

* GET `/api/dashboard`

---

# 🔐 Role-Based Access

| Role   | Permissions                   |
| ------ | ----------------------------- |
| Admin  | Create projects, assign tasks |
| Member | View & update assigned tasks  |

---

# 📊 Database Models

### User

* name
* email
* password
* role

### Project

* title
* description
* createdBy
* members

### Task

* title
* description
* project
* assignedTo
* status
* deadline
* priority

---

# 📸 Screenshots

(Add your UI screenshots here)

---

# 🚀 Deployment

* Frontend deployed on Vercel
* Backend deployed on Railway
* Database hosted on MongoDB Atlas

---

# 📌 Future Improvements

* Task notifications
* Drag & drop task board
* File uploads
* Real-time updates (Socket.io)

---

# 👨‍💻 Author

* Developed by: **Shambhavi Asole**
* Project: Final Year Full Stack Project

