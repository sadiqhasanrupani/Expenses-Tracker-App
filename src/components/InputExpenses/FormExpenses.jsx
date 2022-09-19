import React, { useState } from "react";
import "./FormExpenses.css";

const FormExpenses = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (env) => {
    setEnteredTitle(env.target.value);
  };
  const amountChangeHandler = (env) => {
    setEnteredAmount(env.target.value);
  };
  const dateChangeHandler = (env) => {
    setEnteredDate(env.target.value);
  };

  const form = (e) => {
    e.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: `\u20B9${enteredAmount}`,
      date: new Date(enteredDate),
    };

    props.onFormExpenses(expensesData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={form}>
      <div className="form-expenses-controls">
        <div className="form-expenses-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={enteredTitle}
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form-expenses-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-expenses-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min={"2010-01-01"}
            max={"2030-01-01"}
          />
        </div>
        <div className="form-btn">
          <button>Add Expenses</button>
        </div>
      </div>
    </form>
  );
};

export default FormExpenses;
