import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { theme } from "./styles/theme.js";
import { Theme as ThemeType } from "./styles/theme.js";
import { ThemeProvider } from "@emotion/react";
declare module "@emotion/react" {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}

// Remember, every time you make changes to your TypeScript code, you need to compile it again by running tsc.

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
