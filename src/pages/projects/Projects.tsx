import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Tech from "../../components/tech/Tech";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { css, keyframes } from "@emotion/react";
import projectsData from "../../data/ProjectsData";

type HoveredProps = {
  ishovered: string;
};

type ProjectPositionProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const ProjectsDiv = styled.div`
  ${theme.mixins.home()}
  margin-top: -6rem;
  margin-bottom: 5rem;
`;

const MenuTitle = styled.header`
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
`;

const ProjectPosition = styled.div<ProjectPositionProps>`
  padding: 2rem;
  margin: 1rem;
  display: flex;
  max-width: 1000px;
  justify-content: center;
  flex-direction: column;
  opacity: 1;
  ${theme.mixins.defaultTransition}

  &:hover {
    border-radius: 0.5rem;
    background: ${theme.colors.mainBackground};
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 0 solid #e5e7eb;
  }
  ${theme.mixins.forTablets(`
    padding: 1rem 1rem;
    margin: 0;
  `)}
  ${theme.mixins.forMobiles(`
    flex-direction: column;
    align-items: center;
  `)}
`;

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem;
  align-items: flex-start;

  ${theme.mixins.forMobiles(`
      flex-direction: column;
      align-items: center;
  `)}
`;

const ProjectsName = styled.p<HoveredProps>`
  font-family: ${theme.fonts.montserrat};
  font-size: x-large;
  text-align: center;
  font-weight: 700;
  padding: 0.5rem;
  color: ${(props) =>
    props.ishovered === "true" ? "orange" : theme.colors.darkFont};
  transition: color 0.3s ease;
`;

const ProjectImg = styled.img`
  /* max-width: 300px; */
  max-height: 250px;
  padding: 1rem;
  align-self: flex-start;
  border-radius: 20px;
  filter: brightness(0.5);
  transition: filter 0.3s ease;
  object-fit: contain;
  &:hover {
    filter: brightness(0.9);
  }
  ${theme.mixins.forMobiles(`
    justify-self: center;
    width: 300px;
  `)}
`;

const Info = styled.div`
  padding: 1rem 0.5rem;
  letter-spacing: 0;
  text-align: left;
  color: ${theme.colors.white};
`;

const Link = styled.a`
  position: relative;
  padding-left: 0.5rem;
  font-size: medium;
  text-decoration: none;
  font-family: ${theme.fonts.montserrat};
  color: ${theme.colors.darkFont};
  display: flex;
  /* width: auto; */
  flex-direction: row;
  align-items: center;

  &:hover {
    transition: transform 0.3s ease;
    text-decoration: underline;
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
  padding: 1rem 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
`;

const ArrowIcon = styled(FontAwesomeIcon)<HoveredProps>`
  opacity: ${(props) => (props.ishovered === "true" ? 1 : 0)};
  margin-left: 0.5rem;
  transition: opacity 0.3s ease;
  animation: ${(props) =>
    props.ishovered
      ? css`
          ${move} 0.5s ease-in infinite alternate
        `
      : "none"};
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
          <ProjectsName
            ishovered={(hoveredProjectId === project.id).toString()}
            as="div"
          >
            {project.name}
          </ProjectsName>
          {/* left side */}

          <DetailsDiv>
            <div
              className="img"
              style={{ display: "flex", justifySelf: "center" }}
            >
              {project.imgSrc && <ProjectImg src={project.imgSrc}></ProjectImg>}
            </div>
            {/* right side */}
            <div style={{ flexDirection: "column" }}>
              <Info>{project.description}</Info>
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank">
                  explore the code on github
                  <ArrowIcon
                    icon={faChevronLeft}
                    ishovered={(hoveredProjectId === project.id).toString()}
                  />
                </Link>
              )}

              {project.deployed && (
                <Link href={project.deployed} target="_blank">
                  check the deployed version
                  <ArrowIcon
                    icon={faChevronLeft}
                    ishovered={(hoveredProjectId === project.id).toString()}
                  />
                </Link>
              )}
            </div>
          </DetailsDiv>
          <Technology>
            {project.technologies.map((tech) => (
              <Tech key={tech}>{tech}</Tech>
            ))}
          </Technology>
        </ProjectPosition>
      ))}
    </ProjectsDiv>
  );
}

export default Projects;
