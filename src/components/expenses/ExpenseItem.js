import "./ExpenseItem.css";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, date, amount }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
