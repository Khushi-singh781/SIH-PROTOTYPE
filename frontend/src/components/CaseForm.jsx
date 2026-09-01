import React, { useState } from 'react'

const CaseForm = () => {
  const [formData, setFormData] = useState({
    caseName: '',
    description: '',
    fraudType: '',
    amount: '',
    platform: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Case created:', formData)
    // API call would go here
  }

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Create New Case</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="text-xs text-gray-400 block mb-1">Case Name</label>
          <input
            type="text"
            name="caseName"
            value={formData.caseName}
            onChange={handleChange}
            className="input-dark w-full"
            placeholder="Enter case name"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-dark w-full"
            rows="3"
            placeholder="Describe the case"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Fraud Type</label>
            <select
              name="fraudType"
              value={formData.fraudType}
              onChange={handleChange}
              className="input-dark w-full"
            >
              <option value="">Select type</option>
              <option value="investment">Investment Scam</option>
              <option value="phishing">Phishing</option>
              <option value="ransomware">Ransomware</option>
              <option value="pump">Pump & Dump</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Amount</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="input-dark w-full"
              placeholder="₹"
            />
          </div>
        </div>
        <button type="submit" className="btn-primary w-full justify-center">
          Create Case
        </button>
      </form>
    </div>
  )
}

export default CaseForm