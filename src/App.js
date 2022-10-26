import React, { useState } from "react";
import "./App.css";
import NewExpenses from "./components/InputExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";
// const Dummy_Expenses = [
//   {
//     id: "e1",
//     title: "Toilet paper",
//     amount: 10000,
//     date: new Date("2/1/2020"),
//   },
//   {
//     id: "e2",
//     title: "Car Insurance",
//     amount: 100000,
//     date: new Date("4/3/2020"),
//   },
//   {
//     id: "e3",
//     title: "Laptop",
//     amount: 90000,
//     date: new Date("5/4/2020"),
//   },
//   {
//     id: "e4",
//     title: "Tablet",
//     amount: 40000,
//     date: new Date("6/4/2021"),
//   },
// ];

function App() {
  const [expenses, setExpenses] = useState([]);

  const addNewExpensesData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div>
        <NewExpenses onNewExpenses={addNewExpensesData}></NewExpenses>
      </div>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
