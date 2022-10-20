// importing React from react
import React from "react";
// lets import chart from chart folder
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  // here we need datapoint which will go to chart component viva props.
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // ^ here all year's are label and also the key which is unique alright.
  /* Let get the expenses from the Expenses.jsx viva props. */

  for (const expItem of props.expItems) {
    // grab expenses month from expenses object's date key.
    // console.log(expItem.date.getMonth())
    const expMonth = expItem.date.getMonth();

    // this month will get the index of the month.
    // let say the month is january then "getMonth()" will return => 0
    // if feb then => 1.

    /* 
      - And we writen our chartDatapoint in the correct to match the index that we will get from getMonth() 
      - let add the amount from the expense to value then this way the month we have selected will updates its value and that value will be our expense amount
    */

    // chartDataPoint[expMonth].value = chartDataPoint[expMonth].value + expItem.amount;
    // OR easy way

    (chartDataPoint[expMonth].value += Number(expItem.amount));
    // console.log(typeof(val));
  }

  return (
    // here we will return our Chart component
    // Now we will send our datapoint attribute to chart
    <Chart dataPoints={chartDataPoint} />
  );
};

export default ExpensesChart;
