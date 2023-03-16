import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App1 from "./AppLagacy";
import App2 from "./AppNew";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      Legacy Context
      <App1 />
    </div>
    <div>
      New Context
      <App2 />
    </div>
  </StrictMode>
);
