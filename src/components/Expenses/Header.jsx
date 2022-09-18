import "./css/Header.css";
import Card from "../UI/Card";

function Title() {
  return (
    <div className="header">
      <div>
        <h1 className="h1">Expenses Items</h1>
      </div>
      <Card className="card">
        <button className="add-btn">Add Expenses</button>
      </Card>
    </div>
  );
}

export default Title;
