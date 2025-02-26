# Blog Site

## 📌 Overview

This is a full-stack blog application built with **React (Frontend)** and **Node.js with MySQL (Backend)**. It allows users to view, create, and manage blog posts.

## 🛠️ Tech Stack

### Frontend

- **React** (with React Router)
- **Bootstrap** (for styling)

### Backend

- **Node.js** (Express.js for server-side logic)
- **MySQL** (Database, using Knex.js for migrations)
- **XAMPP** (for local MySQL database management)

## 🚀 Features

- View all blog posts on the homepage.
- Click a post to view full details.
- Backend API to handle posts.

## 📂 Folder Structure

```
/blog-site
│── backend       # Node.js + Express API
│   ├── migrations # Knex migrations for MySQL
│   ├── models     # Database models
│   ├── routes     # API routes
│   ├── server.js  # Express server setup
│
│── frontend      # React application
│   ├── src
│   │   ├── components  # Reusable UI components
│   │   ├── pages       # Home, PostPage, etc.
│   │   ├── App.js      # Main React component
│   │   ├── index.js    # Entry point
│   │   ├── styles      # CSS files
│
│── README.md     # Documentation
│── package.json  # Dependencies
│── .gitignore    # Git ignore file
```

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/blog-site.git
cd blog-site
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
npm start
```

- Ensure **XAMPP is running** (Apache & MySQL).
- Update `` with database credentials.
- Run migrations:
  ```sh
  npx knex migrate:latest
  ```

### 3️⃣ Frontend Setup

```sh
cd ../frontend
npm install
npm start
```

## ⚡ API Endpoints

### 📌 Fetch All Posts

```sh
GET /api/posts
```

### 📌 Fetch a Single Post

```sh
GET /api/posts/:id
```

## 🛠️ Troubleshooting

If `npm start` fails in the frontend, try:

```sh
rm -rf node_modules package-lock.json
npm install
npm start
```

## 📜 License

MIT License. Free to use and modify!

---

🚀 **Happy Coding!** 🎉

