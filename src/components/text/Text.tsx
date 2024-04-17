import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const Text = styled.div<{ variant: "title" | "subtitle" | "bio" }>`
  ${({ variant }) => {
    switch (variant) {
      case "title":
        return theme.mixins.title();
      case "subtitle":
        return theme.mixins.subtitle();
      case "bio":
        return theme.mixins.bio();
      default:
        return "";
    }
  }}
`;

export default Text;
