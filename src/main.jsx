import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  // {/* </React.StrictMode> */}
);
