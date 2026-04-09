import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css"; // 使用 @/ 指向 src 目錄
import App from "@/App"; // 使用 @/ 指向 src 目錄

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);