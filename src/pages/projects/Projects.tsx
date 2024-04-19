import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Tech from "../../components/tech/Tech";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import projectsData from "../../data/ProjectsData";

type ProjectsNameProps = {
  isHovered: boolean;
};

type ProjectPositionProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const ProjectsDiv = styled.div`
  ${theme.mixins.home()}
`;

const MenuTitle = styled.header`
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
`;

const ProjectPosition = styled.div<ProjectPositionProps>`
  padding: 0.5rem 0;
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

const DetailsDiv = styled.div`
  flex-direction: column;
  width: 60%;
`;

const ProjectsName = styled.p<ProjectsNameProps>`
  font-family: ${theme.fonts.montserrat};
  font-size: larger;
  font-weight: 700;
  padding: 0.5rem;
  color: ${(props) => (props.isHovered ? "orange" : theme.colors.darkFont)};
  transition: color 0.3s ease;
`;

const ProjectImg = styled.img`
  width: 40%;
  height: auto;
  padding: 1rem;
  border-radius: 20px;
`;

const Info = styled.div`
  ${theme.mixins.bio()}
  padding: 1rem;
  letter-spacing: 0;
`;

const Link = styled.a`
  position: relative;
  padding: 0.5rem;
  font-size: medium;
  text-decoration: none;
  font-family: ${theme.fonts.montserrat};
  color: ${theme.colors.darkFont};
  display: flex;
  flex-direction: row;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 8px;
    height: 1px;
    width: 52%;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: right;
  }
`;

const move = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
`;

const Technology = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
`;

const ArrowIcon = styled(FontAwesomeIcon)<ProjectsNameProps>`
  transform: translateY(-50%);
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  padding-left: 0.5rem;
  animation: ${move} 0.5s ease-in infinite alternate;
`;

function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  return (
    <ProjectsDiv>
      <MenuTitle>Projects</MenuTitle>
      {projectsData.map((project) => (
        <ProjectPosition
          key={project.id}
          onMouseEnter={() => setHoveredProjectId(project.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          {project.imgSrc && <ProjectImg src={project.imgSrc}></ProjectImg>}

          <DetailsDiv>
            <ProjectsName isHovered={hoveredProjectId === project.id} as="div">
              {project.name}
            </ProjectsName>
            <Info>{project.description}</Info>
            <div style={{ flexDirection: "column" }}>
              <Link href={project.githubUrl}>
                explore the code on github
                <ArrowIcon
                  icon={faChevronLeft}
                  isHovered={hoveredProjectId === project.id}
                />
              </Link>
              {project.deployed && (
                <Link href={project.deployed}>
                  or check the deployed version
                  <ArrowIcon
                    icon={faChevronLeft}
                    isHovered={hoveredProjectId === project.id}
                  />
                </Link>
              )}
            </div>{" "}
            <Technology>
              {project.technologies.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </Technology>
          </DetailsDiv>
        </ProjectPosition>
      ))}
    </ProjectsDiv>
  );
}

export default Projects;
