/* global React */

import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./styles/theme.jsx";
import { ThemeProvider } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
