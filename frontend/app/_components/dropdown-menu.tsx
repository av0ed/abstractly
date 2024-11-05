import { useState } from "react";
import { RemixiconComponentType } from "@remixicon/react";
import {
  RiCheckboxCircleFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "@remixicon/react";

type MenuItem = {
  id: number;
  Icon?: RemixiconComponentType;
  text: string;
};

type DropdownMenuProps = {
  menuItems: MenuItem[];
  menuTitle: string;
};

export default function DropdownMenu({
  menuTitle,
  menuItems,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const iconClasses = "text-neutral-900 h-5 w-5";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, id: number) => {
    const SPACE = " ";
    if (e.key === "Enter" || e.key === SPACE) {
      setSelected(id);
    }
  };

  const handleMenuItemClick = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="flex flex-col gap-y-1 w-full max-w-screen-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-start items-center self-stretch gap-x-1 px-3
        py-2 border border-neutral-200 rounded shadow bg-white
        focus:outline-none focus:ring-2 focus:ring-indigo-200"
        aria-expanded={open}
        aria-controls="dropdown-menu"
      >
        <span className="text-sm font-medium">{menuTitle}</span>
        {open ? (
          <RiArrowUpSLine
            className={`${iconClasses} p-0.375 ml-auto`}
            aria-hidden={!open}
          />
        ) : (
          <RiArrowDownSLine
            className={`${iconClasses} p-0.375 ml-auto`}
            aria-hidden={open}
          />
        )}
      </button>
      {open && (
        <ul
          className="flex flex-col p-2 gap-y-2 rounded-lg shadow-lg bg-white"
          role="menu"
        >
          {menuItems.map(({ id, Icon, text }) => (
            <li
              key={id}
              className="flex justify-start items-center self-stretch p-2
              gap-x-3 rounded-lg hover:bg-neutral-50 hover:cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-indigo-200"
              onClick={() => handleMenuItemClick(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
              role="menuitem"
              tabIndex={0}
              value={text.toLowerCase()}
            >
              {Icon && <Icon className={iconClasses} />}
              <span className="flex-grow text-sm font-medium">{text}</span>
              {selected === id && (
                <RiCheckboxCircleFill className={`${iconClasses} ml-auto`} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
