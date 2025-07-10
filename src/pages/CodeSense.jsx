import { useContext, useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import CodeInput from "../components/CodeInput";
import ExplainDebugButtons from "../components/ExplainDebugButtons";
import { CodeContext } from "../context/codeContext";

const CodeSense = () => {
  const { code, setCode } = useContext(CodeContext);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("explain");

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <form className="w-full max-w-3xl mx-auto flex flex-col" onSubmit={submitHandler}>
        <LanguageSelector language = {language} setLanguage = {setLanguage}/>
        <CodeInput code={code} setCode={setCode} />
        <ExplainDebugButtons setMode={setMode} />
      </form>
    </div>
  );
};

export default CodeSense;
