import React, { useState } from "react";

const CodeInput = ({ code, setCode }) => {
  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="bg-gray-800 text-white w-full max-w-3xl h-90 p-4 rounded-md resize-none shadow-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        placeholder="Paste your code here..."
      />
    </>
  );
};

export default CodeInput;
