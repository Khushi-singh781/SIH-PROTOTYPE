import React from 'react'

const Reports = () => {
  const reports = [
    { id: 1, title: 'Case #2025-1047 Investigation Report', date: '2025-09-02', status: 'Completed' },
    { id: 2, title: 'Network Analysis Summary', date: '2025-09-01', status: 'In Progress' },
    { id: 3, title: 'Wallet Risk Assessment', date: '2025-08-31', status: 'Completed' },
  ]

  return (
    <div className="space-y-4">
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">Investigation Reports</h3>
        <div className="space-y-2">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-3 bg-navy-900/50 rounded-lg border border-blue-900/20">
              <div>
                <span className="text-sm text-gray-300">{report.title}</span>
                <span className="text-xs text-gray-500 block">{report.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-0.5 rounded ${
                  report.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {report.status}
                </span>
                <button className="text-blue-400 hover:text-blue-300 text-xs">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reports