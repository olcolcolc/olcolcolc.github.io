import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { Icon } from "../../components/icon/Icon";
import { technologiesIKnow } from "../../data/TechStackData";

const HomeContainer = styled.div`
  font-family: ${theme.fonts.openSans};
  ${theme.mixins.home()}
  ${theme.mixins.forTablets(`
    padding: 0;
  `)}
  margin-bottom: 5rem;
`;

const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
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
  padding: 5rem 1.5rem;
  ${theme.mixins.forTablets(`
    padding: 3rem 0;
    font-size: 1.2rem;
  `)}
  ${theme.mixins.forMobiles(`
    padding: 1rem 0;
    margin: 2rem 0;
  `)}
`;

const TechnologiesColumn = styled.li`
  list-style-type: none;
  width: 100%;
`;

const TechnologiesTitle = styled.div`
  font-size: 1.6rem;
  padding-bottom: 2.5rem;
  color: ${theme.colors.darkFont};
  text-align: center;
`;

const HighlightedText = styled.span`
  color: ${theme.colors.orange};
`;

const TechnologiesDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
`;

const TechCloud = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 3rem;
  padding: 0.5rem 0 2rem;
  position: relative;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  overflow: visible;
`;

const TileWrap = styled.li`
  display: grid;
  place-items: center;

  &:nth-of-type(3n) {
    transform: translateY(2px) rotate(-1.2deg);
  }
  &:nth-of-type(4n) {
    transform: translateY(-1px) rotate(1deg);
  }
  &:nth-of-type(5n) {
    transform: translateX(1px) rotate(-0.8deg);
  }
`;

const TechTile = styled.div`
  position: relative;
  background: ${theme.colors.mainBackground};
  display: grid;
  cursor: pointer;
  padding: 0;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  overflow: visible;

  & > div {
    padding-right: 0 !important;
  }

  & svg {
    width: 42px !important;
    height: 42px !important;
    display: block;
  }

  &:hover .label,
  &:focus-visible .label {
    opacity: 1;
    padding-top: 1.5rem;
    transform: translate(-50%, 6px);
  }
`;

const TechLabel = styled.span`
  position: absolute;
  left: 50%;
  bottom: -1rem;
  transform: translate(-50%, 12px);
  z-index: 3;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  color: ${theme.colors.darkFont};
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;
  /* box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25); */
`;

function Home() {
  return (
    <HomeContainer>
      <Section>
        <MenuTitle>About</MenuTitle>

        <Bio>
          Hello! <br />
          I’ve spent several years coding, starting with Python and moving into
          frontend development, which has become my passion. I strengthened my
          skills through postgraduate studies in Angular and the Dare IT
          mentoring program, contributing to group projects including a
          volunteer initiative with Tech to the Rescue.
          <br /> <br />
          My main interests currently are animations, MERN, accessibility, and
          mobile development, but <br />
          My ultimate goal is to{" "}
          <HighlightedText> become a full-stack developer.</HighlightedText>
          <br /> <br />
          Today, I work as a{" "}
          <HighlightedText>Junior Software Developer at EY</HighlightedText>,
          where I continue to grow and apply my skills to exciting projects.
          Feel free to check out my portfolio!
        </Bio>

        <TechnologiesDiv>
          <TechnologiesColumn>
            <TechnologiesTitle>Tech stack:</TechnologiesTitle>

            <TechCloud>
              {technologiesIKnow.map((tech) => (
                <TileWrap key={tech.name}>
                  <TechTile aria-label={tech.label}>
                    <Icon name={tech.name} />
                    <TechLabel className="label">{tech.label}</TechLabel>
                  </TechTile>
                </TileWrap>
              ))}
            </TechCloud>
          </TechnologiesColumn>
        </TechnologiesDiv>
      </Section>
    </HomeContainer>
  );
}

export default Home;
