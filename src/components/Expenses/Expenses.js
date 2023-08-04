import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../Ui/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filter, setFilter] = useState('2020');
  const expenses = props.expenses;
  const filterChangeHandler = val => {
    setFilter(val)
  }
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() == filter)

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYr={filter} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
export default Expenses;
