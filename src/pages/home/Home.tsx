import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../components/icon/Icon";
import Text from "../../components/text/Text";
import myAvatar from "../../assets/imgs/myAvatar.jpg";
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
`;

const Avatar = styled.img`
  margin-top: 2rem;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const Technology = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.25rem 0;
`;

const TechnologiesColumn = styled.li`
  ${theme.mixins.bio()}
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
      <Avatar src={myAvatar} aria-label="my avatar" />
      <Text variant="bio">
        Hello, <br />
        I've spent the last 2,5 years immersing myself in coding, starting with
        Python and gradually transitioning to frontend development, which has
        become my passion. I completed postgraduate studies in 'Front-end
        Development with Angular' to strengthen my skills. Currently, my focus
        is on React and TypeScript. I'm constantly learning - I've just
        completed Dare IT mentoring program and enhanced my skills with a
        mentor. Currently, I'm involved in two group projects. Feel free to
        check out my portfolio!
      </Text>
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
