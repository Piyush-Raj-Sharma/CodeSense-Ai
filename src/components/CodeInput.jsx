import React, { useRef } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const CodeInput = ({ code, setCode, language }) => {
  const editorRef = useRef(null);

  const lineCount = code.split("\n").length;
  const lineNumbers = [];
  for (let i = 1; i <= lineCount; i++) {
    lineNumbers.push(i);
  }

  const handleContainerClick = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      className="w-full max-w-4xl relative bg-gray-900 text-sm font-mono rounded-md shadow-md overflow-hidden flex border border-gray-700 cursor-text max-h-[400px] overflow-y-auto"
      role="textbox"
      aria-multiline="true"
      aria-label="Code editor"
    >
      {/* Line Numbers */}
      <div className="bg-gray-800 text-gray-500 px-4 py-4 text-right select-none">
        {lineNumbers.map((line) => (
          <div key={line} className="h-6 leading-[24px]">
            {line}
          </div>
        ))}
      </div>

      {/* Placeholder */}
      {code.trim() === "" && (
        <div className="absolute top-4 left-[72px] pointer-events-none select-none text-gray-500 whitespace-pre-wrap font-mono">
          {/* Adjust left to align after line numbers */}
          {"// Paste your code here...\n// or start typing..."}
        </div>
      )}

      {/* Code Editor */}
      <div className="w-full px-4 py-4">
        <Editor
          ref={editorRef}
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
          className="focus:outline-none text-white min-h-[200px] whitespace-pre-wrap break-words leading-[24px]"
          style={{
            fontFamily: "monospace",
          }}
        />
      </div>
    </div>
  );
};

export default CodeInput;
