import React from "react";
import { theme } from "../../theme/theme";
import styled from "@emotion/styled";
import myAvatar from "../../assets/IMG_4906.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  color: ${theme.colors.black};
  transition: 0.5s ease-in;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Title = styled.h1`
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.large};
  margin-top: 2rem;
`;

const Subtitle = styled.h3`
  display: inline-block;
  color: ${theme.colors.black};
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
  padding: 1rem;
`;

const Bio = styled.p`
  display: block;
  text-align: justify;
  color: ${theme.colors.black};
  padding: 2rem;
  overflow: hidden;
  letter-spacing: 0.15em;
`;

const List = styled.ul`
  list-style-type: none;
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
      <Title>Aleksandra Czyrnek</Title>
      <Subtitle>
        {subtitle}
        <span style={{ color: "orange" }}>
          <Cursor />
        </span>
      </Subtitle>
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
        <Bio>
          <Subtitle>technologies I know</Subtitle>
          <List>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Firebase</li>
            <li>Figma</li>
            <li>npm, yarn</li>
            <li>Angular</li>
            <li>Python</li>
            <li>Scss</li>
            <li>styled components</li>
            <li>Emotion</li>
            <li>Retool</li>
            <li>REST Api</li>
          </List>
        </Bio>
        <Bio>
          <Subtitle>technologies I'm learning</Subtitle>
          <List>
            <li>Next.js</li>
            <li>React Native</li>
          </List>
        </Bio>
      </TechnologiesDiv>
    </HomeContainer>
  );
}

export default Home;
