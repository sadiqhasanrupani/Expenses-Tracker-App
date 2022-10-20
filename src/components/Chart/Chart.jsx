// React component
import React from "react";
//Charbar Component
import ChartBar from "./ChartBar";
//Css file
import "./Chart.css";

// creating a Chart Component func
const Chart = (props) => {
  // {
  //   /*
  //     - Here to get the max value from the datapoint we need to map the all value in the array format the we will use Math.max() to get the highest value but we cannot max because we maped in the array to spread out the array value we can use spread operator in the max function.
  //   */
  // }

  const dataPointArray = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const maximumValue = Math.max(...dataPointArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            val={dataPoint.value}
            maxVal={maximumValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
