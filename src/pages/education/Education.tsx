import styled from "@emotion/styled";
import { useState } from "react";
import { theme } from "../../styles/theme";

type CourseProps = {
  isHovered: boolean;
};

type CvPositionProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

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

const EducationDiv = styled.div`
  ${theme.mixins.home()}
`;

const MenuTitle = styled.h3`
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
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
      <CvPosition
        onMouseEnter={() => setHoveredPosition(0)}
        onMouseLeave={() => setHoveredPosition(null)}
      >
        <Years>2022-2023</Years>
        <SchoolCourseDiv>
          <Course isHovered={hoveredPosition === 0} as="p">
            Postgraduate: Frontend developer with Angular
          </Course>
          <School>WSB Merito University</School>
          <Info>
            The studies I undertook to organize the knowledge I gained on my
            own. We covered topics such as: <br />
            <br />
            JS / TS / Git / RWD / RestApi / Angular / RxJS / Redux / Jest / HTML
            / CSS / SCSS
            <br />
            <br />I concluded my studies with two projects for completion: one
            coded in Angular, and the second one in React.
          </Info>
        </SchoolCourseDiv>
      </CvPosition>

      <CvPosition
        onMouseEnter={() => setHoveredPosition(1)}
        onMouseLeave={() => setHoveredPosition(null)}
      >
        <Years>2018-2019</Years>
        <SchoolCourseDiv>
          <Course isHovered={hoveredPosition === 1} as="p">
            Postgraduate: Psychology (Crisis Intervention){" "}
          </Course>
          <School>University of Social Sciences and Humanities</School>
          <Info>
            I have acquired knowledge in clinical psychology, with a particular
            focus on trauma psychology, conflict- and crisis-oriented social
            psychology, as well as psychoprophylaxis. I obtained certificates in
            ICISF "Assisting Individuals in Crisis" and "Group Crisis
            Intervention".
          </Info>
        </SchoolCourseDiv>
      </CvPosition>

      <CvPosition
        onMouseEnter={() => setHoveredPosition(2)}
        onMouseLeave={() => setHoveredPosition(null)}
      >
        <Years>2012-2017</Years>
        <SchoolCourseDiv>
          <Course isHovered={hoveredPosition === 2} as="p">
            Master degree in Management (Lean Management){" "}
          </Course>
          <School>University of Social Sciences and Humanities</School>
          <Info>
            Throughout my Master's program in Management, specifically
            emphasizing Lean Management, I learned practical techniques to
            streamline operations and cut down unnecessary steps. We covered
            concepts like efficient workflow design, identifying and eliminating
            bottlenecks, and fostering a culture of continuous improvement
            within businesses.
          </Info>
        </SchoolCourseDiv>
      </CvPosition>
    </EducationDiv>
  );
}

export default Education;
