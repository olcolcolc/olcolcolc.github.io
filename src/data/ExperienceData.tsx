interface Experience {
  years: string;
  role: string;
  company: string;
  info: string;
}

const educationData: Experience[] = [
  {
    years: "11.23-03.24",
    role: "Frontend Mentee",
    company: "DareIT",
    info: "Dare IT Mentoring is a 4-month program where I work with my mentor on my Frontend skills. As part of the program, I am involved in group projects with other mentees.",
  },
  {
    years: "march 2024 - march 2025",
    role: "Web developer",
    company: "Impact Force",
    info: "Tech To The Rescue non-profit project. The Business Impact is an acceleration program supporting post-war recovery and fostering social impact for Ukrainian businesses. The project involves rebuilding and implementing improvements to the website in preparation for the upcoming edition of the program. Based on user feedback and client requirements, create a comprehensive roadmap and detailed user stories.",
  },
  {
    years: "July 2025 - present",
    role: "Software developer",
    company: "EY gds",
    info: "",
  },
];

export default educationData;
