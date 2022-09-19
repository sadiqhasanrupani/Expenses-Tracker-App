import React from "react";
import "./css/ExpensesFilter.css";

const ExpensesFilter =(props) => {

  const filterExpenses = (e) => {
    props.onChangeFilter()
  }

  return (
    <div className="filter">
      <label htmlFor="expensesFilter">Filter Expenses</label>
      <select name="expensesFilter" value={props.selectedValue} id="expensesFilter" onChange={filterExpenses}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;