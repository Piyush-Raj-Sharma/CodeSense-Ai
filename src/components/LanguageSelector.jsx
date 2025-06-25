import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const languages = [
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "cpp", name: "C++" },
  { id: "c", name: "C" },
  { id: "typescript", name: "TypeScript" },
];

const LanguageSelector = ({ language, setLanguage }) => {
  const selected = languages.find((l) => l.id === language) || languages[0];

  return (
    <div className="w-full max-w-xs mb-6">
      <Listbox value={selected} onChange={(val) => setLanguage(val.id)}>
        <Listbox.Label className="block mb-2 text-sm font-semibold text-gray-300">
          Select Language
        </Listbox.Label>

        <div className="relative">
          <Listbox.Button
            className="
              relative w-full cursor-pointer rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black
              py-3 px-4 pr-10 text-left shadow-md border border-gray-700 hover:border-blue-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out
            "
          >
            <span className="block truncate text-white">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Listbox.Options
            className="
              absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base
              shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
            "
          >
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.id}
                value={lang}
                className={({ active }) =>
                  `${
                    active ? "bg-blue-600 text-white" : "text-gray-300"
                  } relative cursor-pointer select-none py-2 pl-10 pr-4`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {lang.name}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-blue-600"
                        }`}
                      >
                        <Check className="h-5 w-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default LanguageSelector;
