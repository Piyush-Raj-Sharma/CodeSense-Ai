import { createContext, useEffect, useState } from "react";

export const CodeContext = createContext(null);

const CodeProvider = ({ children }) => {
  const [code, setCode] = useState(() => {
    const storedCode = localStorage.getItem("userCode");
    return storedCode ? JSON.parse(storedCode) : "";
  });

  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem("userLang");
    return storedLang ? JSON.parse(storedLang) : "javascript";
  });

  const [output, setOutput] = useState("");

  useEffect(() => {
    localStorage.setItem("userCode", JSON.stringify(code));
  }, [code]);

  useEffect(() => {
    localStorage.setItem("userLang", JSON.stringify(language));
  }, [language]);

  return (
    <CodeContext.Provider
      value={{
        code,
        setCode,
        language,
        setLanguage,
        output,
        setOutput, // ✅ Include this
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;
