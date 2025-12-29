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
  max-width: 1600px;
  padding: 0 5rem;
  ${theme.mixins.forTablets(`
    flex-direction: column;
    padding: 0 2rem;
  `)}
  ${theme.mixins.forMobiles(`
    padding: 0rem;
  `)}
`;

const ScrollableDiv = styled.div`
  flex-direction: column;
  padding-left: 5rem;
  ${theme.mixins.forTablets(`
    width: 100%;
    padding-left: 0;
  `)}
`;

const SectionDiv = styled.div`
  padding: 1rem 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0 0 0;
  letter-spacing: 0.2rem;
  font-size: 0.7rem;
  color: ${theme.colors.darkFont};
  font-family: ${theme.fonts.montserrat};
  width: 100%;
`;

function App() {
  return (
    <MainDiv>
      <Torch />
      <Navbar />
      <ScrollableDiv>
        <ScrollTop />
        <SectionDiv id="About">
          <Home />
        </SectionDiv>
        <SectionDiv id="Education">
          <Education />
        </SectionDiv>
        <SectionDiv id="Projects">
          <Projects />
        </SectionDiv>
        <SectionDiv id="Experience">
          <Experience />
        </SectionDiv>
        <Footer>copyrights olcolcolc</Footer>
      </ScrollableDiv>
    </MainDiv>
  );
}

export default App;
