import "./css/ExpensesItem.css";
import Card from "../UI/Card"

function ExpensesItem(props) {
  let month = props.date.toLocaleString("en-US", {month: "short"});
  let day = props.date.toLocaleString("en-US",{day: '2-digit'});
  let year = props.date.getFullYear().toString();
  return (
    <Card className="card flex expCard">
      <div className="Item-1">
        <div className="date month">{month}</div>
        <div className="date year">{year}</div>
        <div className="date day">{day}</div>
      </div>
      <div className="Item-2">
        <div className="title">{props.title}</div>
        <div className="cost">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
