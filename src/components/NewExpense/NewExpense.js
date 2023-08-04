
import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';
function NewExpense(props) {
    const [showForm, setShowForm] = useState(false)
    const saveExpenses = (val) => {
        const expense = { ...val, id: Math.random().toString() }
        props.onSaveExpenseMain(expense)
    }
    const showFormHandler = (val) => {
        console.log(val)
        setShowForm(val)
    }
    let content = <AddNewExpense updateFormState={showFormHandler} />
    if (showForm) {
        content=<ExpenseForm updateFormState={showFormHandler} onSaveExpense={saveExpenses} />
    }
    return (
        <div className='new-expense'>
            {content}

        </div>
    );
}

export default NewExpense;
