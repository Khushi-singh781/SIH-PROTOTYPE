import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import DashboardPage from './pages/DashboardPage';
import NetworkAnalysisPage from './pages/NetworkAnalysisPage';
import CasesPage from './pages/CasesPage';
import AIAgentsPage from './pages/AIAgentsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="network-analysis" element={<NetworkAnalysisPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="ai-agents" element={<AIAgentsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
