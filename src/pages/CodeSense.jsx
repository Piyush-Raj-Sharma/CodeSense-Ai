import { useContext, useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import CodeInput from "../components/CodeInput";
import ExplainDebugButtons from "../components/ExplainDebugButtons";
import { CodeContext } from "../context/codeContext";
import axiosInstance from "../api/axiosConfig";
import CodeOutput from "../components/CodeOutput";

const CodeSense = () => {
  const { code, setCode } = useContext(CodeContext);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("explain");
  const [showOutput, setShowOutput] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setOutput("");
    setShowOutput(true);

    try {
      const response = await axiosInstance.post("/analyze", {
        code,
        language,
        mode,
      });

      setOutput(response.data.result);
    } catch (err) {
      setOutput("⚠️ Error analyzing code: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleAnalyze();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mt-10 mb-10 text-white tracking-tight">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          CodeSense AI
        </span>{" "}
        – Smart Code Analyzer
      </h1>

      {/* Form Card */}
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg space-y-6">
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-end">
            {/* Language Selector */}
            <LanguageSelector language={language} setLanguage={setLanguage} />

            {/* Save Button */}
            <button
              onClick={() =>
                localStorage.setItem("output", JSON.stringify(code))
              }
              className="text-sm px-5 py-2 bg-green-600 hover:bg-green-700 rounded-md transition font-medium text-white w-full sm:w-auto"
            >
              💾 Save Code
            </button>
          </div>

          <ExplainDebugButtons setMode={setMode} />
          <CodeInput code={code} setCode={setCode} language={language} />
        </form>
      </div>

      {/* Output Modal */}
      {showOutput && (
        <CodeOutput
          language={language}
          output={output}
          loading={loading}
          onClose={() => setShowOutput(false)}
        />
      )}
    </div>
  );
};

export default CodeSense;
