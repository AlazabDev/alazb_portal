import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, getTranslation, TranslationKeys } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar')
  
  const t = getTranslation(language)
  const dir: 'rtl' | 'ltr' = language === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    // Apply direction to document
    document.documentElement.dir = dir
    document.documentElement.lang = language
  }, [language, dir])

  const value = {
    language,
    setLanguage,
    t,
    dir
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}