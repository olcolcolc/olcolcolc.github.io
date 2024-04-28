import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    jsxInject: `import React from 'react'`,
  },
});
