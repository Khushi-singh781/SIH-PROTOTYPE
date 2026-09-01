import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';

const CasesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const cases = [
    { id: '2025-1047', type: 'Investment Scam', victim: 'Ravi Kumar', amount: '₹18,72,000', risk: 'HIGH', status: 'Investigating', date: '2025-09-02', investigator: 'Admin' },
    { id: '2025-1046', type: 'Phishing Attack', victim: 'Priya Sharma', amount: '₹5,50,000', risk: 'MEDIUM', status: 'New', date: '2025-09-01', investigator: '-' },
    { id: '2025-1045', type: 'Ransomware', victim: 'Amit Patel', amount: '₹12,00,000', risk: 'HIGH', status: 'Escalated', date: '2025-08-31', investigator: 'Admin' },
    { id: '2025-1044', type: 'Pump & Dump', victim: 'Sneha Reddy', amount: '₹3,20,000', risk: 'LOW', status: 'Resolved', date: '2025-08-30', investigator: 'User' },
    { id: '2025-1043', type: 'Fake Trading App', victim: 'Vikram Singh', amount: '₹8,90,000', risk: 'HIGH', status: 'Investigating', date: '2025-08-29', investigator: 'Admin' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-500/20 text-blue-400',
      'Investigating': 'bg-yellow-500/20 text-yellow-400',
      'Escalated': 'bg-red-500/20 text-red-400',
      'Resolved': 'bg-green-500/20 text-green-400',
      'Closed': 'bg-gray-500/20 text-gray-400',
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400';
  };

  const getRiskColor = (risk) => {
    const colors = {
      'HIGH': 'text-red-400',
      'MEDIUM': 'text-yellow-400',
      'LOW': 'text-green-400',
    };
    return colors[risk] || 'text-gray-400';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-300">Cases</h2>
        <button className="btn-primary">
          <Plus size={16} />
          New Case
        </button>
      </div>

      <div className="card">
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="text"
                placeholder="Search cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-navy-900 border border-blue-900/30 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-navy-900 border border-blue-900/30 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50"
          >
            <option value="all">All Status</option>
            <option value="New">New</option>
            <option value="Investigating">Investigating</option>
            <option value="Escalated">Escalated</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
          <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-navy-700">
            <Filter size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-blue-900/30">
                <th className="pb-2 font-medium">Case ID</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Victim</th>
                <th className="pb-2 font-medium">Amount</th>
                <th className="pb-2 font-medium">Risk</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Date</th>
                <th className="pb-2 font-medium">Investigator</th>
                <th className="pb-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseItem) => (
                <tr key={caseItem.id} className="border-b border-blue-900/20 hover:bg-navy-700/30 transition-colors">
                  <td className="py-3 text-sm text-blue-400 font-mono">{caseItem.id}</td>
                  <td className="py-3 text-sm text-gray-300">{caseItem.type}</td>
                  <td className="py-3 text-sm text-gray-300">{caseItem.victim}</td>
                  <td className="py-3 text-sm text-gray-300">{caseItem.amount}</td>
                  <td className={`py-3 text-sm font-medium ${getRiskColor(caseItem.risk)}`}>{caseItem.risk}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(caseItem.status)}`}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-gray-400">{caseItem.date}</td>
                  <td className="py-3 text-sm text-gray-400">{caseItem.investigator}</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="text-gray-400 hover:text-blue-400 p-1 rounded hover:bg-navy-700">
                        <Eye size={14} />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-400 p-1 rounded hover:bg-navy-700">
                        <Edit size={14} />
                      </button>
                      <button className="text-gray-400 hover:text-red-400 p-1 rounded hover:bg-navy-700">
                        <Trash2 size={14} />
                      </button>
                      <button className="text-gray-400 hover:text-white p-1 rounded hover:bg-navy-700">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
          <span>Showing 1-5 of 23 cases</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 rounded hover:bg-navy-700">Previous</button>
            <button className="px-2 py-1 rounded bg-blue-600 text-white">1</button>
            <button className="px-2 py-1 rounded hover:bg-navy-700">2</button>
            <button className="px-2 py-1 rounded hover:bg-navy-700">3</button>
            <button className="px-2 py-1 rounded hover:bg-navy-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;
