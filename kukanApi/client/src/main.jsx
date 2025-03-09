import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Prism will auto-highlight code blocks on page load
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
