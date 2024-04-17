import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Text from "../../components/text/Text";

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

const Course = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-weight: 700;
  padding: 0.5rem;
`;

const School = styled.p`
  padding: 0.5rem;
  font-size: large;
  color: ${theme.colors.darkFont};
`;

const CvPosition = styled.div`
  padding: 2rem;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  ${theme.mixins.defaultTransition}
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
  return (
    <EducationDiv>
      <MenuTitle>EDUCATION</MenuTitle>
      <CvPosition>
        <Years>2022-2023</Years>
        <SchoolCourseDiv>
          <Course>Postgraduate: Frontend developer with Angular </Course>
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
      <CvPosition>
        <Years>2021</Years>
        <SchoolCourseDiv>
          <Course>Python from the basics</Course>
          <School>Hardcoder</School>
          <Info>
            I completed the online course at Hardcoder School to organize the
            knowledge I acquired on my own. The course concluded with a project
            for completion.
          </Info>
        </SchoolCourseDiv>
      </CvPosition>
      <CvPosition>
        <Years>2018-2019</Years>
        <SchoolCourseDiv>
          <Course>Postgraduate: Psychology (Crisis Intervention) </Course>
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
      <CvPosition>
        <Years>2012-2017</Years>
        <SchoolCourseDiv>
          <Course>Master degree in Management (Lean Management) </Course>
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
