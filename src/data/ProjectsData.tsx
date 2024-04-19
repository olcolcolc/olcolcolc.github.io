import CakeCalcReactAppImgSrc from "../../src/assets/imgs/CakeCalcReactApp.jpg";
import RNWeatherAppSrc from "../../src/assets/imgs/RNWeatherApp.jpg";
import JustMemesAppSrc from "../../src/assets/imgs/JustMemesApp.jpg";

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
      "The app is designed for bakers and helps calculate the price of a cake, advance payment, and determine the size of the baking pan needed to bake the sponge for the cake. It takes inputs such as the price per person, the number of people, percentage of deposit. By entering customer information, the app provides output information to be fast communicated to the customer during the cake ordering process, as well as internal information for the bakery. The language on the website can be changed to English and Polish. I collaborated with a UI designer who has redesigned the application to make it look more user friendly.",
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
    imgSrc: CakeCalcReactAppImgSrc,
    description:
      "LookUpNg is an application that uses the Skyscanner API to search for the cheapest flight connections between cities. In addition, it provides weather information for the destination city. The application also features a registration and login system, requiring users to be logged in to access the website",
    githubUrl: "https://github.com/olcolcolc/LookUpNg",
    deployed: "https://look-up-ng.netlify.app/",
    technologies: ["Angular", "Typescript", "Scss", "Firebase Firestore"],
  },

  {
    id: "inprogress",
    name: "Currently in progress",
    imgSrc: "",
    description:
      "LookUpNg is an application that uses the Skyscanner API to search for the cheapest flight connections between cities. In addition, it provides weather information for the destination city. The application also features a registration and login system, requiring users to be logged in to access the website",
    githubUrl: "https://github.com/olcolcolc/LookUpNg",
    deployed: "https://look-up-ng.netlify.app/",
    technologies: ["Angular", "Typescript", "Scss", "Firebase Firestore"],
  },
];

export default projectsData;
