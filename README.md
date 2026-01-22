# 📝 Task Manager – Full Stack Application

A full-stack **Task Management application** built with **Node.js, TypeScript, Prisma, SQL, and Next.js (App Router)**.  
The app supports secure authentication using **JWT (Access & Refresh Tokens)** and provides complete **CRUD operations** for managing tasks.

---

## 🚀 Features

### 🔐 Authentication & Security
- User Registration & Login
- Secure password hashing using **bcrypt**
- JWT-based authentication:
  - **Access Token** (short-lived)
  - **Refresh Token** (long-lived)
- Token refresh mechanism for seamless sessions
- Logout functionality
- Protected routes (frontend & backend)
- Persistent login across browser refresh and reopen

### ✅ Task Management
- Create tasks
- View task list
- Update task title
- Toggle task status (Completed / Pending)
- Delete tasks
- Tasks are strictly scoped to the logged-in user

### 🔎 Advanced Task Listing
- Pagination
- Filter tasks by status (Completed / Pending)
- Search tasks by title

### 🎨 Frontend Experience
- Built with **Next.js App Router**
- Responsive UI (Desktop & Mobile)
- Toast notifications for success & error feedback
- Clean and intuitive UX

---

## 🛠 Tech Stack

### Backend
- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL / MySQL (any SQL DB supported)
- JWT (jsonwebtoken)
- bcrypt

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- react-hot-toast

---

## 📂 Project Structure

### Backend
```
task-manager-backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── config/
│   ├── app.ts
│   └── server.ts
├── prisma/
│   └── schema.prisma
└── .env
```

### Frontend
```
task-manager-frontend/
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   └── dashboard/
│   ├── lib/
│   ├── types/
│   └── components/
└── .env.local
```

---

## ⚙️ Environment Variables

### Backend (`.env`)
```env
DATABASE_URL=postgresql://username:password@localhost:5432/task_manager
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
PORT=4000
```

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/task-manager.git
```

---

### 2️⃣ Backend Setup

```bash
cd task-manager-backend
npm install
```

Run Prisma migration:
```bash
npx prisma migrate dev
```

Start backend server:
```bash
npm run dev
```

Backend will run at:
```
http://localhost:4000
```

---

### 3️⃣ Frontend Setup

```bash
cd task-manager-frontend
npm install
npm run dev
```

Frontend will run at:
```
http://localhost:3000
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/register` | Register user |
| POST | `/login` | Login user |
| POST | `/refresh` | Refresh access token |
| POST | `/logout` | Logout user |

### Tasks
| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/tasks` | Get tasks (pagination, filter, search) |
| POST | `/tasks` | Create task |
| GET | `/tasks/:id` | Get task by ID |
| PATCH | `/tasks/:id` | Update task |
| PATCH | `/tasks/:id/toggle` | Toggle task status |
| DELETE | `/tasks/:id` | Delete task |

---

## 🔐 Authentication Flow (JWT)

1. User logs in → receives Access & Refresh tokens
2. Access token used for protected API calls
3. When access token expires:
   - Refresh token is sent to `/refresh`
   - New access token is issued automatically
4. Logout clears refresh token from DB and frontend storage

---

## 🧪 Validation & Error Handling

- Proper HTTP status codes (`400`, `401`, `403`, `404`, `500`)
- Input validation on both frontend and backend
- Secure ownership checks for all task operations

---

## 🌟 Improvements & Future Enhancements

- Store refresh tokens in HttpOnly cookies
- Add role-based access control
- Improve UI with drag-and-drop tasks
- Add due dates & task priorities

---

## 📌 Conclusion

This project demonstrates:
- Secure authentication design
- Clean backend architecture
- Modern frontend with Next.js App Router
- Real-world full-stack development practices

---

### 👨‍💻 Author
**Mohd Talha Khan**  
Full Stack Developer (Node.js | Next.js | TypeScript)
