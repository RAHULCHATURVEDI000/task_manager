# 🚀 Deployment Guide - Free Services

This guide will help you deploy your Task Manager application to free hosting services.

## 📋 Prerequisites
- GitHub account
- Vercel account (free)
- Railway or Render account (free)
- Your MongoDB Atlas connection string

---

## 🖥️ Step 1: Deploy Backend (Railway - Recommended)

### Option A: Railway (Easier)

1. **Go to Railway**: https://railway.app/
2. **Sign up/Login** with GitHub
3. **Create New Project** → **Deploy from GitHub repo**
4. **Select your repository** and choose the `backend` folder
5. **Set Environment Variables**:
   - `MONGO_URI`: `mongodb+srv://rahul:Rk57RVb1gakhkp0h@cluster0.6h2txiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: `https://your-app-name.vercel.app` (you'll get this in step 2)
6. **Deploy** - Railway will automatically detect it's a Node.js app
7. **Copy your backend URL** (something like: `https://your-app-name.railway.app`)

### Option B: Render (Alternative)

1. **Go to Render**: https://render.com/
2. **Sign up/Login** with GitHub
3. **New Web Service** → Connect your repository
4. **Configure**:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Add Environment Variables** (same as Railway)
6. **Deploy**

---

## 🌐 Step 2: Deploy Frontend (Vercel)

1. **Go to Vercel**: https://vercel.com/
2. **Sign up/Login** with GitHub
3. **New Project** → **Import** your repository
4. **Configure**:
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Create React App`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. **Environment Variables**:
   - `REACT_APP_API_URL`: `https://your-backend-url.railway.app/api/tasks`
6. **Deploy**
7. **Copy your frontend URL** (something like: `https://your-app-name.vercel.app`)

---

## 🔄 Step 3: Update Backend CORS

1. **Go back to Railway/Render**
2. **Update Environment Variable**:
   - `FRONTEND_URL`: `https://your-app-name.vercel.app`
3. **Redeploy** the backend

---

## ✅ Step 4: Test Your Deployed App

1. **Visit your frontend URL**
2. **Try adding a task** - it should save to your MongoDB database
3. **Refresh the page** - tasks should persist
4. **Try all CRUD operations**:
   - ✅ Add task
   - ✅ Mark complete/incomplete
   - ✅ Delete task

---

## 🔍 Troubleshooting

### Frontend can't connect to backend:
- Check `REACT_APP_API_URL` environment variable
- Make sure backend URL is correct
- Check browser console for CORS errors

### Backend deployment fails:
- Check `MONGO_URI` is correct
- Ensure `package.json` has correct start script
- Check deployment logs

### Database connection issues:
- Verify MongoDB Atlas connection string
- Check IP whitelist in MongoDB Atlas (set to `0.0.0.0/0` for testing)

---

## 🎉 Success URLs

After successful deployment:
- **Frontend**: `https://your-app-name.vercel.app`
- **Backend**: `https://your-backend-name.railway.app`
- **API Health Check**: `https://your-backend-name.railway.app/health`

---

## 💰 Free Tier Limits

### Vercel (Frontend):
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Custom domains

### Railway (Backend):
- ✅ $5 free credit/month
- ✅ Usually enough for small apps

### MongoDB Atlas:
- ✅ 512MB storage
- ✅ Shared clusters
- ✅ Perfect for development

---

## 🔄 Future Updates

To update your deployed app:
1. **Make changes locally**
2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. **Both Vercel and Railway will auto-deploy** from GitHub!

🎊 **Congratulations! Your full-stack Task Manager is now live on the internet!**

