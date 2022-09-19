import React, { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import "./css/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredChange, updateFilter] = useState("2020");

  const filterChangeFilter = (filterValue) => {
    console.log("From Expenses Filter");
    updateFilter(filterValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={filteredChange}
        onChangeFilter={filterChangeFilter}
      />
      {props.expenses.map((exp) => {
        return <ExpensesItem title={exp.title} amount={exp.amount} date={exp.date} />;
      })}
    </Card>
  );
}

export default Expenses;
