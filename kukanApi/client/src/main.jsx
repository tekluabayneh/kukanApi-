import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let queryClient = new QueryClient();
//  Prism will auto-highlight code blocks on page load
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
