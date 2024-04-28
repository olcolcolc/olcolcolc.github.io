import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import Text from "../../components/text/Text";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Icon } from "../icon/Icon";
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-scroll";
const NavbarDiv = styled.nav `
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 6rem;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.5s ease-in;
  background-color: inherit;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Header = styled.header `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Menu = styled.ul `
  margin: 0;
  padding: 0.9rem 0 0 0;
`;
const MenuLink = styled.li `
  position: relative;
  list-style-type: none;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  cursor: pointer;
  margin-bottom: 0.5rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 9rem;
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
    }
  }

  ${({ isActive }) => isActive &&
    css `
      color: ${theme.colors.white};

      &:after {
        width: 100%;
        color: ${theme.colors.white};
      }
    `}
`;
const IconsDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.darkFont};
`;
function Navbar() {
    const [subtitle] = useTypewriter({
        words: ["frontend developer"],
    });
    const [activeLink, setActiveLink] = useState(null);
    return (_jsxs(NavbarDiv, { children: [_jsxs(Header, { children: [_jsx(Text, { variant: "title", children: "Aleksandra Czyrnek" }), _jsxs(Text, { variant: "subtitle", children: [subtitle, _jsx("span", { style: { color: "orange" }, children: _jsx(Cursor, {}) })] }), _jsx(Menu, { children: ["About", "Education", "Projects", "Experience"].map((link) => (_jsx(Link, { activeClass: "active", to: link, spy: true, smooth: "easeInOutQuart", offset: -70, duration: 1000, children: _jsx(MenuLink, { isActive: activeLink === link, onClick: () => setActiveLink(link), children: link }, link) }))) })] }), _jsxs(IconsDiv, { children: [_jsx("a", { href: "https://www.linkedin.com/in/aleksandraczyrnek/", target: "_blank", children: _jsx(Icon, { name: "linkedin" }) }), _jsx("a", { href: "https://www.github.com/olcolcolc", target: "_blank", children: _jsx(Icon, { name: "github" }) })] })] }));
}
export default Navbar;
