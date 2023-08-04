import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [userInput, SetUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const titleChangeHandler = (e) => {
        SetUserInput((prev) => ({ ...prev, title: e.target.value }))

    }
    const amountChangeHandler = (e) => {
        SetUserInput({
            ...userInput,
            amount: e.target.value
        })


    }
    const dateChangeHandler = (e) => {
        SetUserInput({ ...userInput, date: e.target.value })


    }
    const submitHandler = (e) => {
        e.preventDefault()
        userInput.date = new Date(userInput.date)
        props.onSaveExpense(userInput)
        SetUserInput({ title: '', amount: '', date: '' })
    }
    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={userInput.title} onChange={titleChangeHandler} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={userInput.amount} onChange={amountChangeHandler} type='number' min='.01' step='.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={userInput.date} onChange={dateChangeHandler} type='date' min='1991-01-19' max='2023-12-12' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );
}

export default ExpenseForm;
