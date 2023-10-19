import "../css/checkbox.css";

export default function Checkbox() {
  return (
    <label className="pyro-checkbox">
      <input type="checkbox" />
      <span className="pyro-checkbox__checkmark" />
    </label>
  );
}
