import CakeCalcReactAppImgSrc from "../../src/assets/imgs/CakeCalcReactApp.jpg";
import RNWeatherAppSrc from "../../src/assets/imgs/RNWeatherApp.jpg";
import JustMemesAppSrc from "../../src/assets/imgs/JustMemesApp.jpg";
import LookUpNgSrc from "../../src/assets/imgs/LookUp.jpg";
import tttrSrc from "../../src/assets/imgs/tttr.jpg";

interface Projects {
  id: string;
  imgSrc: string;
  name: string;
  description: string;
  githubUrl: string;
  deployed: string;
  technologies: string[];
}

const projectsData: Projects[] = [
  {
    id: "languageapp",
    name: "In progress: LanguageApp",
    imgSrc: "",
    description:
      'A project created collaboratively with the users of the "Polskie Programistki" server. A web application designed to assist in learning foreign languages.',
    githubUrl: "",
    deployed: "",
    technologies: ["Styled components", "React MUI", "Trello"],
  },
  {
    id: "tasker",
    name: "On hold: Tasker",
    imgSrc: "",
    description:
      "A life management tool for collaborative task organization and building healthy habits. The app will allow users to create, assign, and track tasks, as well as set deadlines and reminders. We, a few mentees from Dare IT, are writing this with the aim to develop an application that helps solve the challenges we face during career transitions and job hunting.",
    githubUrl: "",
    deployed: "",
    technologies: ["Next.js", "React MUI", "Jira"],
  },
  {
    id: "tttr",
    name: "Impact Business 2.0",
    imgSrc: tttrSrc,
    description:
      "Group volunteer project facilitated through Tech to the Rescue match - revamping the website for the Impact Business program - a support program created by a Ukrainian non-governmental organization for Ukrainian entrepreneurs who have suffered during the war",
    githubUrl: "",
    deployed: "https://www.impactbusinessua.org/",
    technologies: ["Webflow", "Jira"],
  },
  {
    id: "rnweather",
    imgSrc: RNWeatherAppSrc,
    name: "RNWeather App",
    description:
      "A mobile application that retrieves the user's current location and displays the current weather as well as the forecast with details for the next 7 days. It is integrated with icons and APIs for this purpose. Application utilizes the Weather API from weatherapi.com.",
    githubUrl: "https://github.com/olcolcolc/RNWeatherApp",
    deployed: "",
    technologies: ["React Native", "Expo", "Typescript", "MobX", "Axios"],
  },
  {
    id: "cakecalcreactapp",
    name: "CakeCalc React App",
    imgSrc: CakeCalcReactAppImgSrc,
    description:
      "The app helps bakers calculate cake prices, advance payments, and determine the required baking pan size. It takes inputs like price per person, number of people, and deposit percentage. The app provides quick outputs for customer communication and internal bakery use. It supports both English and Polish languages. I collaborated with a UI designer to make the app more user-friendly.",
    githubUrl: "https://github.com/olcolcolc/CakeCalcReactApp",
    deployed: "https://cakecalc.netlify.app/",
    technologies: [
      "React",
      "Styled Components",
      "Typescript",
      "Vite",
      "Vitest",
      "i18next",
    ],
  },

  {
    id: "justmemesapp",
    name: "JustMemesApp",
    imgSrc: JustMemesAppSrc,
    description:
      "This is a Just Memes App built with React. It allows users to view and post memes to a Firebase Firestore database. Users can also vote on memes by liking or disliking them. The app consists of several components: Landing Page, Top Page, Regular Page, Theme Switcher, Post New Meme. App provides an enjoyable browsing experience for users, allowing them to explore and interact with a collection of memes. ",
    githubUrl: "https://github.com/olcolcolc/JustMemesApp",
    deployed: "https://just-memes-app.netlify.app/",
    technologies: ["React", "Typescript", "Scss", "Firebase Firestore", "Jest"],
  },

  {
    id: "lookupng",
    name: "LookUpNg",
    imgSrc: LookUpNgSrc,
    description:
      "LookUpNg is an application that uses the Skyscanner API to search for the cheapest flight connections between cities. In addition, it provides weather information for the destination city. The application also features a registration and login system, requiring users to be logged in to access the website",
    githubUrl: "https://github.com/olcolcolc/LookUpNg",
    deployed: "https://look-up-ng.netlify.app/",
    technologies: ["Angular", "Typescript", "Scss", "Firebase Firestore"],
  },
];

export default projectsData;
