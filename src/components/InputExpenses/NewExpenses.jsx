import React from "react";
import FormExpenses from "./FormExpenses";
// import Card from "../UI/Card"
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const addExpensesHandler = (expensesData) => {
    const newExpensesData = {
      ...expensesData,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    props.onNewExpenses(newExpensesData);
  };

  return (
    <div className="new-expenses">
      <FormExpenses onFormExpenses={addExpensesHandler}></FormExpenses>
    </div>
  );
};

export default NewExpenses;
