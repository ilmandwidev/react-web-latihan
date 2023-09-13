import React from "react";
import ReactDOM from "react-dom/client";
import "./src/index2.css";

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import MainContent from "./src/components/MainContent";
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
