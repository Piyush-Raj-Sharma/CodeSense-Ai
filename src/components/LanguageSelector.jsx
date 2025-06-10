const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor="language" className="block mb-1 text-sm text-gray-300">
        Select Language
      </label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full bg-gray-600 text-white p-2 rounded shadow focus:outline-none"
      >
        <option value="Javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="c++">C++</option>
        <option value="c">C</option>
        <option value="typescript">TypeScript</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
