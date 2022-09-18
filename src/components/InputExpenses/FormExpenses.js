import React, { useState } from "react";
import "./FormExpenses.css";

const FormExpenses = () => {
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

  return (
    <form>
      <div className="form-expenses-controls">
        <div className="form-expenses-control">
          <label for="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="form-expenses-control">
          <label for="amount">Amount</label>
          <input type="number" id="amount" onChange={amountChangeHandler} />
        </div>
        <div className="form-expenses-control">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={dateChangeHandler}
            min={"2010-01-01"}
            max={"2030-01-01"}
          />
        </div>
      </div>
      <div className="form-btn">
        <button>Add Expenses</button>
      </div>
    </form>
  );
};

export default FormExpenses;
