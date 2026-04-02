import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/helpers'

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      userId?: string
      user?: {
        id: string
        email?: string
        role?: string
      }
    }
  }
}

/**
 * Verify JWT Token Middleware
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'No authorization token provided',
    })
  }

  const decoded = verifyToken(token)
  if (!decoded) {
    return res.status(401).json({
      success: false,
      error: 'Invalid or expired token',
    })
  }

  req.userId = decoded.userId
  next()
}

/**
 * Check User Role Middleware
 */
export function roleMiddleware(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        error: 'Insufficient permissions',
      })
    }

    next()
  }
}

/**
 * Error Handling Middleware
 */
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error('[Error]', err)

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Validation error',
      details: err.message,
    })
  }

  if (err.name === 'NotFoundError') {
    return res.status(404).json({
      success: false,
      error: 'Resource not found',
    })
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Internal server error',
    timestamp: new Date(),
  })
}

/**
 * Request Logging Middleware
 */
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now()

  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`
    )
  })

  next()
}

/**
 * Rate Limiting Middleware
 */
export function rateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
  // Placeholder for rate limiting
  // In production, use express-rate-limit package
  next()
}

/**
 * CORS Configuration
 */
export const corsOptions = {
  origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

/**
 * Request Validation Middleware
 */
export function validateRequest(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false })

    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: error.details.map((e: any) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      })
    }

    req.body = value
    next()
  }
}
