"use client";
import { generateIds } from "../_utilities/helpers";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TabMenuProps = {
  tabs: string[];
  tabStyle: "underline" | "button";
  panels: string[];
};

const tabClasses = {
  base: "relative top-[2px] flex justify-center items-center font-medium focus:outline-none focus:ring focus:rounded",
  button: {
    base: "border py-2.5 px-3.5 rounded",
    idle: "border-transparent text-neutral-600 hover:bg-neutral-50",
    selected: "shadow border-neutral-200",
  },
  underline: {
    base: "pb-3 px-2 border-b-2",
    idle: "text-neutral-600 border-b-gray-300 hover:text-indigo-600 hover:border-b-indigo-600 focus:text-neutral-900 focus:border-b-neutral-900",
    selected:
      "border-b-indigo-600 text-indigo-600 hover:text-indigo-800 hover:border-b-indigo-800 focus:text-indigo-800 focus:border-b-indigo-800",
  },
};

export default function TabMenu({
  tabs,
  panels,
  tabStyle = "button",
}: TabMenuProps) {
  const tabIds = generateIds(tabs, "tab");
  const panelIds = generateIds(tabs, "panel");
  const [selected, setSelected] = useState(tabIds[0]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    const key = e.key;
    if (key === "ArrowLeft") {
      idx === 0
        ? setSelected(tabIds[tabs.length - 1])
        : setSelected(tabIds[idx - 1]);
    }
    if (key === "ArrowRight") {
      idx === tabs.length - 1
        ? setSelected(tabIds[0])
        : setSelected(tabIds[idx + 1]);
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: string,
  ) => {
    e.preventDefault();
    setSelected(item);
  };

  return (
    <div role="tablist" aria-label="tab menu" className="flex flex-col gap-y-6">
      <div
        className={` flex w-max ${tabStyle === "underline" ? "gap-x-6 border-b-2 border-b-gray-300" : "gap-x-4"}`}
      >
        {tabs.map((tab, idx) => (
          <button
            aria-controls={panelIds[idx]}
            aria-selected={selected === tabIds[idx]}
            className={`
              ${tabClasses.base} 
              ${tabClasses[tabStyle].base} 
              ${selected === tabIds[idx] ? tabClasses[tabStyle].selected : tabClasses[tabStyle].idle}
            `}
            onClick={(e) => handleClick(e, tabIds[idx])}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            id={tabIds[idx]}
            key={uuidv4()}
            role="tab"
            tabIndex={selected === tabIds[idx] ? 0 : -1}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      {panels.map(
        (panel, idx) =>
          selected === tabIds[idx] && (
            <div
              aria-labelledby={tabIds[idx]}
              id={panelIds[idx]}
              key={uuidv4()}
              role="tabpanel"
            >
              <p className="font-medium">{panel}</p>
            </div>
          ),
      )}
    </div>
  );
}
