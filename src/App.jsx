import React from "react";
import CodeSense from "./pages/CodeSense";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRouter from "./router/MainRouter";
import CodeProvider from "./context/codeContext";
import PreviousCodes from "./components/PreviousCodes";

const App = () => {
  return (
    <BrowserRouter>
      <CodeProvider>
        <div className="min-h-screen bg-gray-950 text-white">
          <PreviousCodes />
          <Navbar />
          <MainRouter />
        </div>
      </CodeProvider>
    </BrowserRouter>
  );
};

export default App;
