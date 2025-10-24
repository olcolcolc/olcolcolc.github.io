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
`;

const CvPosition = styled.div<CvPositionProps>`
  padding: 1.5rem 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  ${theme.mixins.defaultTransition}
  &:hover {
    border-radius: 0.5rem;
    background: ${theme.colors.mainBackground};
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 0 solid #e5e7eb;
  }
  ${theme.mixins.forTablets(`
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
  `)}
`;

const Years = styled.p`
  display: flex;
  padding: 0.5rem;
  margin: 0;
  justify-content: flex-start;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  ${theme.mixins.forTablets(`
    width: 100%;
    justify-content: flex-start;
  `)}
`;

const Course = styled.p<CourseProps>`
  font-family: ${theme.fonts.montserrat};
  font-weight: 700;
  padding: 0.5rem;
  color: ${(props) => (props.isHovered ? "orange" : theme.colors.darkFont)};
  transition: color 0.3s ease;
  ${theme.mixins.forTablets(`
    width: 100%;
      color: ${theme.colors.orange};
  `)}
`;

const School = styled.p`
  padding: 0.5rem;
  font-size: large;
  color: ${theme.colors.darkFont};
`;

const SchoolCourseDiv = styled.div`
  flex-direction: column;
  max-width: 60rem;
  ${theme.mixins.forTablets(`
    width: 100%;
  `)}
`;

const Info = styled.div`
  padding: 0.5rem;
  letter-spacing: 0;
  text-align: left;
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
