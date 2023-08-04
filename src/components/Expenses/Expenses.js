import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../Ui/Card";
function Expenses(props) {
  const [filter, setFilter] = useState('2020');
  const expenses = props.expenses;
  const filterChangeHandler=val=>{
   
    setFilter(val)
 
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYr={filter} onChangeFilter={filterChangeHandler}/>
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
