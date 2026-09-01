// // API service for connecting to backend
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

// export const api = {
//   // Cases
//   getCases: async () => {
//     const response = await fetch(`${API_BASE_URL}/cases`)
//     return response.json()
//   },
  
//   getCase: async (caseId) => {
//     const response = await fetch(`${API_BASE_URL}/cases/${caseId}`)
//     return response.json()
//   },
  
//   createCase: async (data) => {
//     const response = await fetch(`${API_BASE_URL}/cases`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//     return response.json()
//   },

//   // Transactions
//   getTransactions: async (caseId) => {
//     const response = await fetch(`${API_BASE_URL}/transactions?case_id=${caseId}`)
//     return response.json()
//   },

//   // Analysis
//   getAnalysis: async (caseId) => {
//     const response = await fetch(`${API_BASE_URL}/analysis/${caseId}`)
//     return response.json()
//   },

//   // Wallets
//   getWallets: async (caseId) => {
//     const response = await fetch(`${API_BASE_URL}/wallets?case_id=${caseId}`)
//     return response.json()
//   },

//   // Reports
//   generateReport: async (caseId) => {
//     const response = await fetch(`${API_BASE_URL}/reports/${caseId}`, {
//       method: 'POST'
//     })
//     return response.json()
//   }
// }

// export default api

// below is for mock data to test frontend 

// frontend/src/services/api.js
import { 
  mockCases, 
  mockTransactions, 
  mockWallets, 
  mockAnalysis, 
  mockNetworkData 
} from '../data/mockData'

// Flag to use mock data when backend is not available
const USE_MOCK = true

export const api = {
  // Cases
  getCases: async () => {
    if (USE_MOCK) {
      return mockCases
    }
    const response = await fetch(`${API_BASE_URL}/cases`)
    return response.json()
  },
  
  getCase: async (caseId) => {
    if (USE_MOCK) {
      return mockCases.find(c => c.id === caseId) || mockCases[0]
    }
    const response = await fetch(`${API_BASE_URL}/cases/${caseId}`)
    return response.json()
  },
  
  createCase: async (data) => {
    if (USE_MOCK) {
      const newCase = {
        id: `2025-${Math.floor(Math.random() * 1000)}`,
        ...data,
        status: 'active',
        lastUpdated: new Date().toISOString()
      }
      return newCase
    }
    const response = await fetch(`${API_BASE_URL}/cases`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return response.json()
  },

  // Transactions
  getTransactions: async (caseId) => {
    if (USE_MOCK) {
      return mockTransactions
    }
    const response = await fetch(`${API_BASE_URL}/transactions?case_id=${caseId}`)
    return response.json()
  },

  // Analysis
  getAnalysis: async (caseId) => {
    if (USE_MOCK) {
      return mockAnalysis
    }
    const response = await fetch(`${API_BASE_URL}/analysis/${caseId}`)
    return response.json()
  },

  // Wallets
  getWallets: async (caseId) => {
    if (USE_MOCK) {
      return mockWallets
    }
    const response = await fetch(`${API_BASE_URL}/wallets?case_id=${caseId}`)
    return response.json()
  },

  // Network Data
  getNetworkData: async (caseId) => {
    if (USE_MOCK) {
      return mockNetworkData
    }
    const response = await fetch(`${API_BASE_URL}/network/${caseId}`)
    return response.json()
  },

  // Reports
  generateReport: async (caseId) => {
    if (USE_MOCK) {
      return {
        caseId: caseId,
        generated: new Date().toISOString(),
        status: 'completed'
      }
    }
    const response = await fetch(`${API_BASE_URL}/reports/${caseId}`, {
      method: 'POST'
    })
    return response.json()
  },

  // AI Analysis
  getAIAnalysis: async (caseId) => {
    if (USE_MOCK) {
      return {
        qwen: {
          verdict: 'SUPPORTED',
          confidence: 87,
          reasoning: 'Based on the transaction patterns and network structure, this wallet shows signs of being a mule account. The rapid movement of funds and multiple incoming sources indicate a high probability of fraud.'
        },
        mistral: {
          verdict: 'UNSUPPORTED',
          confidence: 62,
          reasoning: "I'm not fully convinced this is a mule. The pattern could also be a legitimate exchange or money service. More context is needed before labeling it suspicious."
        }
      }
    }
    const response = await fetch(`${API_BASE_URL}/analysis/ai/${caseId}`)
    return response.json()
  }
}

export default api