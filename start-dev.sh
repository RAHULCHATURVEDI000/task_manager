#!/bin/bash

# Start Task Manager Development Environment
echo "🚀 Starting Task Manager Development Environment..."

# Start backend server in background
echo "📡 Starting backend server on port 5001..."
cd backend && npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend development server
echo "🌐 Starting frontend server on port 3000..."
cd ../frontend && npm start &
FRONTEND_PID=$!

echo "✅ Both servers are starting!"
echo "Backend: http://localhost:5001/api/tasks"
echo "Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup processes on exit
cleanup() {
    echo "\n🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "👋 All servers stopped. Goodbye!"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait

