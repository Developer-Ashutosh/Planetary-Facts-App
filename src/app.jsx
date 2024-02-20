import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/header.jsx";
import Main from "./Main.jsx";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "earth");
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  const fixTheme = (theme) => {
    setTheme(theme);
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };

  const [preViewing, setPreViewing] = useState(
    JSON.parse(localStorage.getItem("previewState")) || [true, false, false]
  );

  const toggleView = (event) => {
    const elem = event.target;
    if (elem.tagName === "BUTTON" || elem.parentElement.tagName === "BUTTON") {
      const id = parseInt(
        elem.tagName === "BUTTON"
          ? elem.dataset.id
          : elem.parentElement.dataset.id,
        10
      );
      setPreViewing((preViewing) => {
        let previewState = preViewing.map((value, index) => index === id);
        localStorage.setItem("previewState", JSON.stringify(previewState));
        return previewState;
      });
      localStorage.setItem("activePreviewState", JSON.stringify(id));
    }
  };

  return (
    <>
      <Header updateTheme={fixTheme} toggleView={toggleView} />
      <Main theme={theme} preViewing={preViewing} toggleView={toggleView} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
