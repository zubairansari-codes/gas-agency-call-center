// Helper utilities for the API

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

/**
 * Generate JWT Token
 */
export async function generateToken(userId: string, expiresIn: string = '24h'): Promise<string> {
  const secret = process.env.JWT_SECRET || 'default_secret_key'
  return jwt.sign({ userId }, secret, { expiresIn })
}

/**
 * Verify JWT Token
 */
export function verifyToken(token: string): { userId: string } | null {
  const secret = process.env.JWT_SECRET || 'default_secret_key'
  try {
    return jwt.verify(token, secret) as { userId: string }
  } catch (error) {
    return null
  }
}

/**
 * Hash password with bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  return bcrypt.hash(password, saltRounds)
}

/**
 * Compare passwords
 */
export async function comparePasswords(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

/**
 * Calculate average call duration
 */
export function calculateAverageDuration(calls: number, totalDuration: number): number {
  if (calls === 0) return 0
  return Math.round(totalDuration / calls)
}

/**
 * Format duration to readable string
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`
  }
  return `${secs}s`
}

/**
 * Generate unique call ID
 */
export function generateCallId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 9)
  return `CALL-${timestamp}-${random}`.toUpperCase()
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?1?\d{9,15}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000)
}

/**
 * Calculate call statistics
 */
export function calculateCallStats(calls: any[]) {
  const totalCalls = calls.length
  const completedCalls = calls.filter((c) => c.status === 'completed').length
  const failedCalls = calls.filter((c) => c.status === 'failed').length
  const totalDuration = calls.reduce((sum, c) => sum + (c.duration || 0), 0)
  const averageDuration = totalCalls > 0 ? Math.round(totalDuration / totalCalls) : 0

  return {
    totalCalls,
    completedCalls,
    failedCalls,
    successRate: totalCalls > 0 ? Math.round((completedCalls / totalCalls) * 100) : 0,
    totalDuration,
    averageDuration,
  }
}

/**
 * Get date range for analytics
 */
export function getDateRange(days: number): { start: Date; end: Date } {
  const end = new Date()
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000)
  return { start, end }
}

/**
 * Rate limit check (simple implementation)
 */
export function checkRateLimit(ip: string, limit: number = 100, window: number = 15): boolean {
  // In production, use Redis for proper rate limiting
  // This is a placeholder implementation
  return true
}

/**
 * Generate mock call data for testing
 */
export function generateMockCallData(count: number = 10) {
  const statuses = ['completed', 'failed', 'in-progress']
  const types = ['support', 'sales', 'inquiry', 'complaint']

  return Array.from({ length: count }).map((_, i) => ({
    id: `CALL-${i + 1}`,
    customerId: `CUST-${Math.floor(Math.random() * 100)}`,
    agentId: `AGENT-${Math.floor(Math.random() * 10) + 1}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    type: types[Math.floor(Math.random() * types.length)],
    duration: Math.floor(Math.random() * 600) + 30, // 30 seconds to 10 minutes
    startTime: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
  }))
}

/**
 * Generate API response
 */
export function successResponse(data: any, message: string = 'Success', statusCode: number = 200) {
  return {
    success: true,
    message,
    data,
    timestamp: new Date(),
  }
}

/**
 * Generate error response
 */
export function errorResponse(error: string, statusCode: number = 400) {
  return {
    success: false,
    error,
    timestamp: new Date(),
    statusCode,
  }
}
