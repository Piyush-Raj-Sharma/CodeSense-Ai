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
    <div className="w-full max-w-sm">
      
      <Listbox value={selected} onChange={(val) => setLanguage(val.id)}>
        <Listbox.Label className="block mb-2 text-sm font-semibold text-white tracking-wide">
          Programming Language
        </Listbox.Label>

        <div className="relative">
          {/* Button */}
          <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-white/5 backdrop-blur-md border border-white/10 py-3 px-4 pr-10 text-left text-white shadow-inner transition hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="block truncate font-medium">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          {/* Options */}
          <Listbox.Options className="absolute z-20 mt-2 w-full rounded-lg bg-[#1a1a2f] shadow-xl ring-1 ring-white/10 backdrop-blur-md overflow-auto max-h-60 focus:outline-none text-sm">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.id}
                value={lang}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 cursor-pointer transition-all duration-150 ease-in-out
                  ${
                    active
                      ? "bg-blue-600/80 text-white"
                      : "text-gray-300 hover:bg-white/5"
                  }`
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
                    {selected && (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-blue-500"
                        }`}
                      >
                        <Check className="h-5 w-5" />
                      </span>
                    )}
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
