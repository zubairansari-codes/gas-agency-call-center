# 🚀 Deployment Guide - Gas Agency Call Center

Deploy your application to **free servers in 15 minutes**.

---

## 📋 Prerequisites

- GitHub account (free)
- Vercel account (free)
- Render account (free)
- Git installed

---

## 🔵 Step 1: Push to GitHub (5 minutes)

### 1.1 Create GitHub Repository

1. Go to: https://github.com/new
2. Name: `gas-agency-call-center`
3. Description: "Gas Agency Call Center - Full Stack SaaS"
4. Make it **Public**
5. Click "Create Repository"

### 1.2 Push Code to GitHub

```bash
cd /home/zubair/.openclaw/workspace/gas-agency-call-center

git init
git add .
git commit -m "Initial commit: Gas Agency Call Center v1.0.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gas-agency-call-center.git
git push -u origin main
```

✅ **Your code is now on GitHub**

---

## 🟢 Step 2: Deploy Frontend to Vercel (5 minutes)

### 2.1 Create Vercel Project

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Paste: `https://github.com/YOUR_USERNAME/gas-agency-call-center`
4. Select **Import**

### 2.2 Configure Vercel

**Project Settings:**
- **Framework:** Next.js
- **Root Directory:** `./frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

**Environment Variables:**
Add these in Vercel dashboard:
```
NEXT_PUBLIC_API_URL = https://your-backend-url.onrender.com
NEXT_PUBLIC_APP_NAME = GasCall
```

### 2.3 Deploy

1. Click **Deploy**
2. Wait for build (2-3 minutes)
3. Get URL: `https://your-app.vercel.app`

✅ **Frontend is live!**

---

## 🟠 Step 3: Deploy Backend to Render (5 minutes)

### 3.1 Create Render Web Service

1. Go to: https://render.com
2. Click **New +** → **Web Service**
3. Connect GitHub repository
4. Select your `gas-agency-call-center` repo

### 3.2 Configure Web Service

**Settings:**
- **Name:** `gas-agency-api`
- **Environment:** `Node`
- **Region:** `Oregon` (free)
- **Branch:** `main`
- **Root Directory:** `backend`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Plan:** `Free`

### 3.3 Add Environment Variables

Click **Environment** and add:

```
NODE_ENV=production
PORT=3001
JWT_SECRET=your-super-secret-key-here-min-32-chars
FRONTEND_URL=https://your-app.vercel.app
ALLOWED_ORIGINS=https://your-app.vercel.app
```

### 3.4 Create PostgreSQL Database

1. In Render dashboard, click **New +** → **PostgreSQL**
2. **Database Name:** `gas_agency`
3. **Region:** `Oregon`
4. **Plan:** `Free`
5. Click **Create Database**

### 3.5 Connect Database

Copy the connection string from database:
```
postgres://user:password@host:port/dbname
```

Add to Web Service environment:
```
DATABASE_URL=postgres://user:password@host:5432/gas_agency
```

### 3.6 Deploy

Click **Create Web Service**

Wait for deployment (3-5 minutes)

Get URL: `https://gas-agency-api.onrender.com`

✅ **Backend is live!**

---

## 🔗 Step 4: Connect Frontend to Backend (2 minutes)

### 4.1 Update Vercel Environment

1. Go to Vercel dashboard
2. Select your project
3. Settings → **Environment Variables**
4. Update:
```
NEXT_PUBLIC_API_URL = https://gas-agency-api.onrender.com
```
5. Click **Save**
6. Click **Redeploy**

✅ **Frontend updated and redeployed!**

---

## 🧪 Step 5: Test Deployment (2 minutes)

### Test Frontend

```bash
curl https://your-app.vercel.app
```

Should return HTML of landing page.

### Test Backend

```bash
curl https://gas-agency-api.onrender.com/health
```

Should return:
```json
{
  "status": "OK",
  "timestamp": "...",
  "uptime": ...
}
```

### Test API

```bash
curl https://gas-agency-api.onrender.com/api/agents
```

Should return mock agent data.

