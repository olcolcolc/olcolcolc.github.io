import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../components/icon/Icon";
import Text from "../../components/text/Text";
import {
  technologiesIKnow,
  technologiesImLearning,
} from "../../data/TechStackData";

const HomeContainer = styled.div`
  ${theme.mixins.home()}
  ${theme.mixins.forTablets(`
        padding: 0;
      `)}
`;

const MenuTitle = styled.header`
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
  ${theme.mixins.forTablets(`
        display: none;
      `)}
`;

const Bio = styled.div`
  ${theme.mixins.bio()}
  ${theme.mixins.forMobiles(`
        padding: 1rem;
      `)}
`;

const Technology = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.25rem 0;
`;

const TechnologiesColumn = styled.li`
  font-size: 1rem;
  list-style-type: none;
  padding: 1rem;
`;

const TechnologiesDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 1140px) {
    flex-direction: column;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <MenuTitle>About</MenuTitle>
      <Bio>
        Hello, <br />
        I've spent the last 2,5 years immersing myself in coding, starting with
        Python and gradually transitioning to frontend development, which has
        become my passion. I completed postgraduate studies in 'Front-end
        Development with Angular' to strengthen my skills. Currently, my focus
        is on React and TypeScript. I'm constantly learning - I've just
        completed Dare IT mentoring program and enhanced my skills with a
        mentor. Currently, I'm involved in two group projects. Feel free to
        check out my portfolio!
      </Bio>
      <FontAwesomeIcon icon={faArrowDown} />
      <TechnologiesDiv>
        <TechnologiesColumn>
          <Text variant="subtitle">technologies I know</Text>
          {technologiesIKnow.map((tech) => (
            <Technology key={tech.name}>
              <Icon name={tech.name} /> {tech.label}
            </Technology>
          ))}
        </TechnologiesColumn>
        <TechnologiesColumn>
          <Text variant="subtitle">technologies I'm learning</Text>
          {technologiesImLearning.map((tech) => (
            <Technology key={tech.name}>
              <Icon name={tech.name} /> {tech.label}
            </Technology>
          ))}
        </TechnologiesColumn>
      </TechnologiesDiv>
    </HomeContainer>
  );
}

export default Home;
