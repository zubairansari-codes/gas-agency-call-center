import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
  next()
})

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    uptime: process.uptime(),
  })
})

// API Routes
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Gas Agency Call Center API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      agents: '/api/agents',
      calls: '/api/calls',
      customers: '/api/customers',
      analytics: '/api/analytics',
      tickets: '/api/tickets',
    },
  })
})

// Authentication Routes
app.post('/api/auth/register', (req: Request, res: Response) => {
  const { email, password, name } = req.body
  
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Mock registration
  res.status(201).json({
    id: '1',
    email,
    name,
    token: 'mock_token_' + Date.now(),
  })
})

app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' })
  }

  // Mock login
  res.json({
    id: '1',
    email,
    name: 'Test User',
    token: 'mock_token_' + Date.now(),
  })
})

// Agents Routes
app.get('/api/agents', (req: Request, res: Response) => {
  res.json([
    { id: '1', name: 'Agent 1', status: 'online', callsHandled: 45, rating: 4.8 },
    { id: '2', name: 'Agent 2', status: 'online', callsHandled: 38, rating: 4.6 },
    { id: '3', name: 'Agent 3', status: 'break', callsHandled: 52, rating: 4.9 },
    { id: '4', name: 'Agent 4', status: 'online', callsHandled: 41, rating: 4.7 },
  ])
})

app.post('/api/agents', (req: Request, res: Response) => {
  const { name, email, status } = req.body
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  res.status(201).json({
    id: Date.now().toString(),
    name,
    email,
    status: status || 'available',
    callsHandled: 0,
    rating: 0,
  })
})

app.get('/api/agents/:id', (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    name: `Agent ${req.params.id}`,
    email: `agent${req.params.id}@example.com`,
    status: 'online',
    callsHandled: 42,
    rating: 4.8,
  })
})

// Calls Routes
app.get('/api/calls', (req: Request, res: Response) => {
  res.json([
    { id: '1', agentId: '1', customerId: '100', duration: 340, status: 'completed', timestamp: new Date() },
    { id: '2', agentId: '2', customerId: '101', duration: 450, status: 'in-progress', timestamp: new Date() },
    { id: '3', agentId: '3', customerId: '102', duration: 280, status: 'completed', timestamp: new Date() },
  ])
})

app.post('/api/calls/start', (req: Request, res: Response) => {
  const { agentId, customerId } = req.body
  
  if (!agentId || !customerId) {
    return res.status(400).json({ error: 'Agent ID and Customer ID are required' })
  }

  res.status(201).json({
    id: Date.now().toString(),
    agentId,
    customerId,
    duration: 0,
    status: 'in-progress',
    recordingUrl: null,
    timestamp: new Date(),
  })
})

// Customers Routes
app.get('/api/customers', (req: Request, res: Response) => {
  res.json([
    { id: '100', name: 'John Doe', phone: '+1234567890', email: 'john@example.com' },
    { id: '101', name: 'Jane Smith', phone: '+0987654321', email: 'jane@example.com' },
    { id: '102', name: 'Bob Johnson', phone: '+1122334455', email: 'bob@example.com' },
  ])
})

// Analytics Routes
app.get('/api/analytics/overview', (req: Request, res: Response) => {
  res.json({
    totalCalls: 342,
    averageDuration: 272,
    agentsOnline: 8,
    customerSatisfaction: 4.75,
    todayRevenue: 2450,
  })
})

app.get('/api/analytics/calls', (req: Request, res: Response) => {
  const data = [
    { time: '00:00', calls: 45 },
    { time: '04:00', calls: 32 },
    { time: '08:00', calls: 78 },
    { time: '12:00', calls: 92 },
    { time: '16:00', calls: 85 },
    { time: '20:00', calls: 65 },
  ]
  res.json(data)
})

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  })
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path,
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║   Gas Agency Call Center API Server Started      ║
║   ✓ Port: ${PORT}                                     ║
║   ✓ Environment: ${process.env.NODE_ENV || 'development'}            ║
║   ✓ Timestamp: ${new Date().toLocaleString()}         ║
║                                                    ║
╚════════════════════════════════════════════════════╝
  `)
})

export default app
