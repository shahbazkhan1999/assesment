import "../App.scss";
import { useState } from "react";
import BreakContainer from "./UIComponents/BreakContainer";

export default function SplitSchedule() {
  let [radioChecked, setRadioChecked] = useState(0);

  return (
    <>
      <div className="form-group radioButtons_div">
        <label>Split schedule using social distancing?</label>
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
              checked={radioChecked === 1 ? true : false}
              onChange={() => {
                setRadioChecked(1);
              }}
            />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              checked={radioChecked === 2 ? true : false}
              onChange={() => {
                setRadioChecked(2);
              }}
            />
            <label className="form-check-label">No</label>
          </div>
        </div>
      </div>
      <BreakContainer />
    </>
  );
}
