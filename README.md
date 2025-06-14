# Task Manager Full-Stack Application

A modern task management application built with React, Node.js, Express, and MongoDB.

## 🚀 Features
- ✅ Add, view, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Real-time updates
- ✅ Responsive design
- ✅ MongoDB persistence

## 🛠️ Tech Stack
- **Frontend**: React, Redux Toolkit, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas

## 📦 Project Structure
```
task_manager/
├── frontend/          # React frontend
├── backend/           # Express.js backend
├── start-dev.sh       # Development startup script
└── README.md
```

## 🏃‍♂️ Local Development

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB Atlas account

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Add your MongoDB connection string

4. Start development servers:
   ```bash
   ./start-dev.sh
   ```

## 🌐 Deployment

### Backend (Railway/Render)
1. Push to GitHub
2. Connect Railway/Render to your repository
3. Set environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: 5001 (or let platform assign)
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your frontend URL

### Frontend (Vercel)
1. Connect Vercel to your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Set environment variable:
   - `REACT_APP_API_URL`: Your backend URL

## 📝 API Endpoints
- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Toggle task completion
- `DELETE /api/tasks/:id` - Delete task
- `GET /health` - Health check

## 🔧 Environment Variables

### Backend (.env)
```
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-url.com/api/tasks
```

