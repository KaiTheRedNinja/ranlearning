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
        title: "3 Day Holiday Programme",
        description: "Compo + Compre + Oral: 3 days, first-come-first served. Ms Ran and team has extensive teaching experience and has a track record of stellar results.",
        fullImage: "Programme_3 Day.jpg",
        backgroundColor: "#f0f9ff",
        titleColor: "#0c4a6e",
        bodyColor: "#475569"
      },
      {
        title: "June Holiday Programme",
        description: "5 Day programme for PSLE, S1-S3 and S3 Higher Chinese students",
        fullImage: "Programme_June Hol.jpg",
        backgroundColor: "#fffbeb",
        titleColor: "#92400e",
        bodyColor: "#78716c"
      },
      {
        title: "O-Level Chinese Oral Booster Course",
        description: "Explore 2-3 oral topics per lesson! Suitable for students preparing for O'LEVEL Chinese Oral Examination.Topics covered will include commonly tested ones that closely follow current affairs.In-house materials developed specifically to help students identify the key discussion points and highlights of each topic. Each student will have opportunities to speak and practice his/her oral skills on each topic with the guidance from the teacher.",
        fullImage: "Programme_O lvl oral.jpg",
        backgroundColor: "#fef2f2",
        titleColor: "#7f1d1d",
        bodyColor: "#57534e"
      },
      {
        title: "Fun with PinYin!",
        description: "Is your child struggling with Chinese pronunciation or afraid to speak? Our Pinyin Mastery Class is the solution!",
        fullImage: "Programme_Pinyin.jpg",
        backgroundColor: "#f0fdf4",
        titleColor: "#14532d",
        bodyColor: "#44403c"
      }
    ]
  },
  testimonialsSection: {
    shortReviews: [
      "I would like to express my heartfelt appreciation to 冉⽼师 [Teacher Ran] . 冉⽼师 has been very engaging, highly committed and passionate in teaching. Her notes are very detailed and useful and she often organises extra classes for us, especially to brush u p our Chinese oral skills. These lessons are extremely effective a s my Chinese oral saw improvement quickly and I was more confident i n my writing skills as well. I am proud to say that under her guidance, I managed to improve from a B4 to a n A2 in my GCE O-level Higher Chinese after joining her classes for a short period of 6 months. I would highly recommend 冉⽼师’s classes to any parents who want to send their kids to a tuition center that i s effective and can bring immediate change to their child's results.",
      "Want to thank you again for your guidance for [my child’s] Chinese exams. [My child] obtained 43 points, we’re so happy. I feel he is so blessed to have good teachers who trust and taught him well all these years… and you’re one of them… thank you & 感恩",
      "Teacher Ran is a very patient and kind teacher. She's very relatable and easy to get along making me feel that she's just like my good friend. In addition to that, I felt that I was able to improve my Chinese conversational skills whilst chatting with her. She is also able t o clearly point out my personal weaknesses and incomprehensions, so that I can find the correct answers and have a better understanding towards the Chinese language. Moreover, her attentive care has made m e become very interested in the Chinese culture, making the learning process easy and enjoyable for me. The fun atmosphere of the classes makes me look forward to Chinese classes every time.",
      // "Short Review 4 Hello World",
      // "Short Review 5",
      // "Short Review 6 Hello World Slightly Longer",
      // "Short Review 7 Hello World",
      // "Short Review 8",
      // "Short Review 9 Hello World Slightly Longer"
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
    subsections: [
      {
        title: "SUBSECTION TITLE GOES HERE",
        questionsAndAnswers: [
          {
        question: "QUESTION GOES HERE",
        answer: "ANSWER GOES HERE"
          }
        ]
      }
    ]
  },
  footerSection: {
    copyright: "© 2025 Ran Learning. All rights reserved."
  }
};

export default enContent;