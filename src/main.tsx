
// @ts-expect-error - react-dom/client types may be unavailable in this project setup.
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
// @ts-expect-error - CSS module declarations may be unavailable in this setup.
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
