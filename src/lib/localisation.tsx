import React, { createContext, useContext, useState } from 'react';
import { Globe } from 'lucide-react';

// Define your localization structure with TypeScript
type Language = 'en' | 'zh';

interface LocalizedContent {
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
    register: string
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
    }[]
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
  en: {
    ranlearning: "Ran Learning",
    registerNow: "Register NOW",
    sectionTitles: {
      home: "Home",
      aboutUs: "About Us",
      programmesAndCourses: "Programmes and Courses",
      testimonials: "Testimonials",
      blog: "Blog",
      contactUs: "Contact Us",
      faq: "FAQ",
      register: "Register"
    },
    homeSection: {
      briefIntroduction: "Brief Introduction Goes Here ...",
      schoolFeatures: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    },
    aboutSection: {
      approaches: [
        {
          name: "APPROACH 1",
          description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
          icon: "/globe.svg"
        },
        {
          name: "APPROACH 2",
          description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
          icon: "/globe.svg"
        }
      ]
    },
    coursesSection: {
      courseSummary: "Brief recap of Ran Learning's teaching style, include mentions of 小学华文补习  /  中学华文 / JC H1华文 IBDP中文 (each will be links)",
      specialProgrameTitle: "Special Programmes",
      specialProgrammes: [
        {
          title: "Holiday Classes",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#f0f9ff",
          titleColor: "#0c4a6e",
          bodyColor: "#475569"
        },
        {
          title: "One-on-One Customised Tutoring",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#fffbeb",
          titleColor: "#92400e",
          bodyColor: "#78716c"
        },
        {
          title: "Business Chinese",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#fef2f2",
          titleColor: "#7f1d1d",
          bodyColor: "#57534e"
        },
        {
          title: "?",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#f0fdf4",
          titleColor: "#14532d",
          bodyColor: "#44403c"
        }
      ]
    },
    testimonialsSection: {
      shortReviews: [
        "Short Review 1 Hello World",
        "Short Review 2",
        "Short Review 3 Hello World Slightly Longer",
        "Short Review 4 Hello World",
        "Short Review 5",
        "Short Review 6 Hello World Slightly Longer",
        "Short Review 7 Hello World",
        "Short Review 8",
        "Short Review 9 Hello World Slightly Longer"
      ],
      longReviews: [
        {
          title: "Testimonial Title 1",
          description: "Testimonial description goes here.",
          image: "/path/to/image.jpg",
          imageOnLeft: true
        },
        {
          title: "Testimonial Title 2",
          description: "Testimonial description goes here.",
          image: "/path/to/image.jpg",
          imageOnLeft: false
        }
      ]
    },
    blogSection: {
      blogItems: [
        {
          title: "Blog Post 1",
          shortDescription: "Short description of blog post 1.",
          fullContentLink: "/blog/post-1"
        },
        {
          title: "Blog Post 1",
          shortDescription: "Short description of blog post 1.",
          fullContentLink: "/blog/post-1"
        },
        {
          title: "Blog Post 1",
          shortDescription: "Short description of blog post 1.",
          fullContentLink: "/blog/post-1"
        }
      ]
    },
    contactSection: {
      contactItems: [
        {
          contactMethod: "Email",
          icon: "💌",
          detail: "XXXXXXXX"
        },
        {
          contactMethod: "Phone",
          icon: "☎️",
          detail: "XXXXXXXX"
        },
        {
          contactMethod: "WhatsApp",
          icon: "💬",
          detail: "XXXXXXXX"
        },
        {
          contactMethod: "Address",
          icon: "🏠",
          detail: "XXXXXXXX"
        },
      ]
    },
    faqSection: {
      questionsAndAnswers: [
        {
          question: "QUESTION GOES HERE",
          answer: "ANSWER GOES HERE"
        }
      ]
    },
    footerSection: {
      copyright: "© 2025 Ran Learning. All rights reserved."
    }
  },
  zh: {
    ranlearning: "Ran Learning",
    registerNow: "Register NOW",
    sectionTitles: {
      home: "Home",
      aboutUs: "About Us",
      programmesAndCourses: "Programmes and Courses",
      testimonials: "Testimonials",
      blog: "Blog",
      contactUs: "Contact Us",
      faq: "FAQ",
      register: "Register"
    },
    homeSection: {
      briefIntroduction: "Brief Introduction Goes Here ...",
      schoolFeatures: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    },
    aboutSection: {
      approaches: [
        {
          name: "APPROACH 1",
          description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
          icon: "/globe.svg"
        },
        {
          name: "APPROACH 2",
          description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
          icon: "/globe.svg"
        }
      ]
    },
    coursesSection: {
      courseSummary: "Brief recap of Ran Learning's teaching style, include mentions of 小学华文补习  /  中学华文 / JC H1华文 IBDP中文 (each will be links)",
      specialProgrameTitle: "Special Programmes",
      specialProgrammes: [
        {
          title: "Holiday Classes",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#f0f9ff",
          titleColor: "#0c4a6e",
          bodyColor: "#475569"
        },
        {
          title: "One-on-One Customised Tutoring",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#fffbeb",
          titleColor: "#92400e",
          bodyColor: "#78716c"
        },
        {
          title: "Business Chinese",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#fef2f2",
          titleColor: "#7f1d1d",
          bodyColor: "#57534e"
        },
        {
          title: "?",
          description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          backgroundColor: "#f0fdf4",
          titleColor: "#14532d",
          bodyColor: "#44403c"
        }
      ]
    },
    testimonialsSection: {
      shortReviews: [
        "Short Review 1 Hello World",
        "Short Review 2",
        "Short Review 3 Hello World Slightly Longer",
        "Short Review 4 Hello World",
        "Short Review 5",
        "Short Review 6 Hello World Slightly Longer",
        "Short Review 7 Hello World",
        "Short Review 8",
        "Short Review 9 Hello World Slightly Longer"
      ],
      longReviews: [
        {
          title: "Testimonial Title 1",
          description: "Testimonial description goes here.",
          image: "/path/to/image.jpg",
          imageOnLeft: true
        },
        {
          title: "Testimonial Title 2",
          description: "Testimonial description goes here.",
          image: "/path/to/image.jpg",
          imageOnLeft: false
        }
      ]
    },
    blogSection: {
      blogItems: [
        {
          title: "Blog Post 1",
          shortDescription: "Short description of blog post 1.",
          fullContentLink: "/blog/post-1"
        },
        {
          title: "Blog Post 1",
          shortDescription: "Short description of blog post 1.",
          fullContentLink: "/blog/post-1"
        },
        {
          title: "Blog Post 1",
          shortDescription: "Short description of blog post 1.",
          fullContentLink: "/blog/post-1"
        }
      ]
    },
    contactSection: {
      contactItems: [
        {
          contactMethod: "Email",
          icon: "💌",
          detail: "XXXXXXXX"
        },
        {
          contactMethod: "Phone",
          icon: "☎️",
          detail: "XXXXXXXX"
        },
        {
          contactMethod: "WhatsApp",
          icon: "💬",
          detail: "XXXXXXXX"
        },
        {
          contactMethod: "Address",
          icon: "🏠",
          detail: "XXXXXXXX"
        },
      ]
    },
    faqSection: {
      questionsAndAnswers: [
        {
          question: "QUESTION GOES HERE",
          answer: "ANSWER GOES HERE"
        }
      ]
    },
    footerSection: {
      copyright: "© 2025 Ran Learning. All rights reserved."
    }
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