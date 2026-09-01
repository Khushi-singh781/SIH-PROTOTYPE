import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout/Layout'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Dashboard from './pages/Dashboard'
import NetworkGraph from './pages/NetworkGraph'
import AIAnalysis from './pages/AIAnalysis'
import Prioritizer from './pages/Prioritizer'
import VictimIntake from './pages/VictimIntake'
import Timeline from './pages/Timeline'
import Fingerprinting from './pages/Fingerprinting'
import RiskXRay from './pages/RiskXRay'
import Copilot from './pages/Copilot'
import { useAuth } from './contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="network" element={<NetworkGraph />} />
            <Route path="ai-analysis" element={<AIAnalysis />} />
            <Route path="prioritizer" element={<Prioritizer />} />
            <Route path="intake" element={<VictimIntake />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="fingerprinting" element={<Fingerprinting />} />
            <Route path="risk-xray" element={<RiskXRay />} />
            <Route path="copilot" element={<Copilot />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App
