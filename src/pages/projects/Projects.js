import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Tech from "../../components/tech/Tech";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import projectsData from "../../data/ProjectsData";
const ProjectsDiv = styled.div `
  ${theme.mixins.home()}
`;
const MenuTitle = styled.header `
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
`;
const ProjectPosition = styled.div `
  padding: 1rem;
  margin: 1rem;
  display: flex;
  width: auto;
  justify-content: center;
  flex-direction: row;
  opacity: 1;
  ${theme.mixins.defaultTransition}

  &:hover {
    border-radius: 0.5rem;
    background: rgba(19, 27, 48, 0.284);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 0 solid #e5e7eb;
  }
`;
const DetailsDiv = styled.div `
  flex-direction: column;
  width: 60%;
`;
const ProjectsName = styled.p `
  font-family: ${theme.fonts.montserrat};
  font-size: larger;
  font-weight: 700;
  padding: 0.5rem;
  color: ${(props) => (props.isHovered ? "orange" : theme.colors.darkFont)};
  transition: color 0.3s ease;
`;
const ProjectImg = styled.img `
  width: 40%;
  height: auto;
  padding: 1rem;
  border-radius: 20px;
  filter: brightness(0.5);
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;
const Info = styled.div `
  ${theme.mixins.bio()}
  padding: 0.5rem;
  letter-spacing: 0;
`;
const Link = styled.a `
  position: relative;
  padding: 0.5rem;
  font-size: medium;
  text-decoration: none;
  font-family: ${theme.fonts.montserrat};
  color: ${theme.colors.darkFont};
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    transition: transform 0.3s ease;
    text-decoration: underline;
  }
`;
const move = keyframes `
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
`;
const Technology = styled.ul `
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
`;
const ArrowIcon = styled(FontAwesomeIcon) `
  transform: translateY(-50%);
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  padding-left: 0.5rem;
  animation: ${move} 0.5s ease-in infinite alternate;
`;
function Projects() {
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    return (_jsxs(ProjectsDiv, { children: [_jsx(MenuTitle, { children: "Projects" }), projectsData.map((project) => (_jsxs(ProjectPosition, { onMouseEnter: () => setHoveredProjectId(project.id), onMouseLeave: () => setHoveredProjectId(null), children: [project.imgSrc && _jsx(ProjectImg, { src: project.imgSrc }), _jsxs(DetailsDiv, { children: [_jsx(ProjectsName, { isHovered: hoveredProjectId === project.id, as: "div", children: project.name }), _jsx(Info, { children: project.description }), _jsxs("div", { style: { flexDirection: "column" }, children: [project.githubUrl && (_jsxs(Link, { href: project.githubUrl, target: "_blank", children: ["explore the code on github", _jsx(ArrowIcon, { icon: faChevronLeft, isHovered: hoveredProjectId === project.id })] })), project.deployed && (_jsxs(Link, { href: project.deployed, target: "_blank", children: ["or check the deployed version", _jsx(ArrowIcon, { icon: faChevronLeft, isHovered: hoveredProjectId === project.id })] }))] }), " ", _jsx(Technology, { children: project.technologies.map((tech) => (_jsx(Tech, { children: tech }, tech))) })] })] }, project.id)))] }));
}
export default Projects;
