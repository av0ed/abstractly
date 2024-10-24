import Button from "./button";
import { makeLink } from "../_utilities/helpers";

export function ComponentLinks() {
  const pages = [
    "Badge",
    "Button",
    "Blog Card",
    "Hero Section Simple",
    "Icon Button",
    "Profile Card",
    "Team",
    "Testimonial Card",
    "Text Area",
    "Text Input",
  ];
  return (
    <ul className="flex flex-row p-4 justify-center gap-x-8 flex-nowrap">
      {pages.map((page) => (
        <li key={page}>
          <Button
            classes="link--lg link--primary"
            href={makeLink(page)}
            text={page}
          />
        </li>
      ))}
    </ul>
  );
}
