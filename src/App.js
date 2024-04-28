import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
const MainDiv = styled.div `
  display: flex;
  flex-direction: row;
`;
const ScrollableDiv = styled.div `
  flex-direction: column;
`;
function App() {
    return (_jsxs(MainDiv, { children: [_jsx(Navbar, {}), _jsxs(ScrollableDiv, { children: [_jsx("div", { id: "About", children: _jsx(Home, {}) }), _jsx("div", { id: "Education", children: _jsx(Education, {}) }), _jsx("div", { id: "Projects", children: _jsx(Projects, {}) }), _jsx("div", { id: "Experience", children: _jsx(Experience, {}) })] })] }));
}
export default App;
