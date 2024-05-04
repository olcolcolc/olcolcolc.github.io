import styled from "@emotion/styled";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Torch from "./components/torch/Torch";
import { theme } from "./styles/theme";
import ScrollTop from "./pages/scroll-top/ScrollTop";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  ${theme.mixins.forTablets(`
    flex-direction: column;
  `)}
`;

const ScrollableDiv = styled.div`
  flex-direction: column;
  ${theme.mixins.forTablets(`
    width: 100%;
  `)}
`;

function App() {
  return (
    <MainDiv>
      <Torch />
      <Navbar />
      <ScrollableDiv>
        <ScrollTop />
        <div id="About">
          <Home />
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Experience">
          <Experience />
        </div>
      </ScrollableDiv>
    </MainDiv>
  );
}

export default App;
