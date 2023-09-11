import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onMainExpenseData }) => {
  const [changeForm, setChangeForm] = useState(false);

  const saveDataHandler = (enteredDara) => {
    const expenseData = {
      ...enteredDara,
      id: Math.random().toString(),
    };
    onMainExpenseData(expenseData);
  };

  const cancelExpenseHandler = () => {
    setChangeForm(false);
  };

  const createExpenseHandler = () => {
    setChangeForm(true);
  };

  return (
    <div className="new-expense">
      {!changeForm && (
        <button onClick={createExpenseHandler}>Add New Expense</button>
      )}
      {changeForm && (
        <ExpenseForm
          onSaveData={saveDataHandler}
          onCancelData={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
