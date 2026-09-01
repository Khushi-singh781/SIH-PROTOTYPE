import React, { useState } from 'react';
import { Download, Share2, Printer, FileText, FileJson, FileSpreadsheet, Calendar, Filter, Search } from 'lucide-react';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('investigation');

  const reports = [
    { id: 1, title: 'Case #2025-1047 Investigation Report', type: 'Investigation', date: '2025-09-02', status: 'Completed', size: '2.4 MB' },
    { id: 2, title: 'Network Analysis Summary', type: 'Analysis', date: '2025-09-01', status: 'In Progress', size: '1.8 MB' },
    { id: 3, title: 'Wallet Risk Assessment', type: 'Assessment', date: '2025-08-31', status: 'Completed', size: '3.1 MB' },
    { id: 4, title: 'Transaction Flow Analysis', type: 'Analysis', date: '2025-08-30', status: 'Completed', size: '4.2 MB' },
    { id: 5, title: 'AI Evidence Summary', type: 'Evidence', date: '2025-08-29', status: 'In Progress', size: '1.2 MB' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-300">Reports</h2>
        <div className="flex items-center gap-2">
          <button className="btn-primary">
            <FileText size={16} />
            Generate Report
          </button>
        </div>
      </div>

      <div className="card">
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full bg-navy-900 border border-blue-900/30 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>
          <select className="bg-navy-900 border border-blue-900/30 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50">
            <option>All Types</option>
            <option>Investigation</option>
            <option>Analysis</option>
            <option>Assessment</option>
            <option>Evidence</option>
          </select>
          <select className="bg-navy-900 border border-blue-900/30 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50">
            <option>All Status</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Pending</option>
          </select>
          <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-navy-700">
            <Filter size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-blue-900/30">
                <th className="pb-2 font-medium">Title</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Date</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Size</th>
                <th className="pb-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-blue-900/20 hover:bg-navy-700/30 transition-colors">
                  <td className="py-3 text-sm text-gray-300">{report.title}</td>
                  <td className="py-3 text-sm text-gray-400">{report.type}</td>
                  <td className="py-3 text-sm text-gray-400">{report.date}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${report.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-gray-400">{report.size}</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="text-gray-400 hover:text-blue-400 p-1 rounded hover:bg-navy-700">
                        <Download size={14} />
                      </button>
                      <button className="text-gray-400 hover:text-green-400 p-1 rounded hover:bg-navy-700">
                        <Printer size={14} />
                      </button>
                      <button className="text-gray-400 hover:text-purple-400 p-1 rounded hover:bg-navy-700">
                        <Share2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
          <span>Showing 1-5 of 12 reports</span>
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

export default ReportsPage;
