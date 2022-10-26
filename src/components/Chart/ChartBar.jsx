import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxVal > 0) {
    barFillHeight = Math.round((props.val / props.maxVal) * 100) + "%";
  }

  return (
    <>
      <div className={'chart-bar-div'}>
        <div className="chart-bar">
          <div className="chart-bar__inner">
            {/* Dynamic Styling in React */}
            <div
              className="chart-bar__fill"
              style={{ height: barFillHeight }}
            ></div>
          </div>
          <div className="chart-bar__label">{props.label}</div>
        </div>
      </div>
    </>
  );
};

export default ChartBar;
