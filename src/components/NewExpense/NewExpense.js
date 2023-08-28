import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({onMainExpenseData}) => {
  const saveDataHandler = (enteredDara) => {
    const expenseData = {
      ...enteredDara,
      id: Math.random().toString()
    }
    onMainExpenseData(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
  );
};

export default NewExpense;