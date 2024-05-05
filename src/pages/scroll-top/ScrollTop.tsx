import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../styles/theme";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  color: #ffffff;
  text-align: center;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1000;
  opacity: 0.5;
  background: transparent;
  ${theme.mixins.defaultTransition}
  animation: ${fadeIn} 1s ease-in-out;
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
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollButton
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </ScrollButton>
  );
};

export default ScrollTop;
