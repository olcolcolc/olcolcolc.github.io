import styled from "@emotion/styled";
import { useState } from "react";
import { theme } from "../../styles/theme";
import educationData from "../../data/EducationData";

type CourseProps = {
  isHovered: boolean;
};

type CvPositionProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const EducationDiv = styled.div`
  ${theme.mixins.home()}
`;

const MenuTitle = styled.header`
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
`;

const CvPosition = styled.div<CvPositionProps>`
  padding: 0.5rem 0;
  margin: 1rem;
  display: flex;
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

const Years = styled.p`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  padding: 0.5rem;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  width: 9rem;
`;

const Course = styled.p<CourseProps>`
  font-family: ${theme.fonts.montserrat};
  font-weight: 700;
  padding: 0.5rem;
  color: ${(props) => (props.isHovered ? "orange" : theme.colors.darkFont)};
  transition: color 0.3s ease;
`;

const School = styled.p`
  padding: 0.5rem;
  font-size: large;
  color: ${theme.colors.darkFont};
`;

const SchoolCourseDiv = styled.div`
  flex-direction: column;
  width: 60%;
`;

const Info = styled.div`
  ${theme.mixins.bio()}
  padding: 0.5rem;
  letter-spacing: 0;
`;

function Education() {
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null);

  return (
    <EducationDiv>
      <MenuTitle>EDUCATION</MenuTitle>
      {educationData.map((edu, index) => (
        <CvPosition
          key={index}
          onMouseEnter={() => setHoveredPosition(index)}
          onMouseLeave={() => setHoveredPosition(null)}
        >
          <Years>{edu.years}</Years>
          <SchoolCourseDiv>
            <Course isHovered={hoveredPosition === index} as="p">
              {edu.course}
            </Course>
            <School>{edu.school}</School>
            <Info>{edu.info}</Info>
          </SchoolCourseDiv>
        </CvPosition>
      ))}
    </EducationDiv>
  );
}

export default Education;
