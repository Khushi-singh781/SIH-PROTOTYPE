import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  
  const translations = {
    en: {
      victimName: 'Victim Name',
      mobile: 'Mobile Number',
      location: 'Location',
      fraudType: 'Fraud Type',
      amountLost: 'Amount Lost',
      platform: 'Platform',
      status: 'Status',
      submit: 'Submit Report',
      switchLang: 'Switch to Hindi'
    },
    hi: {
      victimName: 'पीड़ित का नाम',
      mobile: 'मोबाइल नंबर',
      location: 'स्थान',
      fraudType: 'धोखाधड़ी का प्रकार',
      amountLost: 'खोई हुई राशि',
      platform: 'प्लेटफॉर्म',
      status: 'स्थिति',
      submit: 'रिपोर्ट जमा करें',
      switchLang: 'अंग्रेज़ी में बदलें'
    }
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en')
  }

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
