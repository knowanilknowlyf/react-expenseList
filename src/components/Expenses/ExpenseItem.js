import "./ExpenseItem.css";
import Card from "../Ui/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, date, amount }) {
  console.log(title,date,amount)
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card></li>
  );
}
export default ExpenseItem;
