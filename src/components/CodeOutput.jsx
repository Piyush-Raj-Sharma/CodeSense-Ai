import React from "react";
import Prism from "prismjs";
import { Bot, X } from "lucide-react";
import "prismjs/themes/prism-tomorrow.css";

const CodeOutput = ({ language, output, loading, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-white/5 shadow-2xl border border-white/10 backdrop-blur-lg relative overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Bot className="w-5 h-5 text-blue-400" />
            <h2 className="text-sm text-white font-medium tracking-wide">
              AI Code Analysis
            </h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-500 transition duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="bg-[#0f111a] text-white max-h-[70vh] overflow-y-auto custom-scrollbar px-6 py-5 text-sm leading-relaxed font-mono">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-10">
              <div className="animate-spin h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              <p className="mt-4 text-gray-400">Analyzing your code...</p>
            </div>
          ) : output ? (
            <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed">
              <code
                className={`language-${language}`}
                style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    output,
                    Prism.languages[language] || Prism.languages.javascript,
                    language
                  ),
                }}
              ></code>
            </pre>
          ) : (
            <p className="text-gray-400 italic">
              Output will appear here after you click Analyze.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeOutput;
