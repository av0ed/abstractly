import { RiCheckFill } from "@remixicon/react";

interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <li className="flex flex-row gap-x-3">
      <RiCheckFill className="self-center shrink-0 border border-indigo-100 w-6 h-6 bg-indigo-50 rounded-full fill-indigo-500" />
      <span className="text-lg text-neutral-600 self-stretch">{text}</span>
    </li>
  );
}
