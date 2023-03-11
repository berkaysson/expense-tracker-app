import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormActive, setFormState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random()*1000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  const formStateHandler = () => {
    if(isFormActive) setFormState(false);
    else setFormState(true);
  }

  let formContent = <button onClick={formStateHandler}>Add New Expense</button>;

  if(isFormActive){
    formContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={formStateHandler}/>;
  }

  return (
    <div className="new-expense">
      {formContent}
    </div>
  );
};

export default NewExpense;
