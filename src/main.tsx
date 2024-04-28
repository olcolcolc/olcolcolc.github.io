import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./styles/theme.tsx";
import { Theme as ThemeType } from "./styles/theme.tsx";
import { ThemeProvider } from "@emotion/react";
declare module "@emotion/react" {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}

// Remember, every time you make changes to your TypeScript code, you need to compile it again by running tsc.

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
