import React, { useState } from "react"; // using useState from react.
import FormExpenses from "./FormExpenses";
// import Card from "../UI/Card"
import "./NewExpenses.css";

const NewExpenses = (props) => {
  // this state will tell weather we are editing or not means if the isEditing is false then it will not show the form if true then it will show
  const [isEditing, setIsEditing] = useState(false);

  const addExpensesHandler = (expensesData) => {
    const newExpensesData = {
      ...expensesData,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    props.onNewExpenses(newExpensesData);
  };

  /* To cancel a button we need to set IsEditing to true.*/
  const StartEditingHandler = () => {
    setIsEditing(true);
  };

  /* Reset Handler will set the setIsEditing to false */
  const resetHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expenses">
      <div className="add-btn-exp">
        {/* Conditioning the button part that will will show write now but when we click on that button it show trigger setIsEditing to true that the isEditiing will become true and then button will false and form becomes ture. */}

        {!isEditing && (
          <button className="add-btn-exp" onClick={StartEditingHandler}>
            Add New Expenses
          </button>
        )}
        {/* here we are checking that if the button is !isEditing means true and then it will return the statement after the and operator.*/}
      </div>
      {isEditing && (
        <FormExpenses
          onFormExpenses={addExpensesHandler}
          onCancel={resetHandler}
        />
      )}
      {/* In This case the here isEditing is false because we set to false 😅. and when the above will clicked then it will trigger the StartEditingHandler and that StartEditingHandler will set isEditing to true and the form will show. */}
      {/* Now in form there is no cancel button from falsing the form so we will create a cancel button in form component. */}
    </div>
  );
};

export default NewExpenses;
