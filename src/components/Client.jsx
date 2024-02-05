import { useState } from "react";
import "../App.scss";

export default function Client() {
  let [clients, setClients] = useState(0);
  return (
    <>
      <div className="form-group radioButtons_main">
        <label>Client:</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              checked={clients === 1 ? true : false}
              onChange={() => {
                setClients(1);
              }}
            />
            <label className="form-check-label">Single</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              checked={clients === 2 ? true : false}
              onChange={() => {
                setClients(2);
              }}
            />
            <label className="form-check-label">Multiple</label>
          </div>
        </div>
      </div>
      <div className="form-group portion2_select">
        <label>Testing Center 1</label>
        <div>
          <select>
            <option>Select Client:</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <span>
            <i className="far fa-check-circle"></i>
          </span>
        </div>
      </div>
      <div className="form-group portion2_select">
        <label>Testing Center 2</label>
        <select>
          <option>Select Client:</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <span>
          <i className="far fa-check-circle"></i>
        </span>
      </div>
      <div className="form-group portion2_select">
        <label>Testing Center 3</label>
        <select>
          <option>Select Client:</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <span>
          <i className="far fa-check-circle"></i>
        </span>
      </div>
      <div className="form-group portion2_select">
        <label>Testing Center 4</label>
        <select>
          <option value="option1">Select Client:</option>
          <option value="option2">Option 1</option>
          <option value="option3">Option 2</option>
        </select>
        <span>
          <i className="far fa-check-circle"></i>
        </span>
      </div>
      <div className="form-group portion2_select">
        <label>Testing Center 5</label>
        <select>
          <option value="option1">Select Client:</option>
          <option value="option2">Option 1</option>
          <option value="option3">Option 2</option>
        </select>
        <span>
          <i className="far fa-check-circle"></i>
        </span>
      </div>
    </>
  );
}
