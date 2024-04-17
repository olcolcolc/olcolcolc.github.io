import styled from "@emotion/styled";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ScrollableDiv = styled.div`
  flex-direction: column;
`;

function App() {
  return (
    <MainDiv>
      <Navbar />
      <ScrollableDiv>
        <div id="About">
          <Home />
        </div>
        <div id="Education">
          <Education />
        </div>
      </ScrollableDiv>
    </MainDiv>
  );
}

export default App;