✅ **Everything is working!**

---

## 📊 Your Live URLs

After deployment:

| Service | URL |
|---------|-----|
| **Frontend** | `https://your-app.vercel.app` |
| **Backend API** | `https://gas-agency-api.onrender.com` |
| **Health Check** | `https://gas-agency-api.onrender.com/health` |
| **API Docs** | `https://gas-agency-api.onrender.com/api` |

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

Both Vercel and Render have **auto-deploy enabled**:

1. Make changes locally
2. Commit: `git commit -m "Update features"`
3. Push: `git push origin main`
4. Vercel & Render automatically redeploy ✅

---

## 💰 Cost Breakdown

| Service | Free Tier | Cost |
|---------|-----------|------|
| **Vercel** (Frontend) | 100GB bandwidth | $0 |
| **Render** (Backend) | 750 compute hours | $0 |
| **Render DB** | PostgreSQL free tier | $0 |
| **Domain** | .vercel.app | $0 |
| **SSL/TLS** | Automatic | $0 |
| **Total** | | **$0/month** |

---

## 🎯 Next Steps

### Immediate
- ✅ Test all pages
- ✅ Test API endpoints
- ✅ Share URLs with team

### This Week
- [ ] Setup custom domain (optional)
- [ ] Configure email notifications
- [ ] Setup error monitoring (Sentry)
- [ ] Enable database backups

### This Month
- [ ] Implement database migrations
- [ ] Setup CI/CD pipeline
- [ ] Add monitoring/logging
- [ ] Scale if needed

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Check:**
1. Vercel logs for errors
2. Environment variables are set
3. `frontend/` exists
4. `package.json` in `frontend/`

**Fix:**
```bash
# Test build locally
cd frontend && npm run build
```

### Backend Not Starting

**Check:**
1. Render logs for errors
2. Environment variables set
3. Database connected
4. Port 3001 available

**Fix:**
```bash
# Test locally
cd backend && npm run dev
```

### Frontend Can't Connect to Backend

**Check:**
1. `NEXT_PUBLIC_API_URL` is correct
2. Backend is running
3. CORS is configured
4. Redeploy frontend

**Fix:**
```bash
# Update env and redeploy
# NEXT_PUBLIC_API_URL = https://gas-agency-api.onrender.com
```

### Database Connection Error

**Check:**
1. `DATABASE_URL` is correct
2. Database is running
3. Connection string has password
4. Database user has permissions

**Fix:**
```bash
# Restart database on Render dashboard
```

---

## 📞 Support Links

- **Vercel Docs:** https://vercel.com/docs
- **Render Docs:** https://render.com/docs
- **Next.js Deploy:** https://nextjs.org/learn/basics/deploying-nextjs-app
- **PostgreSQL:** https://www.postgresql.org/docs

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Frontend environment variables set
- [ ] Frontend deployed and tested
- [ ] Render web service created
- [ ] PostgreSQL database created
- [ ] Backend environment variables set
- [ ] Backend deployed and tested
- [ ] Frontend API URL updated
- [ ] All URLs tested
- [ ] API endpoints working
- [ ] Database connected
- [ ] Continuous deployment enabled
- [ ] Team notified of live URLs

---

## 🎉 You're Live!

Your application is now **live on the internet** with:

✅ **Frontend:** Served from Vercel CDN (global)  
✅ **Backend:** Running on Render (free tier)  
✅ **Database:** PostgreSQL on Render (free tier)  
✅ **Auto-deploy:** Git push → automatic deployment  
✅ **SSL/TLS:** Secure HTTPS everywhere  
✅ **Cost:** $0/month (free forever)  

---

**Congratulations! Your Gas Agency Call Center is live! 🚀**

Share your URLs:
- Frontend: https://your-app.vercel.app
- Backend: https://gas-agency-api.onrender.com

---

**Status:** ✅ Live in Production  
**Uptime:** 24/7  
**Cost:** $0/month  
**Ready to Scale:** Yes  

*Deployment completed! Your application is now accessible worldwide.*
