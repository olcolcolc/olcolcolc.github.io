import React from "react";
import { theme } from "../../theme/theme";
import styled from "@emotion/styled";
import myAvatar from "../../assets/IMG_4906.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../components/icon/Icon";
import Text from "../../components/text/Text";

const HomeContainer = styled.div`
  ${theme.mixins.home()}
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const List = styled.ul`
  list-style-type: none;
`;

const Technology = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0;
`;

const TechnologiesDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

// react-router-dom, types

function Home() {
  const [subtitle] = useTypewriter({
    words: ["frontend developer"],
  });
  return (
    <HomeContainer>
      <Avatar src={myAvatar} aria-label="my avatar" />
      <Text variant="title">Aleksandra Czyrnek</Text>
      <Text variant="subtitle">
        {subtitle}
        <span style={{ color: "orange" }}>
          <Cursor />
        </span>
        <Technology style={{ justifyContent: "center", paddingTop: "1rem" }}>
          <a
            href="https://www.linkedin.com/in/aleksandraczyrnek/"
            target="_blank"
          >
            <Icon name="linkedin" />
          </a>
          <a href="https://www.github.com/olcolcolc" target="_blank">
            <Icon name="github" />
          </a>
        </Technology>
      </Text>
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
        <Text variant="bio">
          <Text variant="subtitle">technologies I know</Text>
          <List>
            <Technology>
              <Icon name="react" /> React
            </Technology>
            <Technology>
              <Icon name="typescript" /> TypeScript
            </Technology>
            <Technology>
              <Icon name="javascript" /> JavaScript
            </Technology>
            <Technology>
              <Icon name="firebase" /> Firebase
            </Technology>
            <Technology>
              <Icon name="figma" /> Figma
            </Technology>
            <Technology>
              <Icon name="angular" /> Angular
            </Technology>
            <Technology>
              <Icon name="python" /> Python
            </Technology>
            <Technology>
              <Icon name="sass" /> Sass
            </Technology>
            <Technology>
              <Icon name="styledComponents" />
              Styled components, Emotion
            </Technology>
            <Technology>
              <Icon name="retool" />
              Retool
            </Technology>
            <Technology>
              <Icon name="restApi" />
              REST API
            </Technology>
          </List>
        </Text>
        <Text variant="bio">
          <Text variant="subtitle">technologies I'm learning</Text>
          <List>
            <Technology>
              <Icon name="nextjs" /> Next.js
            </Technology>
            <Technology>
              <Icon name="react" /> React Native
            </Technology>
          </List>
        </Text>
      </TechnologiesDiv>
    </HomeContainer>
  );
}

export default Home;
