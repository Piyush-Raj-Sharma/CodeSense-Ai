import React from 'react'

const ExplainDebugButtons = () => {
    return (
    <div className="flex justify-start mt-4 gap-2">
      <button
        type="submit"
        onClick={() => setMode("explain")}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Explain
      </button>
      <button
        type="submit"
        onClick={() => setMode("debug")}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
      >
        Debug
      </button>
    </div>
  );
};


export default ExplainDebugButtons