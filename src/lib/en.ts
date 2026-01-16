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
    reviews: [
      {
        content: "I would like to express my heartfelt appreciation to 冉⽼师 [Teacher Ran]. She has been very engaging, highly committed and passionate in teaching. Her notes are very detailed and useful and she often organises extra classes for us, especially to brush up our Chinese oral skills. These lessons are extremely effective as my Chinese oral saw improvement quickly and I was more confident in my writing skills as well. I am proud to say that under her guidance, I managed to improve from a B4 to an A2 in my GCE O-level Higher Chinese after joining her classes for a short period of 6 months. I would highly recommend 冉⽼师's classes to any parents who want to send their kids to a tuition center that is effective and can bring immediate change to their child's results.",
        image: "/globe.svg",
        author: "O-Level Student"
      },
      {
        content: "Teacher Ran is a very patient and kind teacher. She's very relatable and easy to get along with, making me feel that she's just like my good friend. In addition to that, I felt that I was able to improve my Chinese conversational skills whilst chatting with her. She is also able to clearly point out my personal weaknesses and incomprehensions, so that I can find the correct answers and have a better understanding towards the Chinese language. Moreover, her attentive care has made me become very interested in the Chinese culture, making the learning process easy and enjoyable for me.",
        author: "Secondary School Student"
      },
      {
        content: "Want to thank you again for your guidance for my child's Chinese exams. My child obtained 43 points, we're so happy. I feel he is so blessed to have good teachers who trust and taught him well all these years… and you're one of them… thank you & 感恩. Teacher Ran's dedication and personalized approach made all the difference in my child's learning journey.",
        author: "Parent"
      },
      {
        content: "I started learning with Teacher Ran just one week before my oral exam, but she helped me tremendously and I progressed very quickly in a short time. Teacher Ran is always willing to help us and organized multiple supplementary classes before the exam. She patiently explained my questions and gave detailed feedback. Her teaching materials are comprehensive and cover all the key exam points, helping me revise more efficiently. Every lesson was very fulfilling.",
        image: "/globe.svg",
        author: "IB Student"
      },
      {
        content: "The classes with Teacher Ran are always engaging and productive. Her structured approach to teaching composition and comprehension has helped me develop better writing techniques. I particularly appreciate how she breaks down complex topics into manageable parts and provides clear frameworks for different types of essays. My confidence in Chinese has grown significantly since joining her classes.",
        author: "PSLE Student"
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
        title: "1. Course-Related",
        questionsAndAnswers: [
          {
            question: "Which grades and levels do your Chinese tuition courses cover?",
            answer:
              "We provide comprehensive Chinese tutoring from Primary 1 to Junior College (JC), covering Singapore’s mainstream primary and secondary school curriculum, IBDP Chinese A/B, O-Level Chinese, A-Level H1 Chinese, and H2 China Studies.",
          },
          {
            question: "What are the key focuses of IBDP Chinese course tutoring?",
            answer:
              "Our students come from major IBDP schools such as ACSI, HCI, SOTA, and SJI. We offer specialized training for IBDP Chinese B (HL/SL), including reading comprehension, listening, oral, and essay writing. We help students improve quickly, and currently, 100% of our students achieve excellent scores of 6–7. In the 2024 IBDP, 100% scored a perfect 7.",
          },
          {
            question:
              "Are the courses designed according to the latest Singapore Ministry of Education syllabus?",
            answer:
              "Yes, our courses strictly align with the MOE syllabus, SEAB exam requirements, and IBDP assessment standards. We regularly update content to match educational reforms.",
          },
        ],
      },
      {
        title: "2. Teachers and Teaching Methods",
        questionsAndAnswers: [
          {
            question: "What qualifications and experience do the teachers have?",
            answer:
              "Our teachers are all specialized in Chinese language, hold local teaching qualifications, are familiar with Singapore’s exam system, and have extensive teaching experience in primary and secondary schools.",
          },
          {
            question:
              "Are classes conducted online or in-person? What is the class size?",
            answer:
              "We offer both online and in-person classes simultaneously. Classes are small (no more than 6-8 students per class), and we also provide one-on-one customized lessons. Missed lessons can be made up via recorded sessions to ensure students don’t miss any key points.",
          },
          {
            question: "How do you ensure students’ learning outcomes?",
            answer:
              "We tailor teaching to individual students using a “diagnostic assessment – build confidence – continuously strengthen weak areas” model. For students who need more support, teachers, parents, and students form a WhatsApp group for ongoing communication and assistance. We also offer targeted training for weak areas (e.g., essay writing and oral exam crash courses).",
          },
        ],
      },
      {
        title: "3. Fees and Registration",
        questionsAndAnswers: [
          {
            question: "What is the tuition fee? Is there a trial class?",
            answer:
              "Fees vary based on course type and duration. Trial classes are available, usually charged at the rate of one lesson. For specific prices, please check the course page or contact our administrative staff.",
          },
          {
            question: "What if a student misses a class?",
            answer:
              "Students can watch the recorded lesson or reschedule to another available time with the same or another teacher (or opt for one-on-one online makeup sessions, limited to twice per term).",
          },
        ],
      },
      {
        title: "4. Exam and Academic Support",
        questionsAndAnswers: [
          {
            question:
              "Do you offer specialized training for O-Level/A-Level Chinese oral exams?",
            answer:
              "Yes, we run intensive oral exam preparation classes before each exam season, simulating real exam conditions to improve students’ adaptability, reading fluency, and conversational skills. The Secondary 4 oral class is conducted online. HCL oral classes start in late April, with weekly sessions until the July exams. CL oral classes are concentrated during the June holidays, with 2–3 sessions per week, each covering 3 topics.",
          },
          {
            question: "What is the format of the H2 China Studies course?",
            answer:
              "We are currently the only center in Singapore offering H2 China Studies. Our teacher graduated from a top Chinese university in law and has many years of experience as a senior Chinese language teacher. Their legal background allows for deep yet accessible exploration of political, economic, diplomatic, and social topics in China Studies, helping students understand and master related subjects.",
          },
        ],
      },
      {
        title: "5. Parent Communication",
        questionsAndAnswers: [
          {
            question: "How can parents track their child’s progress?",
            answer:
              "Our teachers regularly communicate with parents. For students needing extra support, teachers, parents, and students form a group to provide continuous help with Chinese learning outside of class.",
          },
          {
            question: "Can I get a refund if I’m unsatisfied with the course?",
            answer:
              "Refunds are not available. Our current students are 100% satisfied. Most students come through referrals, and our team is confident in helping every child find their own learning style and make progress in Chinese.",
          },
        ],
      },
      {
        title: "6. Technical Support",
        questionsAndAnswers: [
          {
            question: "What equipment is needed for online classes?",
            answer:
              "Only a stable internet connection, computer/tablet, and microphone are required. We use Zoom or a customized teaching platform, which is easy to operate.",
          },
        ],
      },
    ],
  },
  footerSection: {
    copyright: "© 2025 Ran Learning. All rights reserved."
  }
};

export default enContent;