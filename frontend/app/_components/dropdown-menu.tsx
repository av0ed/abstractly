import { useEffect, useRef, useState } from "react";
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
  const [focused, setFocused] = useState(-1);
  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState(false);
  //const dropdownRef = useRef<HTMLUListElement | null>(null);
  //const firstMenuItemRef = useRef<HTMLLIElement | null>(null);

  const iconClasses = "text-neutral-900 h-5 w-5";

  //useEffect(() => {}, [open]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, id: number) => {
    const SPACE = " ";

    switch (e.key) {
      case "Enter":
      case SPACE:
        setSelected(id);
        break;
      case "Escape":
        setOpen(false);
        break;
      case "ArrowDown":
        // TODO: set focus
        e.preventDefault();
        break;
      case "ArrowUp":
        // TODO: set focus
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleMenuItemClick = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="flex flex-col gap-y-1 w-full max-w-screen-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-start items-center self-stretch gap-x-1 px-3 py-2 border border-neutral-200 rounded shadow bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
        aria-controls="dropdown-menu"
        aria-expanded={open}
        aria-haspopup="menu"
        id="dropdown-button"
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
          aria-labelledby="dropdown-button"
          className="flex flex-col p-2 gap-y-2 rounded-lg shadow-lg bg-white"
          role="menu"
        >
          {menuItems.map(({ id, Icon, text }) => (
            <li
              key={id}
              className="flex justify-start items-center self-stretch p-2 gap-x-3 rounded-lg hover:bg-neutral-50 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-200"
              onClick={() => {
                handleMenuItemClick(id);
                setOpen(false);
              }}
              onKeyDown={(e) => handleKeyDown(e, id)}
              role="menuitem"
              tabIndex={focused === id ? 0 : -1}
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
