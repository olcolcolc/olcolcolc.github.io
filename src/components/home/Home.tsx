import React from "react";
import { theme } from "../../theme/theme";
import styled from "@emotion/styled";
import myAvatar from "../../assets/IMG_4906.jpg";
import { keyframes } from "@emotion/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    </HomeContainer>
  );
}

export default Home;
