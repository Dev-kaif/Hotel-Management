# 🍽️ Restaurant Reservation System

A sleek and modern full-stack reservation system for restaurants. Users can book, view, and cancel reservations with a beautiful UI and secure backend.

![Preview](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3270&auto=format&fit=crop)

---

## ✨ Features

- ✅ User authentication with JWT
- 📅 Make and manage reservations (date, time, guests)
- 📩 Optional special requests
- 🧾 View and cancel your bookings with confirmation modal
- 🎨 Responsive & theme-consistent UI using Tailwind CSS + Framer Motion
- 🔒 Secure API with Express.js and MongoDB

---

## 🛠️ Tech Stack

**Frontend**
- Next.js with TypeScript
- Tailwind CSS
- Framer Motion
- Axios
- ShadCN UI
- Lucide Icons

**Backend**
- Node.js + Express.js
- MongoDB with Mongoose
- JWT Authentication
- Middleware for protected routes

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/restaurant-reservation.git
cd restaurant-reservation
```

---

### 2. Install Dependencies

**Backend**
```bash
cd server
npm install
```

**Frontend**
```bash
cd client
npm install
```

---

### 3. Environment Variables

Create a `.env` file in both `server/` and `client/` folders.

**`.env` (Server)**
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

**`.env.local` (Client)**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

### 4. Run the App

**Backend**
```bash
cd server
npm run dev
```

**Frontend**
```bash
cd client
npm run dev
```

---

## 📦 Folder Structure

```
restaurant-reservation/
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
├── client/
│   ├── pages/
│   ├── components/
│   ├── api/
│   └── styles/
```

---

## 📸 Screenshots

> Add your own screenshots or deployment links here!

---

## 🧠 Inspiration

This project was built to streamline restaurant reservations with a clean UI and solid user experience. The cancel modal and gold-accent theme bring elegance to the interface while ensuring usability.

---


