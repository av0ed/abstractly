import Link from "next/link";
import { RemixiconComponentType } from "@remixicon/react";

type IconAlign = "left" | "right" | "surround";

interface ButtonProps {
  Icon?: RemixiconComponentType;
  onClick?: (
    event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  ariaLabel?: string;
  classes: string;
  href?: string;
  iconAlign?: IconAlign;
  isDisabled?: boolean;
  text: string;
  type?: "submit" | "button" | "reset";
}

export default function Button({
  Icon,
  onClick,
  classes,
  href,
  iconAlign = "right",
  isDisabled,
  text,
  type,
}: ButtonProps) {
  const renderLeftIcon = () => {
    if (Icon && (iconAlign === "left" || iconAlign === "surround")) {
      return <Icon />;
    }
  };

  const renderRightIcon = () => {
    if (Icon && (iconAlign === "right" || iconAlign === "surround")) {
      return <Icon />;
    }
  };

  const renderContent = () => {
    return (
      <div className="content-spacer">
        {renderLeftIcon()}
        <span>{text}</span>
        {renderRightIcon()}
      </div>
    );
  };

  return href ? (
    <Link
      className={`${classes} ${isDisabled ? "btn--disabled" : ""}`}
      href={href}
      onClick={onClick}
      role="button"
    >
      {renderContent()}
    </Link>
  ) : (
    <button
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      role="button"
      type={type}
    >
      {renderContent()}
    </button>
  );
}
