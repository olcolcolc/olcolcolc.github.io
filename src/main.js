import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { theme } from "./styles/theme.js";
import { ThemeProvider } from "@emotion/react";
// Remember, every time you make changes to your TypeScript code, you need to compile it again by running tsc.
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { theme: theme, children: _jsx(App, {}) }) }));
