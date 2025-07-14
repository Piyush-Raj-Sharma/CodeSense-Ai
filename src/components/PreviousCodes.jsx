import React, { useContext, useEffect, useState } from "react";
import { Menu, X, Trash2 } from "lucide-react";
import { CodeContext } from "../context/codeContext";

const PreviousCodes = () => {
  const { setCode, code } = useContext(CodeContext);
  const [savedCodes, setSavedCodes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("savedSessions");
    if (saved) {
      setSavedCodes(JSON.parse(saved));
    }
  }, []);

  const newSessionHandler = () => {
    // If current session is already saved (has ID)
    if (activeSessionId !== null) {
      const updated = savedCodes.map((entry) =>
        entry.id === activeSessionId ? { ...entry, content: code } : entry
      );
      setSavedCodes(updated);
      localStorage.setItem("savedSessions", JSON.stringify(updated));
    }
    // If it’s a new unsaved session
    else if (code.trim()) {
      const newSession = {
        id: Date.now(),
        content: code,
      };
      const updated = [newSession, ...savedCodes];
      setSavedCodes(updated);
      localStorage.setItem("savedSessions", JSON.stringify(updated));
    }

    // Clear the editor and session reference
    setCode("");
    setActiveSessionId(null);
  };

  const loadSession = (sessionCode, sessionId) => {
    setCode(sessionCode);
    setActiveSessionId(sessionId);
  };

  const deleteSession = (id) => {
    const updated = savedCodes.filter((entry) => entry.id !== id);
    setSavedCodes(updated);
    localStorage.setItem("savedSessions", JSON.stringify(updated));

    if (id === activeSessionId) newSessionHandler();
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md text-white shadow-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-[#101018]/90 border-r border-white/10 backdrop-blur-md p-4 transition-transform duration-300 overflow-y-auto custom-scrollbar transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex`}
      >
        <div className="w-full">
          <h2 className="text-lg font-semibold text-white mb-4">
            📁 Code Sessions
          </h2>

          <button
            onClick={newSessionHandler}
            className="mb-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition"
          >
            ➕ New Code
          </button>

          {savedCodes.length === 0 ? (
            <p className="text-gray-400 text-xs italic">
              No saved sessions yet.
            </p>
          ) : (
            <ul className="space-y-4">
              {savedCodes.map((entry, index) => (
                <li
                  key={entry.id}
                  className={`relative p-3 rounded-lg border text-xs transition group ${
                    entry.id === activeSessionId
                      ? "bg-blue-950/50 border-blue-600 text-white"
                      : "bg-white/5 border-white/10 text-gray-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <code
                      onClick={() => loadSession(entry.content, entry.id)}
                      className="block whitespace-pre-wrap break-words cursor-pointer hover:text-white transition mt-1"
                    >
                      {entry.content.trim().slice(0, 20)}
                    </code>
                    <button
                      onClick={() => deleteSession(entry.id)}
                      className="text-gray-500 hover:text-red-500 transition"
                      title="Delete session"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};

export default PreviousCodes;
