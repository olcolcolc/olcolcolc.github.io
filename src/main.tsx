import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./styles/theme.tsx";
import { Theme as ThemeType } from "./styles/theme.tsx";
import { ThemeProvider } from "@emotion/react";
declare module "@emotion/react" {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
