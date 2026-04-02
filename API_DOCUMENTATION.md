# 📡 Gas Agency Call Center - API Documentation

## Base URL

- **Development:** `http://localhost:3001`
- **Production:** `https://gas-agency-backend.onrender.com`

## Authentication

All protected endpoints require a JWT token in the `Authorization` header:

```
Authorization: Bearer <token>
```

## Response Format

All API responses follow this format:

```json
{
  "success": true,
  "message": "Success message",
  "data": {...},
  "timestamp": "2026-04-02T06:00:00Z"
}
```

## Error Handling

Errors return appropriate HTTP status codes:

```json
{
  "success": false,
  "error": "Error message",
  "timestamp": "2026-04-02T06:00:00Z"
}
```

---

## 🔐 Authentication Endpoints

### Register User

```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user-123",
    "email": "user@example.com",
    "name": "John Doe",
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

**Status Codes:**
- `201` - User created successfully
- `400` - Validation error
- `409` - User already exists

### Login

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user-123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "agent",
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

**Status Codes:**
- `200` - Login successful
- `400` - Invalid credentials
- `404` - User not found

### Get Current User

```
GET /api/auth/me
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user-123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "agent"
  }
}
```

---

## 👥 Agents Endpoints

### List All Agents

```
GET /api/agents
Authorization: Bearer <token>
```

**Query Parameters:**
- `status` - Filter by status (online, offline, break)
- `limit` - Number of results (default: 50)
- `offset` - Pagination offset (default: 0)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "agent-1",
      "name": "Agent Smith",
      "status": "online",
      "callsHandled": 45,
      "avgDuration": 272,
      "rating": 4.8,
      "skills": ["sales", "support"]
    }
  ]
}
```

### Create Agent

```
POST /api/agents
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "New Agent",
  "email": "agent@example.com",
  "status": "available",
  "skills": ["sales", "support"]
}
```

**Response:** `201 Created`

### Get Agent Details

```
GET /api/agents/:id
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "agent-1",
    "name": "Agent Smith",
    "status": "online",
    "callsHandled": 45,
    "avgDuration": 272,
    "rating": 4.8,
    "skills": ["sales", "support"],
    "createdAt": "2026-04-01T10:00:00Z"
  }
}
```

### Update Agent

```
PUT /api/agents/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "break",
  "skills": ["sales", "support", "billing"]
}
```

### Delete Agent

```
DELETE /api/agents/:id
Authorization: Bearer <token>
```

---

## ☎️ Calls Endpoints

### List All Calls

```
GET /api/calls
Authorization: Bearer <token>
```

**Query Parameters:**
- `status` - Filter by status
- `agentId` - Filter by agent
- `customerId` - Filter by customer
- `startDate` - Filter from date
- `endDate` - Filter to date
- `limit` - Number of results
- `offset` - Pagination offset

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "call-1",
      "customerId": "customer-1",
      "agentId": "agent-1",
      "status": "completed",
      "duration": 340,
      "startTime": "2026-04-02T06:00:00Z",
      "endTime": "2026-04-02T06:05:40Z",
      "recordingUrl": "https://..."
    }
  ]
}
```

### Start Call

```
POST /api/calls/start
Authorization: Bearer <token>
Content-Type: application/json

{
  "customerId": "customer-1",
  "agentId": "agent-1",
  "callType": "inbound"
}
```

**Response:** `201 Created`

### Get Call Details

```
GET /api/calls/:id
Authorization: Bearer <token>
```

### Update Call Status

```
PUT /api/calls/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "completed",
  "duration": 340,
  "quality": "good"
}
```

### Transfer Call

```
POST /api/calls/:id/transfer
Authorization: Bearer <token>
Content-Type: application/json

{
  "toAgentId": "agent-2",
  "reason": "Requires billing expertise"
}
```

---

## 👤 Customers Endpoints

### List All Customers

```
GET /api/customers
Authorization: Bearer <token>
```

**Query Parameters:**
- `search` - Search by name or phone
- `limit` - Number of results
- `offset` - Pagination offset

### Create Customer

```
POST /api/customers
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Customer",
  "phone": "+1234567890",
  "email": "customer@example.com",
  "company": "ABC Corp"
}
```

### Get Customer Details

```
GET /api/customers/:id
Authorization: Bearer <token>
```

### Update Customer

```
PUT /api/customers/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com"
}
```

### Get Customer Call History

```
GET /api/customers/:id/call-history
Authorization: Bearer <token>
```

---

## 📊 Analytics Endpoints

### Overview Metrics

```
GET /api/analytics/overview
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalCalls": 342,
    "completedCalls": 320,
    "failedCalls": 22,
    "averageDuration": 272,
    "agentsOnline": 8,
    "customerSatisfaction": 4.7,
    "successRate": 93.6,
    "peakHour": 14
  }
}
```

### Call Statistics

```
GET /api/analytics/calls
Authorization: Bearer <token>
```

**Query Parameters:**
- `period` - daily, weekly, monthly (default: daily)
- `startDate` - From date
- `endDate` - To date

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "date": "2026-04-02",
      "totalCalls": 45,
      "inboundCalls": 30,
      "outboundCalls": 15,
      "averageDuration": 285
    }
  ]
}
```

