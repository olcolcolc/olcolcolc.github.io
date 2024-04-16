import { theme } from "../../theme/theme";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 8vh;
  width: 100%;
  transition: 0.5s ease-in;
`;

const MenuItem = styled.li`
  list-style: none;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
`;

// react-router-dom, types

function Navbar() {
  return (
    <Nav>
      <MenuItem>
        <MenuLink href="/">Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/projects">Projects</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/education">Education</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink
          href="https://www.linkedin.com/in/aleksandraczyrnek/"
          target="_blank"
        >
          Linkedin
        </MenuLink>
      </MenuItem>
    </Nav>
  );
}

export default Navbar;
