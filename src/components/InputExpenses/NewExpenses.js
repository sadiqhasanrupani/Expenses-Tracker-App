import React from "react";
import FormExpenses from "./FormExpenses";
import Card from "../UI/Card"
import "./NewExpenses.css";

const NewExpenses = () => {
  return (
    <Card className="new-expenses">
        <FormExpenses></FormExpenses>
    </Card>
  );
};

export default NewExpenses;
