import React from "react";
import CodeSense from "./pages/CodeSense";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRouter from "./router/MainRouter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <MainRouter/>
      </div>
    </BrowserRouter>
  );
};

export default App;
