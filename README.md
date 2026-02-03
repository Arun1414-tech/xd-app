# 🚀 PopX Authentication App (React + Vite)

This project is a **pixel-perfect React application** built from an **Adobe XD design**, implementing a complete **Signup → Login → Profile (Account Settings)** flow with client-side authentication.

The application demonstrates clean UI implementation, form validation, protected routing, and proper project structure.

---

## 🔗 Live Demo & Repository

- **Live Demo (Netlify):**  
  👉 https://xd-app.netlify.app/

- **GitHub Repository:**  
  👉 https://github.com/Arun1414-tech/xd-app
---

## 🛠️ Tech Stack

- React JS
- Vite
- React Router DOM
- CSS (Pixel-perfect styling)
- LocalStorage (Client-side auth simulation)
- Netlify (Deployment)

---

## ✨ Features

### 🔐 Authentication
- User signup with validation
- Login allowed only for registered users
- Protected Profile (Account Settings) page
- Logout functionality

### 🧪 Form Validation
- Email format validation
- Phone number validation (10 digits)
- Required field validation
- Prevents duplicate signup

### 🔒 Route Protection
- Profile page accessible only when logged in
- Redirects unauthenticated users to Login
- Maintains login state on page refresh

### 🎨 UI & UX
- Pixel-perfect UI based on Adobe XD design
- Mobile app–style centered layout
- Clean alignment and spacing
- Responsive scrolling for long forms

---

## 📂 Project Structure

```txt
src/
├── pages/
│   ├── Signup.jsx
│   ├── Signup.css
│   ├── Login.jsx
│   ├── Login.css
│   ├── Profile.jsx
│   └── Profile.css
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── utils/
│   └── validators.js
│
├── App.jsx
└── main.jsx
