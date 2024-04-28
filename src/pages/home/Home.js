import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../components/icon/Icon";
import Text from "../../components/text/Text";
import myAvatar from "../../assets/imgs/myAvatar.jpg";
import { technologiesIKnow, technologiesImLearning, } from "../../data/TechStackData";
const HomeContainer = styled.div `
  ${theme.mixins.home()}
`;
const Avatar = styled.img `
  margin-top: 2rem;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;
const List = styled.ul `
  list-style-type: none;
`;
const Technology = styled.li `
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0;
`;
const TechnologiesDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
function Home() {
    return (_jsxs(HomeContainer, { children: [_jsx(Avatar, { src: myAvatar, "aria-label": "my avatar" }), _jsxs(Text, { variant: "bio", children: ["Hello, ", _jsx("br", {}), "I've spent the last 2,5 years immersing myself in coding, starting with Python and gradually transitioning to frontend development, which has become my passion. I completed postgraduate studies in 'Front-end Development with Angular' to strengthen my skills. Currently, my focus is on React and TypeScript. I'm constantly learning - I've just completed Dare IT mentoring program and enhanced my skills with a mentor. Currently, I'm involved in two group projects. Feel free to check out my portfolio!"] }), _jsx(FontAwesomeIcon, { icon: faArrowDown }), _jsxs(TechnologiesDiv, { children: [_jsxs(Text, { variant: "bio", children: [_jsx(Text, { variant: "subtitle", children: "technologies I know" }), _jsx(List, { children: technologiesIKnow.map((tech) => (_jsxs(Technology, { children: [_jsx(Icon, { name: tech.name }), " ", tech.label] }, tech.name))) })] }), _jsxs(Text, { variant: "bio", children: [_jsx(Text, { variant: "subtitle", children: "technologies I'm learning" }), _jsx(List, { children: technologiesImLearning.map((tech) => (_jsxs(Technology, { children: [_jsx(Icon, { name: tech.name }), " ", tech.label] }, tech.name))) })] })] })] }));
}
export default Home;
