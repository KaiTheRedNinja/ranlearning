import { LocalizedContent } from "./localisation";

const zhContent: LocalizedContent = {
  ranlearning: "Ran Learning",
  registerNow: "立即报名!",
  sectionTitles: {
    home: "首页",
    aboutUs: "公司愿景、教育理念、办学特色",
    programmesAndCourses: "课程介绍",
    testimonials: "家长见证",
    blog: "资源中心",
    contactUs: "报名与联络",
    faq: "FAQ"
  },
  homeSection: {
    briefIntroduction: `\
在 Ran Enrichment Learning，我们专注于为学生提供高效、系统化的华文提升课程，涵盖写作、阅读理解、语言应用与口试表达等关键能力。

我们熟悉本地O水准、IP 课程、IBDP课程，以及JC课程需求，也深谙考试趋势，通过技巧教学、写作框架训练及批判性思维培养，帮助学生在考试中脱颖而出。

我们的目标不只是提高分数，更让学生具备自信表达、深入思考的能力，为学生的未来学习做好准备。`,
    schoolFeatures: [
      "图片",
      "简短介绍  ",
      "学校特色、优势（要点)"
    ]
  },
  aboutSection: {
    approaches: [
      {
        name: "全人教育",
        description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
        icon: "/globe.svg"
      },
      {
        name: "双语优势",
        description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
        icon: "/globe.svg"
      },
      {
        name: "小班制",
        description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
        icon: "/globe.svg"
      },
      {
        name: "互动式教学",
        description: "Description about Ran Learning's approach, Lorem ipsum dolor sit amet",
        icon: "/globe.svg"
      }
    ],
    teachingTeamTitle: "教师团队",
    teachingTeam: "教师团队简介（粗略介绍，不需要详细到个人）Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  coursesSection: {
    courseSummary: "Brief recap of Ran Learning's teaching style, include mentions of 小学华文补习  /  中学华文 / JC H1华文 IBDP中文 (each will be links)",
    specialProgrameTitle: "Special Programmes",
    specialProgrammes: [
      {
        title: "3天假期课程",
        description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fullImage: "Programme_3 Day.jpg",
        backgroundColor: "#f0f9ff",
        titleColor: "#0c4a6e",
        bodyColor: "#475569"
      },
      {
        title: "六月假期课程",
        description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fullImage: "Programme_June Hol.jpg",
        backgroundColor: "#fffbeb",
        titleColor: "#92400e",
        bodyColor: "#78716c"
      },
      {
        title: "O水准华文口试强化课程",
        description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fullImage: "Programme_O lvl oral.jpg",
        backgroundColor: "#fef2f2",
        titleColor: "#7f1d1d",
        bodyColor: "#57534e"
      },
      {
        title: "趣味拼音课程",
        description: "Description about Ran Learning's special programme, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fullImage: "Programme_Pinyin.jpg",
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
        title: "考试成绩进步案例",
        description: "Testimonial description goes here.",
        image: "/globe.svg",
        imageOnLeft: true
      },
      {
        title: "考试成绩进步案例",
        description: "Testimonial description goes here.",
        image: "/globe.svg",
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
        detail: "ranlearninghub@gmail.com"
      },
      {
        contactMethod: "Phone",
        icon: "☎️",
        detail: "89891582"
      },
      {
        contactMethod: "WhatsApp",
        icon: "💬",
        detail: "89891582 (10AM - 9PM)"
      },
      {
        contactMethod: "Addresses",
        icon: "🏠",
        detail: `
- 215N Upper Thomson Road S574349 (upper thomson road), TSL &冉老师华文课堂

- #02-06 Beauty World Centre S588177, Kinder Growth Learning Centre & 冉老师华文课堂

- 709A East Coast Road S459064, Kinder Growth Learning Centre & 冉老师华文课堂`
      },
    ]
  },
  faqSection: {
    questionsAndAnswers: [
      {
        question: "课程如何安排？",
        answer: "ANSWER GOES HERE"
      },
      {
        question: "学费怎么支付？",
        answer: "ANSWER GOES HERE"
      },
      {
        question: "如果缺课怎么办？",
        answer: "ANSWER GOES HERE"
      }
    ]
  },
  footerSection: {
    copyright: "© 2025 Ran Learning. All rights reserved."
  }
};

export default zhContent;