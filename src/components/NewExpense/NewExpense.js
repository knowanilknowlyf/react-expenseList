
import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
    const saveExpenses = (val) => {
        const expense = { ...val, id: Math.random().toString() }
        props.onSaveExpenseMain(expense)
    } 
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenses} />
        </div>
    );
}

export default NewExpense;
