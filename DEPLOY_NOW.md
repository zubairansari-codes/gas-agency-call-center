# ⚡ DEPLOY NOW - Quick 15-Minute Deployment

Get your app live in **15 minutes** on free servers.

---

## 🚀 The Fast Track (4 Simple Steps)

### Step 1: Push to GitHub (2 min)
```bash
cd /home/zubair/.openclaw/workspace/gas-agency-call-center

git init
git add .
git commit -m "Gas Agency Call Center v1.0.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gas-agency-call-center.git
git push -u origin main
```

✅ Replace `YOUR_USERNAME` with your GitHub username

### Step 2: Deploy Frontend to Vercel (5 min)
1. Go: https://vercel.com/new
2. Click "Import Git Repository"
3. Paste: `https://github.com/YOUR_USERNAME/gas-agency-call-center`
4. Choose `./frontend` as root directory
5. Add Environment Variable:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://gas-agency-api.onrender.com` (you'll get this in Step 3)
6. Click **Deploy**

✅ Wait 2-3 minutes for deployment
✅ Get your Frontend URL: `https://your-app.vercel.app`

### Step 3: Deploy Backend to Render (5 min)
1. Go: https://render.com
2. Click **New +** → **Web Service**
3. Connect GitHub
4. Configure:
   - Name: `gas-agency-api`
   - Root: `backend`
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Plan: **Free**
5. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=3001
   JWT_SECRET=your-super-secret-key-min-32-chars
   FRONTEND_URL=https://your-app.vercel.app
   ALLOWED_ORIGINS=https://your-app.vercel.app
   ```
6. Click **Create Web Service**

✅ Wait 3-5 minutes
✅ Get your Backend URL: `https://gas-agency-api.onrender.com`

### Step 4: Update Vercel with Backend URL (2 min)
1. Go to Vercel dashboard
2. Select your project
3. Settings → Environment Variables
4. Update:
   ```
   NEXT_PUBLIC_API_URL = https://gas-agency-api.onrender.com
   ```
5. Click **Redeploy**

✅ Done! Your app is live!

---

## 🌐 Your Live URLs

After deployment, you'll have:

| Service | URL |
|---------|-----|
| Frontend | `https://your-app.vercel.app` |
| Backend | `https://gas-agency-api.onrender.com` |
| API Status | `https://gas-agency-api.onrender.com/health` |

---

## ✅ Test It

### Test Frontend
```bash
curl https://your-app.vercel.app
```

### Test Backend
```bash
curl https://gas-agency-api.onrender.com/health
```

Should return `{"status":"OK",...}`

### Test API
```bash
curl https://gas-agency-api.onrender.com/api/agents
```

---

## 🔄 Auto-Deploy Future Changes

Now whenever you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Both Vercel and Render **automatically redeploy** ✅

---

## 💰 Cost

**Total: $0/month** (forever free)

- Vercel: Free tier (100GB bandwidth)
- Render: Free tier (750 compute hours)
- Database: Free PostgreSQL

---

## 🎯 Optional: Custom Domain

If you want your own domain:

### For Frontend (Vercel)
1. Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., mycallcenter.com)
3. Update DNS records

### For Backend (Render)
1. Render Dashboard → Custom Domain
2. Add subdomain (e.g., api.mycallcenter.com)
3. Update DNS records

---

## 📞 Deployment Issues?

See **DEPLOYMENT_GUIDE.md** for detailed troubleshooting.

---

## 🎉 You're Live!

Your Gas Agency Call Center is now **live on the internet** with:

✅ Global CDN (Vercel)
✅ Auto-scaling backend (Render)
✅ PostgreSQL database
✅ Auto-deployment on git push
✅ 24/7 uptime
✅ $0 cost

---

**Next:** Share your URLs with your team!

```
Frontend:  https://your-app.vercel.app
Backend:   https://gas-agency-api.onrender.com
```

---

*Your application is now in production! 🚀*
