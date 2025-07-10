import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const PreviousCodes = () => {
  const [savedCodes, setSavedCodes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedCode = localStorage.getItem("output");
    if (storedCode) {
      try {
        const parsedCode = JSON.parse(storedCode);
        setSavedCodes([parsedCode]);
      } catch (error) {
        console.error("Error parsing saved code:", error);
      }
    }
  }, []);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md text-white shadow-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-16   5 left-0 z-40 h-[94%] w-64 bg-gray-900 border-r border-gray-700 p-4 flex-col overflow-y-auto custom-scrollbar transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex`}
      >
        <h2 className="text-lg font-semibold text-white mb-4">
          📁 Saved Codes
        </h2>

        {savedCodes.length === 0 ? (
          <p className="text-gray-400 text-xs italic">No saved code found.</p>
        ) : (
          <ul className="space-y-4">
            {savedCodes.map((code, index) => (
              <li
                key={index}
                className="bg-gray-800 text-gray-300 text-xs p-3 rounded-md border border-gray-600 whitespace-pre-wrap break-words max-h-40 overflow-auto"
              >
                <span className="block text-blue-400">
                  Entry #{index + 1}
                </span>
                {/* <code>{code}</code> */}
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  );
};

export default PreviousCodes;
