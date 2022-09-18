import ExpensesItem from "./ExpensesItem";
import "./css/Expenses.css";
import Card from "../UI/Card"

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesItem
        title={props.expenses[0].item}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpensesItem
        title={props.expenses[1].item}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpensesItem
        title={props.expenses[2].item}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpensesItem
        title={props.expenses[3].item}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpensesItem>
    </Card>
  );
}

export default Expenses;
