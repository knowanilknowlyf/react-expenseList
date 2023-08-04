import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";
function Expenses(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((object, i) => (
        <ExpenseItem
          title={object.title}
          amount={object.amount}
          date={object.date}
          key={object.id}
        />
      ))}  
    </Card>
  );
}
export default Expenses;
