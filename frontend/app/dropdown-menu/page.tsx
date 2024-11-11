"use client";
import DropdownMenu from "../_components/dropdown-menu";
import { RiGlobeLine, RiMistFill, RiLock2Line } from "@remixicon/react";

export default function DropdownMenuPage() {
  const menuTitle = "Privacy options";
  const menuItems = [
    { id: 0, Icon: RiGlobeLine, text: "Public" },
    { id: 1, Icon: RiMistFill, text: "Unlisted" },
    { id: 2, Icon: RiLock2Line, text: "Private" },
  ];

  return <DropdownMenu menuTitle={menuTitle} menuItems={menuItems} />;
}