### Agent Performance

```
GET /api/analytics/agents
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "agentId": "agent-1",
      "name": "Agent Smith",
      "callsHandled": 45,
      "averageDuration": 272,
      "rating": 4.8,
      "successRate": 95,
      "satisfaction": 96
    }
  ]
}
```

### Generate Report

```
POST /api/analytics/reports
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "daily",
  "startDate": "2026-04-01",
  "endDate": "2026-04-02",
  "format": "pdf"
}
```

---

## 🎫 Tickets Endpoints

### List Tickets

```
GET /api/tickets
Authorization: Bearer <token>
```

**Query Parameters:**
- `status` - open, in_progress, resolved, closed
- `priority` - low, normal, high, critical
- `assignedTo` - Filter by agent

### Create Ticket

```
POST /api/tickets
Authorization: Bearer <token>
Content-Type: application/json

{
  "customerId": "customer-1",
  "subject": "Billing Issue",
  "description": "Customer was overcharged",
  "priority": "high",
  "category": "billing"
}
```

### Get Ticket Details

```
GET /api/tickets/:id
Authorization: Bearer <token>
```

### Update Ticket

```
PUT /api/tickets/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "resolved",
  "notes": "Issue resolved, refund processed"
}
```

### Add Note to Ticket

```
POST /api/tickets/:id/notes
Authorization: Bearer <token>
Content-Type: application/json

{
  "note": "Customer callback scheduled for tomorrow"
}
```

---

## 🏥 Health Check

### Health Status

```
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2026-04-02T06:00:00Z",
  "uptime": 3600,
  "database": "connected",
  "version": "1.0.0"
}
```

### API Info

```
GET /api
```

**Response:**
```json
{
  "message": "Gas Agency Call Center API",
  "version": "1.0.0",
  "endpoints": {
    "auth": "/api/auth",
    "agents": "/api/agents",
    "calls": "/api/calls",
    "customers": "/api/customers",
    "analytics": "/api/analytics",
    "tickets": "/api/tickets"
  }
}
```

---

## 📝 Rate Limiting

All API endpoints are rate limited to prevent abuse:

- **Default:** 100 requests per 15 minutes
- **Auth Endpoints:** 10 requests per 15 minutes
- **Analytics:** 50 requests per 15 minutes

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1649999999
```

---

## 🔒 Security

### CORS

Configured to allow requests from:
- `http://localhost:3000` (development)
- `https://yourdomain.com` (production)

### Headers

All responses include security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security: max-age=31536000`

### Validation

All inputs are validated and sanitized to prevent:
- SQL injection
- XSS attacks
- CSRF attacks
- Command injection

---

## 📚 Examples

### cURL

```bash
# Get all agents
curl -H "Authorization: Bearer token" \
  http://localhost:3001/api/agents

# Create new call
curl -X POST \
  -H "Authorization: Bearer token" \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "customer-1",
    "agentId": "agent-1",
    "callType": "inbound"
  }' \
  http://localhost:3001/api/calls/start
```

### JavaScript (Fetch)

```javascript
// Get analytics overview
const response = await fetch('/api/analytics/overview', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
const data = await response.json()
console.log(data.data)
```

### Python (Requests)

```python
import requests

headers = {
    'Authorization': f'Bearer {token}'
}

# Get all agents
response = requests.get('http://localhost:3001/api/agents', headers=headers)
data = response.json()
print(data['data'])
```

---

## 🆘 Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 204 | No Content - Successful but no content |
| 400 | Bad Request - Invalid request data |
| 401 | Unauthorized - Missing/invalid token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Server error |

---

## 📞 Support

For API issues or questions:
1. Check this documentation
2. Review error messages in response
3. Check server logs
4. Contact support team

**Version:** 1.0.0  
**Last Updated:** 2026-04-02
