import React, { useRef } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Load required language grammars
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";

const CodeInput = ({ code, setCode, language }) => {
  const textareaRef = useRef(null);

  const handleContainerClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const lineCount = code.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div
      onClick={handleContainerClick}
      className="w-full max-w-5xl bg-gray-900 text-sm font-mono rounded-md shadow-md overflow-hidden flex border border-gray-700"
    >
      {/* Line Numbers */}
      <div className="bg-gray-800 text-gray-500 px-4 py-4 text-right select-none">
        {lineNumbers.map((line) => (
          <div key={line} className="h-5 leading-5">
            {line}
          </div>
        ))}
      </div>

      {/* Code Editor */}
      <div className="w-full px-4 py-4 overflow-auto">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) =>
            Prism.highlight(
              code,
              Prism.languages[language] || Prism.languages.javascript,
              language
            )
          }
          padding={0}
          textarearef={textareaRef} // ✅ this makes focus() work
          className="focus:outline-none text-white min-h-[200px] whitespace-pre-wrap break-words"
          style={{
            fontFamily: "monospace",
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
};

export default CodeInput;
