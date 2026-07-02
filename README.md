# CRUD-REST-API-Management-System
CRUD REST API Management System is a full-stack web application developed during my Web Development Internship at Skill Dunia (with Odcet Technologies). Built with Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript, it implements REST APIs, CRUD operations, Mongoose integration, validation, and error handling.
# 📋 CRUD REST API Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-No%20License-lightgrey?style=for-the-badge)

A full-stack **CRUD (Create, Read, Update, Delete)** web application developed during my **Web Development Internship at Skill Dunia (in association with Odcet Technologies)**. The project demonstrates the implementation of a RESTful backend using **Node.js**, **Express.js**, and **MongoDB**, along with a responsive frontend built with **HTML, CSS, and JavaScript**. It enables users to perform Create, Read, Update, and Delete (CRUD) operations through an intuitive interface while showcasing REST API development, MongoDB integration with Mongoose, input validation, error handling, CORS configuration, and asynchronous client-server communication.

---

# 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Reference](#api-reference)
- [Frontend Form Validation](#frontend-form-validation)
- [Roadmap](#roadmap)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

---

# 📖 About the Project

This project demonstrates a complete CRUD workflow consisting of two independent modules:

- **Source Code/Backend** – A RESTful API built with Express.js that stores records in MongoDB using Mongoose and exposes **GET**, **POST**, **PUT**, and **DELETE** endpoints under `/api/items`.

- **Source Code/Frontend** – A lightweight frontend built with HTML, CSS, and Vanilla JavaScript that communicates with the backend using the Fetch API. It displays records, validates user input in real time, and supports creating, updating, and deleting records.

Both modules run independently. The frontend communicates with the backend over HTTP, allowing the application to function without requiring any frontend framework or build tools.

---

# ✨ Features

- Full CRUD operations using REST APIs
- MongoDB database integration with Mongoose ODM
- Responsive frontend built with HTML, CSS, and Vanilla JavaScript
- Client-side validation for name, email, and phone number
- Inline record editing
- Delete confirmation dialog
- CORS-enabled backend
- Asynchronous API communication using Fetch API
- Modular backend architecture
- Auto-restarting development server using Nodemon

---

# 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Environment Variables | dotenv |
| CORS | cors |
| Development Tool | Nodemon |
| Frontend | HTML5, CSS3, JavaScript (Fetch API) |
| Icons | Google Material Symbols |

---

# 📂 Project Structure

```text
CRUD-REST-API-Management-System/
│
└── Source Code/
    ├── Backend/
    │   ├── node_modules/
    │   ├── package.json
    │   ├── package-lock.json
    │   └── server.js
    │
    └── Frontend/
        ├── CRUD.html
        ├── script.js
        └── styles.css
```

---

# ✅ Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or above)
- npm
- MongoDB Community Server (or MongoDB Atlas)

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Bijoy781999/CRUD-REST-API-Management-System.git
```

## 2. Navigate to the Backend Folder

### Windows

```bash
cd "CRUD-REST-API-Management-System/Source Code/Backend"
```

### Linux/macOS

```bash
cd CRUD-REST-API-Management-System/Source\ Code/Backend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start MongoDB

```bash
mongod
```

The project connects to

```
mongodb://localhost:27017/crudDb
```

by default.

## 5. Run the Backend

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

You should see

```
MongoDB Connected ✅
Server is running on http://localhost:5000/api/items
```

## 6. Run the Frontend

Open

```
Source Code/Frontend/CRUD.html
```

directly in your browser or use the **Live Server** extension in VS Code.

---

# 🔑 Environment Variables

Create a `.env` file inside

```
Source Code/Backend/
```

```env
PORT=5000
```

| Variable | Description | Default |
|-----------|-------------|---------|
| PORT | Express server port | 5000 |

> **Note:** The MongoDB connection string is currently defined inside `server.js`. You may replace it with an environment variable such as `MONGO_URI` for better configuration management.

---

# ▶️ Running the Application

From

```
Source Code/Backend
```

run

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Then open

```
Source Code/Frontend/CRUD.html
```

in your browser.

---

# 📡 API Reference

Base URL

```
http://localhost:5000/api/items
```

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/items | Retrieve all records |
| POST | /api/items | Create a new record |
| PUT | /api/items/:id | Update an existing record |
| DELETE | /api/items/:id | Delete a record |

---

## Example Requests

### Get All Records

```bash
curl http://localhost:5000/api/items
```

### Create Record

```bash
curl -X POST http://localhost:5000/api/items \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","phone":"9876543210"}'
```

### Update Record

```bash
curl -X PUT http://localhost:5000/api/items/<id> \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","phone":"9876543210"}'
```

### Delete Record

```bash
curl -X DELETE http://localhost:5000/api/items/<id>
```

---

# 🔍 Frontend Validation

The application performs real-time validation for:

| Field | Validation |
|--------|------------|
| Name | Letters, spaces, periods (2–40 characters) |
| Email | Standard email format |
| Phone | 10–11 numeric digits |

The **Submit** button remains disabled until all inputs are valid.

---

# 🗺️ Roadmap

- [ ] Move MongoDB URI to `.env`
- [ ] Add Authentication & Authorization
- [ ] Implement Search and Pagination
- [ ] Add API testing using Jest and Supertest
- [ ] Serve frontend through Express middleware
- [ ] Deploy backend on Render/Railway
- [ ] Deploy frontend on Netlify/Vercel

---

# 📄 License

**No License**

This repository is provided for educational and portfolio purposes.

No permission is granted to copy, modify, distribute, or use this source code without explicit permission from the author.

---

# 🙏 Acknowledgements

- Express.js
- MongoDB
- Mongoose
- Node.js
- Google Material Symbols

---

# 👤 Author

## Bijoy Bhadra

**GitHub**

https://github.com/Bijoy781999

**LinkedIn**

https://www.linkedin.com/in/bijoy-bhadra-5941bb370/

**Email**

bijoy.bhadra222@gmail.com
