import React from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const FlowCharts = () => {
  const data = [
    { time: '00:00', inflow: 0, outflow: 0 },
    { time: '04:00', inflow: 20, outflow: 5 },
    { time: '08:00', inflow: 45, outflow: 10 },
    { time: '12:00', inflow: 30, outflow: 25 },
    { time: '16:00', inflow: 65, outflow: 40 },
    { time: '20:00', inflow: 50, outflow: 35 },
    { time: '23:00', inflow: 80, outflow: 60 },
  ]

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Transaction Flow Analysis</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="inflowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a9eff" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4a9eff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="outflowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2d4a" />
            <XAxis dataKey="time" stroke="#6b7280" fontSize={10} />
            <YAxis stroke="#6b7280" fontSize={10} />
            <Tooltip
              contentStyle={{
                background: '#0d1225',
                border: '1px solid #1a2d4a',
                borderRadius: '6px',
                fontSize: '11px',
                color: '#e5e7eb'
              }}
            />
            <Area
              type="monotone"
              dataKey="inflow"
              stroke="#4a9eff"
              strokeWidth={1.5}
              fill="url(#inflowGradient)"
            />
            <Area
              type="monotone"
              dataKey="outflow"
              stroke="#ef4444"
              strokeWidth={1.5}
              fill="url(#outflowGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default FlowCharts