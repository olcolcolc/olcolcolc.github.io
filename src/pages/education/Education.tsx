import styled from "@emotion/styled";
import { theme } from "../../theme/theme";
import Text from "../../components/text/Text";

const EducationDiv = styled.div`
  ${theme.mixins.home()}
`;

function Education() {
  return (
    <EducationDiv>
      <Text variant="title">Education</Text>
    </EducationDiv>
  );
}

export default Education;
