/* global React */

import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { theme } from "./styles/theme.js";
import { ThemeProvider } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
