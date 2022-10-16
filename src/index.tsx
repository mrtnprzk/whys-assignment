import ReactDOM from "react-dom/client";
import App from "./App";
import { ArticleProvider } from "../src/context/ArticlesContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ArticleProvider>
    <App />
  </ArticleProvider>
);
