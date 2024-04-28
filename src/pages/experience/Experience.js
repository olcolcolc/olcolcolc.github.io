import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { useState } from "react";
import { theme } from "../../styles/theme";
import experienceData from "../../data/ExperienceData";
const ExperienceDiv = styled.div `
  ${theme.mixins.home()}
`;
const MenuTitle = styled.header `
  ${theme.mixins.menuTitle()}
  ${theme.mixins.defaultTransition}
`;
const ExperienceBio = styled.p `
  ${theme.mixins.bio()}
`;
const Important = styled.p `
  color: ${theme.colors.orange};
  font-weight: 700;
`;
const ExpPosition = styled.div `
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
const Years = styled.p `
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  padding: 0.5rem;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  width: 9rem;
`;
const Role = styled.p `
  font-family: ${theme.fonts.montserrat};
  font-weight: 700;
  padding: 0.5rem;
  color: ${(props) => (props.isHovered ? "orange" : theme.colors.darkFont)};
  transition: color 0.3s ease;
`;
const Company = styled.p `
  padding: 0.5rem;
  font-size: large;
  color: ${theme.colors.darkFont};
`;
const SchoolCourseDiv = styled.div `
  flex-direction: column;
  width: 60%;
`;
const Info = styled.div `
  ${theme.mixins.bio()}
  padding: 0.5rem;
  letter-spacing: 0;
`;
function Education() {
    const [hoveredPosition, setHoveredPosition] = useState(null);
    return (_jsxs(ExperienceDiv, { children: [_jsx(MenuTitle, { children: "EXPERIENCE" }), _jsxs(ExperienceBio, { children: ["My professional experience story is quite specific. During my studies, I discovered that my passion lies in pastry making. I pursued knowledge in this field independently while working as a pastry chef, all while not giving up on my studies. I have been involved in pastry making for over 10 years - currently, I work as the head of the pastry section in a well-known restaurant in Wroclaw. This experience has shaped me into a hardworking, patient, organized, responsible, flexible, and capable individual able to work under time pressure. I've also learned how to seek knowledge and develop independently.", _jsx(Important, { children: "I see a lot of commonalities between programming and working in a programming team and working in a pastry shop - something I'd be happy to talk about." }), "I am convinced that the skills and traits I've gained during my professional experience are also crucial for effective work in a programming team. I'm constantly gaining experience working in programming teams through my involvement in project groups I've joined through Dare IT."] }), experienceData.map((exp, index) => (_jsxs(ExpPosition, { onMouseEnter: () => setHoveredPosition(index), onMouseLeave: () => setHoveredPosition(null), children: [_jsx(Years, { children: exp.years }), _jsxs(SchoolCourseDiv, { children: [_jsx(Role, { isHovered: hoveredPosition === index, as: "p", children: exp.role }), _jsx(Company, { children: exp.company }), _jsx(Info, { children: exp.info })] })] }, index)))] }));
}
export default Education;
