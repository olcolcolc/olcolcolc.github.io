import styled from "@emotion/styled";
import { useState } from "react";
import { theme } from "../../styles/theme";
import experienceData from "../../data/ExperienceData";

type RoleProps = {
  isHovered: boolean;
};

type ExpPositionProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const ExperienceDiv = styled.div`
  ${theme.mixins.home()}
  margin-top: -6rem;
`;

const MenuTitle = styled.header`
  ${theme.mixins.menuTitle()}
`;

const ExperienceBio = styled.div`
  padding: 3rem;
  font-size: 1.25rem;
`;

const Important = styled.p`
  color: ${theme.colors.orange};
  font-weight: 700;
`;

const ExpPosition = styled.div<ExpPositionProps>`
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
  justify-content: flex-end;
  text-transform: uppercase;
  margin: 0.5rem;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  width: 10rem;
  ${theme.mixins.forTablets(`
    width: 100%;
    padding: 0 2rem;
  `)}
`;

const Role = styled.p<RoleProps>`
  font-family: ${theme.fonts.montserrat};
  font-weight: 700;
  font-size: large;
  padding: 0.5rem 0 0 0.5rem;
  color: ${(props) => (props.isHovered ? "orange" : theme.colors.darkFont)};
  transition: color 0.3s ease;
`;

const Company = styled.p`
  padding: 0.5rem;
  font-size: large;
  font-style: oblique;
  color: ${theme.colors.darkFont};
`;

const SchoolCourseDiv = styled.div`
  flex-direction: column;
  max-width: 50rem;
  ${theme.mixins.forTablets(`
    width: 100%;
    padding: 0 2rem;
  `)}
`;

const Info = styled.div`
  padding: 0.5rem;
  letter-spacing: 0;
`;

function Education() {
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null);

  return (
    <ExperienceDiv>
      <MenuTitle>EXPERIENCE</MenuTitle>
      <ExperienceBio>
        My professional experience story is quite unique. During my studies, I
        discovered that my passion lies in pastry making. I pursued this
        interest independently while working as a pastry chef and eventually
        became the head of the pastry section in a well-known restaurant in
        Wroclaw. Over more than 10 years in the industry, I developed qualities
        such as hard work, patience, organization, responsibility, flexibility,
        and the ability to perform under time pressure. I also learned how to
        seek knowledge and grow independently. At the same time, I never gave up
        on my interest in technology. I transitioned into IT, completing
        postgraduate studies in Frontend Development with Angular, and
        participating in group projects through Dare IT and Tech to the Rescue.
        <Important>
          Today, I am working as a Junior Software Developer at EY, where I
          continue to develop my skills in modern technologies and agile
          teamwork.
        </Important>
        I strongly believe that the discipline, adaptability, and
        problem-solving mindset gained from my earlier career directly support
        my effectiveness in programming projects.
      </ExperienceBio>
      {experienceData.map((exp, index) => (
        <ExpPosition
          key={index}
          onMouseEnter={() => setHoveredPosition(index)}
          onMouseLeave={() => setHoveredPosition(null)}
        >
          <Years>{exp.years}</Years>
          <SchoolCourseDiv>
            <Role isHovered={hoveredPosition === index} as="p">
              {exp.role}
            </Role>
            <Company>{exp.company}</Company>
            <Info>{exp.info}</Info>
          </SchoolCourseDiv>
        </ExpPosition>
      ))}
    </ExperienceDiv>
  );
}

export default Education;
