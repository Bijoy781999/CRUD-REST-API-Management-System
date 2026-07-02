# CRUD-REST-API-Management-System
CRUD REST API Management System is a full-stack web application developed during my Web Development Internship at Skill Dunia (with Odcet Technologies). Built with Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript, it implements REST APIs, CRUD operations, Mongoose integration, validation, and error handling.
# 📋 CRUD API Project

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

A full-stack **CRUD (Create, Read, Update, Delete)** web application for managing simple contact records — **Name, Email, and Phone Number**. The backend is a RESTful API built with **Node.js, Express 5, and MongoDB (Mongoose)**; the frontend is a lightweight, framework-free **HTML/CSS/JavaScript** client that talks to the API with `fetch`.

## 📖 Table of Contents

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

## About the Project

This project demonstrates a complete CRUD workflow split into two independent parts:

- **`backend/`** — An Express REST API that stores records in MongoDB via Mongoose and exposes `GET`, `POST`, `PUT`, and `DELETE` endpoints under `/api/items`.
- **`frontend/`** — A single static HTML page with vanilla JavaScript that consumes the API: it lists existing records, validates form input in real time, and lets you add, edit, and delete entries.

The two parts run independently — the frontend is a static file that calls the backend over HTTP, so you can open it directly in a browser as long as the API server is running.

## ✨ Features

- **Full CRUD** — create, list, update, and delete records through a REST API
- **MongoDB persistence** via Mongoose schemas/models
- **CORS-enabled** API so the static frontend can call it from `file://` or any local origin
- **Zero-build frontend** — plain HTML, CSS, and JavaScript, no bundler or framework required
- **Real-time client-side validation** for name, email, and phone with regex patterns, inline red-border feedback, and a submit button that's disabled until the form is valid
- **Inline editing** — clicking "Edit" repopulates the form and switches the next submit to an update (`PUT`) instead of a create (`POST`)
- **Delete confirmation** dialog to prevent accidental deletions
- **Auto-restarting dev server** via Nodemon

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Web framework | Express 5 |
| Database | MongoDB |
| ODM | Mongoose 8 |
| Cross-origin requests | CORS |
| Environment config | dotenv |
| Dev tooling | Nodemon |
| Frontend | HTML5, CSS3, Vanilla JavaScript (Fetch API) |
| Icons | Google Material Symbols |

## 📂 Project Structure

```
CRUD-API_Project/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js          # Express app, MongoDB connection, /api/items routes
└── frontend/
    ├── CRUD.html          # Form + records list container
    ├── script.js          # Fetch calls, validation, DOM rendering
    └── styles.css         # Styling for the form and record list
```

## ✅ Prerequisites

Make sure you have the following installed before you begin:

