interface BadgeProps {
  ariaLabel?: string;
  classes?: string;
  role?: string;
  text?: string;
}

export default function Badge({
  ariaLabel,
  classes = "badge--md badge--neutral",
  role,
  text = "Label",
}: BadgeProps) {
  return (
    <span className={classes} role={role} aria-label={ariaLabel}>
      {text}
    </span>
  );
}
