import React from "react";
import ExpensesItem from "./ExpensesItem";
import styles from "./css/ExpensesList.module.css";

const ExpensesList = (props) => {

  let msg = <h2 className={styles.h2}>No Expenses Found.</h2>;

  if(props.item.length === 0) {
    return msg;
  }
  
  return (
    <ul>
      {props.item.map((exp) => {
      return (
        <ExpensesItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      );
    })}
    </ul>
  );
};

export default ExpensesList;