- [Node.js](https://nodejs.org/) v18 or higher (and npm)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on the default port (`27017`), or a connection string to a remote instance

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
   git clone https://github.com/<your-username>/CRUD-API_Project.git
   cd CRUD-API_Project/backend
```

2. **Install backend dependencies**

```bash
   npm install
```

3. **Start MongoDB** (skip this step if you're using a remote/Atlas cluster)

```bash
   mongod
```

   The app connects to `mongodb://localhost:27017/crudDb` and creates the `crudDb` database automatically the first time a record is saved.

4. **Run the backend server** — see [Running the Application](#running-the-application) below.

5. **Open the frontend** — open `frontend/CRUD.html` directly in your browser, or serve it with a tool like VS Code's "Live Server" extension.

## 🔑 Environment Variables

The backend loads variables from a `.env` file in `backend/` via `dotenv`. Create one with:

```
PORT=5000
```

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the Express server listens on | `5000` |

> **Note:** The MongoDB connection string is currently set directly in `server.js` (`mongodb://localhost:27017/crudDb`) rather than read from `.env`. To point the app at a different database, update that connection string directly (or wire it up to `process.env.MONGO_URI` yourself).

## ▶️ Running the Application

From the `backend/` directory:

```bash
# Development (auto-restarts on file changes via Nodemon)
npm run dev

# Production
npm start
```

You should see:

```
MongoDB Connected ✅
Sever is running on http://localhost:5000/api/items
```

Then open `frontend/CRUD.html` in your browser — it calls the API at `http://localhost:5000/api/items`, so make sure the port matches your `PORT` setting.

## 📡 API Reference

Base URL: `http://localhost:5000/api/items`

| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| `GET` | `/api/items` | Get all items | – |
| `POST` | `/api/items` | Create a new item | `{ "name", "email", "phone" }` |
| `PUT` | `/api/items/:id` | Update an item by ID | `{ "name", "email", "phone" }` |
| `DELETE` | `/api/items/:id` | Delete an item by ID | – |

### Get all items

```bash
curl http://localhost:5000/api/items
```

<details>
<summary>Example response — <code>200 OK</code></summary>

```json
[
  {
    "_id": "6710f2a1c9d4e2b1a8f3d9c1",
    "name": "Ada Lovelace",
    "email": "ada@example.com",
    "phone": "9876543210",
    "__v": 0
  }
]
```

</details>

### Create an item

```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada Lovelace","email":"ada@example.com","phone":"9876543210"}'
```

<details>
<summary>Example response — <code>201 Created</code></summary>

```json
{
  "_id": "6710f2a1c9d4e2b1a8f3d9c1",
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "phone": "9876543210",
  "__v": 0
}
```

</details>

### Update an item

```bash
curl -X PUT http://localhost:5000/api/items/6710f2a1c9d4e2b1a8f3d9c1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada Lovelace","email":"ada.lovelace@example.com","phone":"9876543210"}'
```

<details>
<summary>Example response — <code>200 OK</code></summary>

```json
{
  "_id": "6710f2a1c9d4e2b1a8f3d9c1",
  "name": "Ada Lovelace",
  "email": "ada.lovelace@example.com",
  "phone": "9876543210",
  "__v": 0
}
```

</details>

### Delete an item

```bash
curl -X DELETE http://localhost:5000/api/items/6710f2a1c9d4e2b1a8f3d9c1
```

<details>
<summary>Example response — <code>200 OK</code></summary>

```json
{
  "message": "Item deleted successfully",
  "deleted": {
    "_id": "6710f2a1c9d4e2b1a8f3d9c1",
    "name": "Ada Lovelace",
    "email": "ada.lovelace@example.com",
    "phone": "9876543210",
    "__v": 0
  }
}
```

</details>

All endpoints return `400 Bad Request` with `{ "error": "<message>" }` on validation/server errors; `PUT`/`DELETE` return `404 Not Found` if the ID doesn't exist.

## 🔍 Frontend Form Validation

`script.js` validates every field client-side before it will submit, highlighting invalid fields in red as you type:

| Field | Rule |
|---|---|
| Name | 2–40 characters; letters, spaces, and periods only; must contain at least one uppercase and one lowercase letter |
| Email | Standard `local@domain.tld` format |
| Phone | 10–11 digits; non-numeric characters are stripped automatically as you type |

The **Submit** button stays disabled until all three fields pass validation.

## 🗺️ Roadmap

- [ ] Move the MongoDB connection string into `.env` (`MONGO_URI`)
- [ ] Add a `.gitignore` for `node_modules/` and `.env`
- [ ] Remove unused dependencies (`body-parser`, `dotevn`) from `package.json`
- [ ] Add pagination and search/filter to the items list
- [ ] Add authentication & authorization
- [ ] Add automated tests (e.g. Jest + Supertest)
- [ ] Serve the frontend via Express static middleware or a bundler
- [ ] Deploy the backend (Render/Railway) and frontend (Netlify/Vercel)

## 📄 License

This project is licensed under the **ISC License**, as declared in `backend/package.json`.

## 🙏 Acknowledgements

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Google Material Symbols](https://fonts.google.com/icons) for the UI icons

## 👤 Author

**[Your Name]**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com
