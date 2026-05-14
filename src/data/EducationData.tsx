interface Education {
  years: string;
  course: string;
  school: string;
  info?: string;
}

const educationData: Education[] = [
  {
    years: "2022-2023",
    course: "Postgraduate: Frontend developer with Angular",
    school: "WSB Merito University",
    info: "The studies I undertook to organize the knowledge I gained on my own. We covered topics such as: JS / TS / Git / RWD / RestApi / Angular / RxJS / Redux / Jest / HTML / CSS / SCSS. I concluded my studies with two projects for completion: one coded in Angular, and the second one in React.",
  },
  {
    years: "2018-2019",
    course: "Postgraduate: Psychology (Crisis Intervention)",
    school: "University of Social Sciences and Humanities",
    info: "I have acquired knowledge in clinical psychology, with a particular focus on trauma psychology, conflict- and crisis-oriented social psychology, as well as psychoprophylaxis. I obtained certificates in ICISF 'Assisting Individuals in Crisis' and 'Group Crisis Intervention'.",
  },
  {
    years: "2012-2017",
    course: "Master degree in Management (Lean Management)",
    school: "University of Social Sciences and Humanities",
    info: "Throughout my Master's program in Management, specifically emphasizing Lean Management, I learned practical techniques to streamline operations and cut down unnecessary steps. We covered concepts like efficient workflow design, identifying and eliminating bottlenecks, and fostering a culture of continuous improvement within businesses.",
  },
  {
    years: "2026",
    course: "AI900 certification",
    school: "Microsoft Certified: Azure AI Fundamentals",
    info: "This certification demonstrates foundational knowledge of AI and machine learning concepts, as well as the ability to implement AI solutions on Microsoft Azure.",
  },
  {
    years: "2026",
    course: "GH-300 certification",
    school: "Microsoft Certified: Github Copilot",
    info: "This certification validates proficiency in using GitHub Copilot, an AI-powered code completion tool, to enhance coding efficiency and productivity.",
  },
];

export default educationData;
