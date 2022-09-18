import "./css/ExpensesItem.css";
import Card from "../UI/Card"

function ExpensesItem(props) {
  let month = props.date.toLocaleString("en-US", {month: 'long'});
  let day = props.date.toLocaleString("en-US",{day: '2-digit'});
  let year = props.date.getFullYear();
  return (
    <Card className="card flex expCard">
      <div className="Item-1">
        <div className="date">{month}</div>
        <div className="date">{day}</div>
        <div className="date">{year}</div>
      </div>
      <div className="Item-2">
        <div>{props.title}</div>
        <div className="cost">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
