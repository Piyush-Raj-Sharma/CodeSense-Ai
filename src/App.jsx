import React, { useState } from "react";
import CodeInput from "./components/CodeInput";
import ExplainDebugButtons from "./components/ExplainDebugButtons";

const App = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("explain");

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <h1 className="text-5xl font-bold text-center mb-6">CodeSense AI</h1>

      <form className="w-full max-w-3xl mx-auto flex flex-col" onSubmit={submitHandler}>
        <CodeInput code={code} setCode={setCode} />
        <ExplainDebugButtons setMode={setMode} />
      </form>
    </div>
  );
};

export default App;
