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
  margin-top: -6rem;
  margin-bottom: 5rem;
`;

const MenuTitle = styled.header`
  ${theme.mixins.menuTitle()}
  ${theme.mixins.forMobiles(`
    margin-bottom: 0.5rem;
  `)}
`;

const Wrapper = styled.div`
  ${theme.mixins.forMobiles(`
    padding: 0 0.5rem;
  `)}
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
  ${theme.mixins.forMobiles(`
    padding: 1rem;
    margin: 0rem;
  `)}
`;

const Years = styled.p`
  display: flex;
  padding: 0.5rem;
  justify-content: flex-start;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  ${theme.mixins.forTablets(`
    width: 100%;
    justify-content: flex-start;
  `)}
  ${theme.mixins.forMobiles(`
    font-size: 0.8rem;
    padding: 0;
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
  ${theme.mixins.forMobiles(`
    padding: 0rem;
  `)}
`;

const School = styled.p`
  padding: 0.5rem;
  font-size: large;
  color: ${theme.colors.darkFont};
  ${theme.mixins.forMobiles(`
    font-size: 0.8rem;
    padding: 0rem;
  `)}
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
  ${theme.mixins.forTablets(`
    padding: 0rem;
    font-size: 0.8rem;
  `)}
`;

function Education() {
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null);

  return (
    <EducationDiv>
      <MenuTitle>EDUCATION</MenuTitle>
      <Wrapper>
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
      </Wrapper>
    </EducationDiv>
  );
}

export default Education;
