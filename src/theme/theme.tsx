import { keyframes } from "@emotion/react";

const colors = {
  white: "#ffffff",
  black: "#000000",
  darkgrey: "#121212",
  darkPrimary: "#1F1B24",
};

const fontSize = {
  base: "16px",
  large: "42px",
};

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const mixins = {
  forDesktop: (content: string) => `
      @media screen and (min-width: 601px) {
        ${content}
      }
    `,
  defaultTransition: () => `
      transition: all 0.3s ease-in-out;
    `,
  home: () => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 2rem;
    color: ${colors.black};
    transition: 0.5s ease-in;
    animation: ${fadeInAnimation} 0.5s ease-in-out;
    `,

  title: () => `
    color: ${colors.black};
    font-size: ${fontSize.large};
    margin-top: 2rem;
    `,

  subtitle: () => `
  display: inline-block;
  color: ${colors.black};
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
  padding: 1rem;
    `,
  bio: () => `
    display: block;
    text-align: justify;
    color: ${colors.black};
    padding: 2rem;
    overflow: hidden;
    letter-spacing: 0.15em;
    `,
};

export const theme = {
  colors,
  fontSize,
  mixins,
  fadeInAnimation,
};

export type Theme = typeof theme;
