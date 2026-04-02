#!/bin/bash

# 🚀 Gas Agency Call Center - Run Application Now

echo "════════════════════════════════════════════════════"
echo "  Gas Agency Call Center - Full Stack Application"
echo "════════════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js installation
echo -e "${BLUE}Checking prerequisites...${NC}"
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node -v)${NC}"
echo -e "${GREEN}✓ npm $(npm -v)${NC}"
echo ""

# Start Frontend
echo -e "${BLUE}Starting Frontend (Next.js 14)...${NC}"
echo "Opening frontend in: http://localhost:3000"
echo ""
echo "Run this in Terminal 1:"
echo "────────────────────────────────────────────────────"
echo -e "${YELLOW}cd frontend && npm run dev${NC}"
echo "────────────────────────────────────────────────────"
echo ""

# Start Backend
echo -e "${BLUE}Starting Backend (Express.js)...${NC}"
echo "Opening backend in: http://localhost:3001"
echo ""
echo "Run this in Terminal 2:"
echo "────────────────────────────────────────────────────"
echo -e "${YELLOW}cd backend && npm run dev${NC}"
echo "────────────────────────────────────────────────────"
echo ""

# Test API
echo -e "${BLUE}Testing Backend API...${NC}"
echo ""
echo "Run this in Terminal 3 (after backend starts):"
echo "────────────────────────────────────────────────────"
echo -e "${YELLOW}curl http://localhost:3001/health${NC}"
echo "────────────────────────────────────────────────────"
echo ""

# Info
echo -e "${BLUE}Application Ready!${NC}"
echo ""
echo "📱 Frontend:  http://localhost:3000"
echo "🔗 Backend:   http://localhost:3001"
echo "📊 Dashboard: http://localhost:3000/dashboard"
echo "💻 API Docs:  http://localhost:3001/api"
echo ""

echo "📚 Documentation:"
echo "  • README.md           - Full documentation"
echo "  • QUICK_START.md      - 5-minute setup"
echo "  • PROJECT_SUMMARY.md  - Project overview"
echo "  • BUILD_COMPLETE.md   - Build details"
echo ""

echo "🚀 Deployment:"
echo "  Frontend → Vercel     (Free tier, auto-deploy)"
echo "  Backend  → Render     (Free tier)"
echo "  Database → Render PG  (Free tier)"
echo ""

echo -e "${GREEN}════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✨ Everything is Ready! Happy Coding! ✨${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════${NC}"
