import React, { useContext, useEffect, useState } from "react";
import { Menu, X, Trash2 } from "lucide-react";
import { CodeContext } from "../context/codeContext";

const PreviousCodes = () => {
  const { setCode, code } = useContext(CodeContext);
  const [savedCodes, setSavedCodes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState(null); // track current

  useEffect(() => {
    const saved = localStorage.getItem("savedSessions");
    if (saved) {
      setSavedCodes(JSON.parse(saved));
    }
  }, []);

  const newSessionHandler = () => {
    setCode("");
    setActiveSessionId(null); // clear session reference
  };

  const saveCodeHandler = () => {
    if (!code.trim()) return;

    if (activeSessionId !== null) {
      //Don't save again if it's already a loaded session
      return;
    }

    const newSession = {
      id: Date.now(),
      content: code,
    };

    const updatedSessions = [newSession, ...savedCodes];
    setSavedCodes(updatedSessions);
    localStorage.setItem("savedSessions", JSON.stringify(updatedSessions));
    setActiveSessionId(newSession.id); // Optional: mark as saved
  };

  const loadSession = (sessionCode, sessionId) => {
    setCode(sessionCode);
    setActiveSessionId(sessionId); //track loaded session
  };

  const deleteSession = (id) => {
    const updatedSessions = savedCodes.filter((entry) => entry.id !== id);
    setSavedCodes(updatedSessions);
    localStorage.setItem("savedSessions", JSON.stringify(updatedSessions));

    if (id === activeSessionId) {
      newSessionHandler(); // reset editor if current session is deleted
    }
  };

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
        className={`fixed top-16 left-0 z-40 h-[94%] w-64 bg-gray-900 border-r border-gray-700 p-4 flex-col overflow-y-auto custom-scrollbar transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex`}
      >
        <h2 className="text-lg font-semibold text-white mb-4">
          📁 Code Sessions
        </h2>

        <button
          onClick={newSessionHandler}
          className="mb-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-md transition"
        >
          ➕ New Code
        </button>

        {savedCodes.length === 0 ? (
          <p className="text-gray-400 text-xs italic">No saved code found.</p>
        ) : (
          <ul className="space-y-4">
            {savedCodes.map((entry, index) => (
              <li
                key={entry.id}
                className="relative bg-gray-800 text-gray-300 text-xs p-3 rounded-md border border-gray-600 max-h-32 overflow-auto group"
              >
                <span className="block text-blue-400 font-medium mb-1">
                  Entry #{index + 1}
                </span>

                <code
                  onClick={() => loadSession(entry.content)}
                  className="block whitespace-pre-wrap break-words cursor-pointer hover:text-white transition"
                >
                  {entry.content.slice(0, 20)}...
                </code>

                {/* Delete Icon */}
                <button
                  onClick={() => deleteSession(entry.id)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  );
};

export default PreviousCodes;
