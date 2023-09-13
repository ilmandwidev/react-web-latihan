import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
