import Prism from "prismjs";
import { Bot, X } from "lucide-react";
import "prismjs/themes/prism-tomorrow.css";

const CodeOutput = ({ language, output, loading, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-4xl bg-[#1e1e2f] border border-gray-700 rounded-xl shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-400" />
            <h2 className="text-sm text-gray-300 font-medium tracking-wide">
              AI Response
            </h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="hover:scale-110 transition-transform"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-red-500 transition" />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="px-5 py-5 text-sm bg-[#12121c] text-white max-h-[70vh] overflow-y-auto custom-scrollbar relative">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="mt-4 text-gray-400 text-sm">Analyzing your code...</span>
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
            <p className="text-gray-500 italic">Output will appear here after you click Analyze.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeOutput;
