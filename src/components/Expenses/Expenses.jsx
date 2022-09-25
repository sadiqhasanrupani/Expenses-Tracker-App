import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./css/Expenses.css";

function Expenses(props) {
  const [filteredChange, updateFilter] = useState("2020");

  const filterChangeFilter = (filterValue) => {
    console.log("From Expenses Filter");
    updateFilter(filterValue);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    // console.log(exp.date.getFullYear().toString());
    // console.log(filteredChange)
    return exp.date.getFullYear().toString() === filteredChange;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={filteredChange}
        onChangeFilter={filterChangeFilter}
      />
      <ExpensesList item={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
