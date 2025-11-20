<h2>📘 EmpowerSA — Skills Development Platform (MERN)</h2>

EmpowerSA is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to empower underserved communities by providing access to skills training, job opportunities, trainers, and learning pathways.

This platform helps learners, trainers, and administrators collaborate in a structured skills-development ecosystem.


---

<h2>🚀 Features</h2>

<h3>🔐 Authentication & Authorization</h3>

JWT-based login

Role management: learner, trainer, admin

Protected routes using authMiddleware.js


<h2>👥 User Management</h2>

Register/Login

Role-specific dashboards

Trainers can upload courses

Admins can approve or manage content


<h2>📚 Courses & Learning Modules</h2>

Learners browse available skills courses

Trainers upload material

Admins manage categories and trainers


<h2>📝 Job Listings</h2>

Admin or trainers can post job opportunities

Learners can view and apply

CRUD operations via backend API

<h2>Project Structure </h2>

```bash
empowersa/
 ├── backend/
 │    ├── controllers/
 │    ├── middleware/
 │    │    └── authMiddleware.js
 │    ├── models/
 │    ├── routes/
 │    ├── server.js
 │    └── .env (your environment variables)
 │
 ├── frontend/
 │    ├── public/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── pages/
 │    │    ├── context/
 │    │    ├── App.jsx
 │    │    ├── main.jsx
 │    │    └── styles/
 │    └── package.json
 │
 ├── README.md
 └── package.json
 ```
<h2>⚙️ Installation & Setup</h2>

📌 1. Clone the Repository
```bash
git clone <your-repo-url>
cd empowersa
```

---

<h2>📦 Backend Setup</h2>

➤ Install dependencies
```bash
cd backend
npm install
```
➤ Create .env file
```bash
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
```
➤ Start the backend
```bash
npm run dev
```

---

<h2>💻 Frontend Setup</h2>

➤ Install dependencies
```bash
cd frontend
npm install
```
➤ Start the React app
```bash
npm run dev
```

---

<h3>🔗 Connecting Frontend & Backend</h3>

Inside frontend/.env:

VITE_API_URL=http://localhost:5000/api


---

<h2>🧪 Testing (Optional)</h2>

Both backend and frontend support Jest or Cypress test setup if you want to add tests later.


---

<h2>🚀 Deployment Guide</h2>

Backend Deployment Options:

Render

Railway

VPS hosting

Docker


Frontend Deployment Options:

Netlify

Vercel

Cloudflare Pages



---

<h2>🧑‍💼 Admin Features</h2>

Manage courses

Approve trainers

Add/edit job posts

Manage users


<h2>🎓 Learner Features</h2>

Browse and enroll in skills courses

View jobs

Track profile and progress


<h2>🧑‍🏫 Trainer Features</h2>

Upload course material

Manage learner progress

Post opportunities



---

<h2>🙌 Contributing</h2>

Pull requests are welcome!
For major changes, please open a discussion first.


---

<h2>📄 License</h2>

MIT License

 
