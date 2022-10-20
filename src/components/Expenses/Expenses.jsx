import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
// importing expenseChart from the expense folder
import ExpensesChart from "./ExpensesChart";
import "./css/Expenses.css";

function Expenses(props) {
  const [filteredChange, updateFilter] = useState("2020");

  const filterChangeFilter = (filterValue) => {
    // console.log("From Expenses Filter");
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
      {/* Embadding the ExpensesChart inside this card */}
      <ExpensesChart expItems={filteredExpenses} />
      <ExpensesList item={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
