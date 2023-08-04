import React from 'react';
import './AddNewExpense.css'
const AddNewExpense = (props) => {
   const sHForm=()=>{
    props.updateFormState(true)
   }
    return (
        <div className='new-expense__actions_sec'>
            <button onClick={sHForm}>Add Expense</button>
        </div>
    );
}

export default AddNewExpense;
