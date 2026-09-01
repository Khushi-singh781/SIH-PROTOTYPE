import { useState, useEffect } from 'react'
import api from '../services/api'

export const useInvestigation = (caseId) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [caseData, transactions, analysis, wallets] = await Promise.all([
          api.getCase(caseId),
          api.getTransactions(caseId),
          api.getAnalysis(caseId),
          api.getWallets(caseId)
        ])
        setData({ case: caseData, transactions, analysis, wallets })
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (caseId) {
      fetchData()
    }
  }, [caseId])

  return { loading, data, error }
}

export default useInvestigation