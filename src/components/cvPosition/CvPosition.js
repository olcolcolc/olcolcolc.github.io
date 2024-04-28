import { jsx as _jsx } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
const CvPositionStyled = styled.div `
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  ${theme.mixins.defaultTransition}

  &:hover {
    border-radius: 0.5rem;
    background: rgba(19, 27, 48, 0.284);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 0 solid #e5e7eb;
  }
`;
const CvPosition = ({ children }) => {
    return _jsx(CvPositionStyled, { children: children });
};
export default CvPosition;
