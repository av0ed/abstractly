"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TabMenuProps = {
  tabs: string[];
  panels: string[];
};

export default function TabMenu({ tabs, panels }: TabMenuProps) {
  const generateIds = (arr: string[]) => {
    return arr.map((el, id) => {
      return el.toLowerCase().concat("_" + id);
    });
  };
  const tabIds = generateIds(tabs);
  const [selected, setSelected] = useState(tabIds[0]);

  //useEffect(() => {
  //  setSelected(tabIds[0]);
  //}, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setSelected(id);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex gap-x-6 border-b border-b-gray-300">
        {tabs.map((tab, n) => (
          <button
            aria-controls=""
            aria-selected={selected === tabIds[n]}
            className={`
              relative top-[1px] flex justify-center items-center font-medium pb-3 px-2 border-b hover:text-indigo-600 hover:border-b-indigo-600
              ${
                selected === tabIds[n]
                  ? "border-b-indigo-600 text-indigo-600"
                  : "text-neutral-600 border-b-gray-300"
              }`}
            onClick={(e) => handleClick(e, tabIds[n])}
            id={tabIds[n]}
            key={uuidv4()}
            role="tab"
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      {panels.map((panel) => (
        <div aria-labelledby="" id={panel} key={uuidv4()} role="tabpanel">
          <p className="font-medium">{panel}</p>
        </div>
      ))}
    </div>
  );
}
