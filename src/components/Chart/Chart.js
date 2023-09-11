import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const valueArrays = props.dataPoints.map(dataPoint => dataPoint.value)
    const maximunTotal = Math.max(...valueArrays)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
            key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximunTotal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
