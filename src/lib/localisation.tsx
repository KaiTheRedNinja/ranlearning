import React, { createContext, useContext, useState } from 'react';
import { Globe } from 'lucide-react';

// Define your localization structure with TypeScript
type Language = 'en' | 'zh';

interface CardContent {
  title: string;
  description: string;
  buttonText: string;
}

interface LocalizedContent {
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  features: CardContent[];
  footer: {
    copyright: string;
  };
}

// Your localized content - structured and grouped
const translations: Record<Language, LocalizedContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Welcome to Our Platform',
      subtitle: 'Build amazing things with structured localization',
    },
    features: [
      {
        title: 'Easy to Use',
        description: 'Keep your content organized with structured objects',
        buttonText: 'Learn More',
      },
      {
        title: 'Type Safe',
        description: 'TypeScript ensures you never miss a translation',
        buttonText: 'Get Started',
      },
      {
        title: 'Scalable',
        description: 'Add new languages without restructuring your code',
        buttonText: 'View Demo',
      },
    ],
    footer: {
      copyright: '© 2024 Your Company. All rights reserved.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      contact: '联系',
    },
    hero: {
      title: '欢迎来到我们的平台',
      subtitle: '使用结构化本地化构建出色的应用',
    },
    features: [
      {
        title: '易于使用',
        description: '使用结构化对象保持内容井然有序',
        buttonText: '了解更多',
      },
      {
        title: '类型安全',
        description: 'TypeScript 确保您不会遗漏任何翻译',
        buttonText: '开始使用',
      },
      {
        title: '可扩展',
        description: '添加新语言而无需重构代码',
        buttonText: '查看演示',
      },
    ],
    footer: {
      copyright: '© 2024 您的公司。保留所有权利。',
    },
  },
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
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};