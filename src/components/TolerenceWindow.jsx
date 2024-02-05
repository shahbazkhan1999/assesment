import "../App.scss";

export default function TolerenceWindow() {
  return (
    <div className="form-group toggle-container">
      <label>Tolerence Window:</label>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="toggle-slider"></span>
        </label>
        <label className="toggle-label">
          Toggle On | <i className="far fa-check-circle"></i> Select Tolerence
          Level
        </label>
      </div>
    </div>
  );
}
