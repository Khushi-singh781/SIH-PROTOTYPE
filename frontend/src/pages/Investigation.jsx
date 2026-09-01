import React from 'react'

const Investigation = () => {
  return (
    <div className="space-y-4">
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">New Investigation</h3>
        <p className="text-sm text-gray-400">Start a new investigation by entering wallet addresses or transaction hashes.</p>
        <div className="mt-3 flex gap-2">
          <input 
            type="text" 
            placeholder="Enter wallet address or TX hash..."
            className="input-dark flex-1"
          />
          <button className="btn-primary">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Investigation