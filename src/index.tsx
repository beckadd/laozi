/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { DebugContextProvider } from "./components/ContextManager";

render(
  () => (
    <DebugContextProvider debug = {true}>
      <App />
    </DebugContextProvider>
  ),
  document.getElementById("root") as HTMLElement
);
