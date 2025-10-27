import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../styles/theme";

const ScrollButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  color: #ffffff;
  text-align: center;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1000;
  background: transparent;
  opacity: ${({ $visible }) => ($visible ? 0.5 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "10px")});
  transition: opacity 0.6s ease, visibility 0.6s ease, transform 0.6s ease;
  ${theme.mixins.defaultTransition}

  &:hover {
    opacity: 1;
  }
`;

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollButton
      onClick={scrollToTop}
      $visible={isVisible}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </ScrollButton>
  );
};

export default ScrollTop;
