import { keyframes } from "@emotion/react";

const colors = {
  white: "#ffffff",
  black: "#000000",
  darkgrey: "#121212",
  darkPrimary: "#1F1B24",
  darkFont: "rgba(207, 221, 251, 0.724);",
};

const fontSize = {
  base: "16px",
  large: "42px",
};

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fonts = {
  montserrat: "Montserrat, sans-serif",
  openSans: "Open Sans, sans-serif",
  roboto: "Roboto, sans-serif",
};

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
    padding-top: 2rem;
    transition: 0.5s ease-in;
    animation: ${fadeInAnimation} 0.5s ease-in-out;
    `,

  title: () => `
    color: ${colors.white};
    font-size: ${fontSize.large};
    margin-top: 2rem;
    font-weight: 700;
    font-family: ${fonts.openSans};
    `,

  subtitle: () => `
  color: ${colors.darkFont};
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.3em;
  padding: 1rem 0;
    `,
  bio: () => `
    text-align: justify;
    color: ${colors.white};
    padding: 2rem 5rem;
    letter-spacing: 0.15em;
    `,
  menuTitle: () => `
  color: ${colors.darkFont};
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.3em;
  text-transform: uppercase;
    `,
};

export const theme = {
  colors,
  fontSize,
  mixins,
  fonts,
  fadeInAnimation,
};

export type Theme = typeof theme;
