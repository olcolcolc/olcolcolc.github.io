import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { keyframes } from "@emotion/react";

const TorchContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  z-index: 12000;
  mix-blend-mode: overlay;
  width: 300px;
  height: 300px;
  border: 1px solid #9d9da2; // Replace with your color variable
  background: #9d9da2; // Replace with your color variable
  box-shadow: 0 0 200px 200px #9d9da2; // Replace with your color variable
  opacity: 1;
`;

const Torch: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 150, y: e.clientY - 150 }); // Subtract half of the width and height
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <TorchContainer style={{ left: position.x, top: position.y }} />;
};
export default Torch;
