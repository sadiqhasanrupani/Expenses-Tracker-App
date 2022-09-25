import React, { useState }from "react";
import "./App.css";
import NewExpenses from "./components/InputExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: "\u20B9100",
    date: new Date(2020, 20, 1),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: "\u20B910,0000",
    date: new Date(),
  },
  {
    id: "e3",
    title: "Laptop",
    amount: "\u20B990,000",
    date: new Date(),
  },
  {
    id: "e4",
    title: "Tablet",
    amount: "\u20B940,000",
    date: new Date(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addNewExpensesData = (expense) => {
    setExpenses((prevExpenses) => {
      return ([expense, ...prevExpenses]);
    })
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
