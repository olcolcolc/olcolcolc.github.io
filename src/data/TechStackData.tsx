interface Technology {
  name: string;
  label: string;
}

const technologiesIKnow: Technology[] = [
  { name: "react", label: "React" },
  { name: "typescript", label: "TypeScript" },
  { name: "javascript", label: "JavaScript" },
  { name: "firebase", label: "Firebase" },
  { name: "figma", label: "Figma" },
  { name: "angular", label: "Angular" },
  { name: "python", label: "Python" },
  { name: "sass", label: "Sass" },
  { name: "styledComponents", label: "Styled components, Emotion" },
  { name: "retool", label: "Retool" },
  { name: "restApi", label: "REST API" },
];

const technologiesImLearning: Technology[] = [
  { name: "nextjs", label: "Next.js" },
  { name: "react", label: "React Native" },
];

export { technologiesIKnow, technologiesImLearning };
