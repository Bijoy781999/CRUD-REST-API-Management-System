# 📋 CRUD REST API Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-No%20License-lightgrey?style=for-the-badge)

A full-stack **CRUD (Create, Read, Update, Delete)** web application developed during my **Web Development Internship at Skill Dunia (in association with Odcet Technologies)**. The project demonstrates the implementation of a RESTful backend using **Node.js**, **Express.js**, and **MongoDB**, along with a responsive frontend built using **HTML**, **CSS**, and **JavaScript**. It enables users to perform Create, Read, Update, and Delete (CRUD) operations through an intuitive interface while showcasing REST API development, MongoDB integration with Mongoose, input validation, error handling, CORS configuration, and asynchronous client-server communication.

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
- [Frontend Validation](#frontend-validation)
- [Roadmap](#roadmap)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

---

# 📖 About the Project

This project demonstrates a complete CRUD workflow consisting of two independent modules.

### Backend

The backend is developed using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**. It exposes RESTful API endpoints to create, retrieve, update, and delete contact records.

### Frontend

The frontend is built with **HTML**, **CSS**, and **Vanilla JavaScript**, communicating with the backend through the Fetch API. It provides a simple and responsive interface with real-time input validation and dynamic CRUD functionality.

---

# ✨ Features

- RESTful CRUD API
- MongoDB database integration using Mongoose
- Responsive frontend using HTML, CSS, and JavaScript
- Real-time client-side form validation
- Inline record editing
- Delete confirmation dialog
- Asynchronous API communication using Fetch API
- CORS-enabled backend
- Modular backend architecture
- Auto-restarting development server using Nodemon

---

# 🛠️ Tech Stack

| Layer | Technology |
|---------|------------|
| Runtime | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Environment Variables | dotenv |
| Cross-Origin Requests | CORS |
| Development Tool | Nodemon |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| API Communication | Fetch API |
| Icons | Google Material Symbols |

---

# 📂 Project Structure

```text
CRUD-REST-API-Management-System/
│
├── README.md
│
└── Source Code/
    │
    ├── Backend/
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── server.js
    │   └── .gitignore
    │
    └── Frontend/
        ├── CRUD.html
        ├── script.js
        └── styles.css
```

> **Note:** The `node_modules` directory is intentionally excluded from this repository. Install all required dependencies using `npm install`.

---

# ✅ Prerequisites

Before running this project, ensure you have installed:

- Node.js (v18 or above)
- npm
- MongoDB Community Server (or MongoDB Atlas)

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/Bijoy781999/CRUD-REST-API-Management-System.git
```

---

## 2. Navigate to the backend directory

### Windows

```bash
cd "CRUD-REST-API-Management-System/Source Code/Backend"
```

### Linux / macOS

```bash
cd CRUD-REST-API-Management-System/Source\ Code/Backend
```

---

## 3. Install dependencies

```bash
npm install
```

This command automatically installs all required packages listed in **package.json**.

---

## 4. Start MongoDB

```bash
mongod
```

The application connects to

```
mongodb://localhost:27017/crudDb
```

by default.

---

## 5. Configure Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=5000
```

---

## 6. Run the backend server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Expected output

```
MongoDB Connected ✅

Server running on:

http://localhost:5000/api/items
```

---

## 7. Run the frontend

Open

```
Source Code/Frontend/CRUD.html
```

directly in your browser.

Or use **Live Server** in Visual Studio Code.

---

# 📡 API Reference

Base URL

```
http://localhost:5000/api/items
```

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/items | Retrieve all records |
| POST | /api/items | Create a record |
| PUT | /api/items/:id | Update a record |
| DELETE | /api/items/:id | Delete a record |

---

## Example Requests

### Get Records

```bash
curl http://localhost:5000/api/items
```

---

### Create Record

```bash
curl -X POST http://localhost:5000/api/items \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","phone":"9876543210"}'
```

---

### Update Record

```bash
curl -X PUT http://localhost:5000/api/items/<id> \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","phone":"9876543210"}'
```

---

### Delete Record

```bash
curl -X DELETE http://localhost:5000/api/items/<id>
```

---

# 🔍 Frontend Validation

The frontend validates every field before allowing submission.

| Field | Validation |
|--------|------------|
| Name | 2–40 characters (letters, spaces and periods) |
| Email | Standard email format |
| Phone | 10–11 numeric digits |

The Submit button remains disabled until all inputs are valid.

---

# 🗺️ Roadmap

- [ ] Move MongoDB URI to `.env`
- [ ] Add authentication and authorization
- [ ] Implement search and pagination
- [ ] Add automated API testing using Jest and Supertest
- [ ] Serve the frontend using Express middleware
- [ ] Deploy the backend using Render or Railway
- [ ] Deploy the frontend using Netlify or Vercel

---

# 📄 License

## No License

This repository is shared for educational and portfolio purposes only.

No permission is granted to copy, modify, distribute, or use the source code without explicit permission from the author.

---

# 🙏 Acknowledgements

- Skill Dunia
- Odcet Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- Google Material Symbols

---

# 👤 Author

## **Bijoy Bhadra**

📧 **Email**

bijoy.bhadra222@gmail.com

💻 **GitHub**

https://github.com/Bijoy781999

🔗 **LinkedIn**

https://www.linkedin.com/in/bijoy-bhadra-5941bb370/

---
