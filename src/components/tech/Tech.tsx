import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import React from "react";

const TechDiv = styled.div`
  display: flex;
  color: orange;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  font-size: small;
  align-items: center;
  border-radius: 2rem;
  background-color: #5e4c2a7a;
  justify-content: center;
  white-space: nowrap;
  ${theme.mixins.defaultTransition}
  ${theme.mixins.forMobiles(`
      padding: 0.25rem 0.5rem;
      font-size: 0.6rem;
      margin: 0.2rem;
  `)}
`;

const Tech: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TechDiv>{children}</TechDiv>;
};

export default Tech;
