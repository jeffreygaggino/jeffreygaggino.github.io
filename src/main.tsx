import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { markFontsWhenReady } from "./styles/fontsReady";
import "./index.css";

markFontsWhenReady();

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
