import React, { createContext, useContext, useState } from 'react';
import { Globe } from 'lucide-react';
import enContent from './en';
import zhContent from './zh';
import { I18NProvider } from 'next/dist/server/lib/i18n-provider';

// Define your localization structure with TypeScript
type Language = 'en' | 'zh';

export interface LocalizedContent {
  ranlearning: string
  registerNow: string
  sectionTitles: {
    home: string
    aboutUs: string
    programmesAndCourses: string
    testimonials: string
    blog: string
    contactUs: string
    faq: string
  };
  homeSection: {
    briefIntroduction: string
    schoolFeatures: string[]
  };
  aboutSection: {
    approaches: {
      name: string
      description: string
      icon: string
    }[],
    teachingTeamTitle: string
    teachingTeam: string
  };
  coursesSection: {
    courseSummary: string
    specialProgrameTitle: string
    specialProgrammes: {
      title: string
      description: string
      backgroundColor: string
      titleColor: string
      bodyColor: string
    }[]
  };
  testimonialsSection: {
    shortReviews: string[],
    longReviews: {
      title: string
      description: string
      image: string
      imageOnLeft: boolean
    }[]
  };
  blogSection: {
    blogItems: {
      title: string
      shortDescription: string
      fullContentLink: string
    }[]
  };
  contactSection: {
    contactItems: {
      contactMethod: string
      icon: string
      detail: string
    }[]
  };
  faqSection: {
    questionsAndAnswers: {
      question: string
      answer: string
    }[]
  };
  footerSection: {
    copyright: string;
  };
}

// Your localized content - structured and grouped
const translations: Record<Language, LocalizedContent> = {
  en: enContent,
  zh: zhContent
};

// Context for language management
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: LocalizedContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

// Language Provider Component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // function to determine current device language
  const getDeviceLanguage = (): 'en' | 'zh' => {
    if (typeof navigator !== 'undefined') {
      if (navigator.language.startsWith('zh')) return 'zh';
    }
    return 'en';
  };

  const [language, setLanguage] = useState<Language>(getDeviceLanguage());

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};