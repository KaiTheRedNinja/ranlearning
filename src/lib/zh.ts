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
      "我是在口试前一周才跟冉老师学习的，但她帮助了我很多，让我在短时间内进步很快。冉老师非常愿意帮助我们，考试之前安排了多补习班。她也很耐心解释我的问题，给出详细的建议。她的教学材料内容丰富，覆盖了考试的重点，帮助我更高效地复习。每节课都非常充实，不仅提高了我的语言能力，还让我对学习中文更有信心。多亏了老师的帮助，我最终在IB考试中拿到了7分！我非常感谢她的细心指导和支持！",
      "我想要衷⼼感谢冉⽼师在华⽂⽅⾯对我的帮助。冉⽼师对教学充满热情，使华⽂课更有趣。讲义的内容⾮常详细和有⽤，她经常为我们组织额外的课程，特别是为了提⾼我们的⼝试能⼒。这些课程⾮常有效，因为我的⼝试进步很⼤，⽽且我对⾃⼰的写作技巧也更有信⼼。在她六个⽉的指导下，我在O⽔准⾼级华⽂考试中得到了A2的好成绩。我强烈推荐冉⽼师课程!",
      "谢谢你，你教孩⼦⽔平很⾼呀，他这次是考的最好的成绩了",
      "你的⽅法应该很好，他才补了⼏个⽉，这成绩提⾼这么快",
      "7分老师，谢谢您！",
      // "Short Review 6 Hello World Slightly Longer",
      // "Short Review 7 Hello World",
      // "Short Review 8",
      // "Short Review 9 Hello World Slightly Longer"
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
    subsections: [
      {      
        title: "一、课程相关",
        questionsAndAnswers: [
          {
            question: "你们的华文补习课程涵盖哪些年级和水平？",
            answer: "我们提供从小学一年级至初级学院（JC）的全阶段华文辅导，包括新加坡主流中小学课程、IBDP中文A/B、O水准华文、A水准H1华文及H2中国通识课程。"
          },
          {
            question: "IBDP中文课程辅导有哪些重点？",
            answer: "我们的学生来自各大IBDP课程学校，例如ACSI、HCI、SOTA、SJI等，针对IBDP中文B（HL/SL）提供专项训练，包括阅读理解、听力、oral、作文的训练，帮助学生在短时间内提高，目前100%的学生都拿到6-7分的优秀成绩。2024年的IBDP，100%拿到7分满分。"
          },
          {
            question: "课程是否针对新加坡教育部最新教学大纲设计？",
            answer: "是的，我们的课程严格对接MOE教学大纲、SEAB考试要求及IBDP评估标准，定期更新内容以匹配教育改革。"
          }
        ]
      },
      {
        title: "二、师资与教学方式",
          questionsAndAnswers: [
          {
            question: "授课老师有哪些资质和经验？",
            answer: "我们的教师均为华文专业背景，持有本地教师资格认证，熟悉新加坡考试体系，拥有丰富的中小学教学经验"
          },
          {
            question: "教学是线上还是线下？班级规模如何？",
            answer: "我们提供线上和线下同步课程，小班（每班不超过6-8人），也有一对一定制课程。学生补课会安排录播课，确保学生不会遗漏任何一个知识点。"
          },
          {
            question: "如何保证学生的学习效果？",
            answer: "我们根据学生情况，因材施教，采用“诊断性评估—培养自信—不断强化弱项”模式，针对学习能力较弱的学生，老师、家长、学生会建立WhatsApp小组，随时沟通和帮助学生学习华文，并设有弱项专项训练（如作文、口试突击班）。"
          },
        ]
      },
      {
        title: "三、费用与报名",
        questionsAndAnswers: [
            {
              question: "学费是多少？是否有试听课？",
              answer: "费用根据课程类型和时长而定。有试听课，通常是一节课的学费，具体价格请查看课程页面或联系行政老师。"
            },
            {
              question: "如果缺课怎么办？",
              answer: "学生可观看课程录像补课，也可安排调至其他老师可行的时间补课（或者一对一的online补课，一学期不超过2次）。"
            },
          ]
        },
      {
        title: "四、考试与升学支持",
        questionsAndAnswers: [
            {
              question: "是否有针对O水准/A水准华文口试的专项训练？",
              answer: "是的，我们每年在考试季前开设口试强化班，模拟真实考场，提升学生的应变能力、朗读技巧和对话表达。中四口试班是online课程形式，HCL的口试班时间会在4月底开始，每周一次课，一直到7月考试之前。CL的口试班会集中在6月假期，一周2-3次课，每次3个topic"
            },
            {
              question: "H2的中国通识课程是什么样的形式？",
              answer: "我们是目前全新加坡唯一一家提供H2 中国通识课程的中心，老师原本是中国知名大学法律专业毕业，多年的高级华文教师资历，其法律背景，对研究中国通识的政治、经济、外交、社会话题有很强的延伸性，擅长深入简出，帮助学生了解和掌握中国通识的相关课题。"
            },
          ]
        },
      {
        title: "五、家长沟通",
        questionsAndAnswers: [
            {
              question: "家长如何了解孩子的学习进度？",
              answer: "我们老师会与家长定期沟通，面对学习能力较弱或者需要更多支持的孩子，我们的老师会和家长、孩子组成多对一的group，帮助学生在补习课程以外，随时获得华文学习方面的帮助。"
            },
            {
              question: "如果对课程不满意，可以退费吗？",
              answer: "不可以退费。我们的学生对课程目前均是100%满意，大部分学生都是通过介绍认识我们，我们的团队有信心帮助每一个孩子，在学习华文的道路上找到适合自己的学习方式，并且获得进步。"
            },
          ]
        },
      {
        title: "六、技术支持",
        questionsAndAnswers: [
          {
            question: "线上课程需要什么设备？",
            answer: "只需稳定的网络、电脑/平板及麦克风即可。我们使用Zoom或定制教学平台，操作简便。"
          },
        ]
      }
    ]
  },
  footerSection: {
    copyright: "© 2025 Ran Learning. All rights reserved."
  }
};

export default zhContent;