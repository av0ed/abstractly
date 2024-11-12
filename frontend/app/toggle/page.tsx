import Toggle from "../_components/toggle";

export default function TogglePage() {
  return (
    <div className="grid items-center justify-items-center gap-6 grid-cols-2 grid-rows-2">
      <Toggle name="toggle" size="sm" />
      <Toggle name="toggle" size="sm" disabled={true} />
      <Toggle name="toggle" />
      <Toggle name="toggle" disabled={true} />
    </div>
  );
}
