import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import Text from "../../components/text/Text";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Icon } from "../icon/Icon";
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-scroll";

const NavbarDiv = styled.nav`
  height: 100vh;
  display: flex;
  padding: 5rem;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.5s ease-in;
  background-color: inherit;
  position: sticky;
  top: 0;
  z-index: 1;
  ${theme.mixins.forTablets(`
      height: auto;
      padding: 2.5rem;
      position: static;
  `)}
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0.9rem 0 0 0;
`;

const MenuLink = styled.li<{ isActive: boolean }>`
  position: relative;
  list-style-type: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 700;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.workSans};
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15rem;
    height: 1px;
    background-color: ${theme.colors.darkFont};
    transition: width 0.3s ease-in-out;
  }
  &:hover {
    color: ${theme.colors.white};
    font-weight: 600;

    &:after {
      width: 100%;
      color: ${theme.colors.white};
      ${theme.mixins.forTablets(`
        width: 14rem;
      `)}
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${theme.colors.white};

      &:after {
        width: 100%;
        color: ${theme.colors.white};
      }
      ${theme.mixins.forTablets(`
        width: 14rem;
      `)}
    `}
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.darkFont};
  padding: 2rem;
  ${theme.mixins.forTablets(`
      justify-content: flex-start;
      padding: 1.5rem;
  `)}
`;

function Navbar() {
  const [subtitle] = useTypewriter({
    words: ["frontend developer"],
  });
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <NavbarDiv>
      <Header>
        <Text variant="title">Aleksandra Czyrnek</Text>
        <Text variant="subtitle">
          {subtitle}
          <span style={{ color: "orange" }}>
            <Cursor />
          </span>
        </Text>
        <Menu>
          {["About", "Education", "Projects", "Experience"].map((link) => (
            <Link
              key={link}
              activeClass="active"
              to={link}
              spy={true}
              smooth="easeInOutQuart"
              offset={-70}
              duration={1000}
            >
              <MenuLink
                key={link}
                isActive={activeLink === link}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </MenuLink>
            </Link>
          ))}
        </Menu>
      </Header>
      <IconsDiv>
        <a
          href="https://www.linkedin.com/in/aleksandraczyrnek/"
          target="_blank"
        >
          <Icon name="linkedin" />
        </a>
        <a href="https://www.github.com/olcolcolc" target="_blank">
          <Icon name="github" />
        </a>
      </IconsDiv>
    </NavbarDiv>
  );
}

export default Navbar;
