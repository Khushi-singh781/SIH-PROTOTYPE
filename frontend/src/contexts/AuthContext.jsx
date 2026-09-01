import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const mockUsers = [
  {
    id: 'inv_001',
    email: 'investigator@chainguard.gov',
    password: 'SecurePass123',
    name: 'Alex Rivera',
    agency: 'Cyber Crime Unit',
    role: 'senior_investigator',
    mfaEnabled: true
  },
  {
    id: 'inv_002',
    email: 'analyst@chainguard.gov',
    password: 'AnalystPass456',
    name: 'Jamie Chen',
    agency: 'Financial Intelligence',
    role: 'analyst',
    mfaEnabled: false
  }
]

const generateJWT = (user) => {
  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
    exp: Date.now() + 3600000,
    iat: Date.now()
  }
  return btoa(JSON.stringify(payload))
}

const verifyJWT = (token) => {
  try {
    const payload = JSON.parse(atob(token))
    if (payload.exp < Date.now()) return null
    return payload
  } catch {
    return null
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [auditLog, setAuditLog] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    if (token) {
      const userData = verifyJWT(token)
      if (userData) {
        const foundUser = mockUsers.find(u => u.id === userData.sub)
        setUser(foundUser)
        logActivity('Session restored', foundUser?.id)
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password, mfaCode) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password)
    if (foundUser && (!foundUser.mfaEnabled || mfaCode === '123456')) {
      const token = generateJWT(foundUser)
      localStorage.setItem('jwt_token', token)
      setUser(foundUser)
      logActivity('User logged in', foundUser.id)
      return { success: true }
    }
    return { success: false, error: 'Invalid credentials or MFA code' }
  }

  const register = async (userData) => {
    const newUser = {
      id: `user_${Date.now()}`,
      ...userData,
      role: 'investigator',
      createdAt: new Date().toISOString()
    }
    mockUsers.push(newUser)
    const token = generateJWT(newUser)
    localStorage.setItem('jwt_token', token)
    setUser(newUser)
    logActivity('New user registered', newUser.id)
    return { success: true }
  }

  const logout = () => {
    logActivity('User logged out', user?.id)
    localStorage.removeItem('jwt_token')
    setUser(null)
  }

  const logActivity = (action, userId) => {
    const entry = {
      timestamp: new Date().toISOString(),
      action,
      userId,
      ip: '127.0.0.1'
    }
    setAuditLog(prev => [entry, ...prev].slice(0, 100))
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      loading,
      auditLog
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
