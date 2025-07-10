import { createContext, useEffect, useState } from "react";

export const CodeContext = createContext(null);

const CodeProvider = ({ children }) => {
  const [code, setCode] = useState(() => {
    const storedCode = localStorage.getItem("userCode");
    return storedCode ? JSON.parse(storedCode) : "";
  });

  useEffect(() => {
    localStorage.setItem("userCode", JSON.stringify(code));
  }, [code]);

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;
