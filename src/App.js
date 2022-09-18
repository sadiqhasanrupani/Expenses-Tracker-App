import React from "react";
import "./App.css";
import NewExpenses from "./components/InputExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      item: "Toilet paper",
      amount: "\u20B9100",
      date: new Date(),
    },
    {
      id: "e2",
      item: "Car Insurance",
      amount: "\u20B910,0000",
      date: new Date(),
    },
    {
      id: "e3",
      item: "Laptop",
      amount: "\u20B990,000",
      date: new Date(),
    },
    {
      id: "e4",
      item: "Tablet",
      amount: "\u20B940,000",
      date: new Date(),
    },
  ];

  return (
    <div>
      <div>
        <NewExpenses></NewExpenses>
      </div>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
