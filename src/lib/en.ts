import { LocalizedContent } from "./localisation";

const enContent: LocalizedContent = {
  ranlearning: "Ran Learning",
  registerNow: "Register NOW",
  sectionTitles: {
    home: "Home",
    aboutUs: "About Us",
    programmesAndCourses: "Programmes and Courses",
    testimonials: "Testimonials",
    blog: "Blog",
    contactUs: "Contact Us",
    faq: "FAQ"
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
    ],
    teachingTeamTitle: "Our Teachers",
    teachingTeam: "Teaching Team Introduction (brief overview, no need for individual details) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
        image: "/globe.svg",
        imageOnLeft: true
      },
      {
        title: "Testimonial Title 2",
        description: "Testimonial description goes here.",
        image: "/globe.svg",
        imageOnLeft: false
      }
    ]
  },
  blogSection: {
    blogItems: [
      {
        title: "如何在家提升孩子华文1",
        shortDescription: "Short description of blog post 1.",
        fullContentLink: "/blog/post-1"
      },
      {
        title: "新加坡考试制度变化",
        shortDescription: "Short description of blog post 1.",
        fullContentLink: "/blog/post-1"
      },
      {
        title: "免费下载",
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
};

export default enContent;