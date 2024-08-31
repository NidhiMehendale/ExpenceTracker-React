import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense and update localStorage
  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.money),
    0,
  );

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
        <div className="total-amount">
          <h2>Total Amount: Rs {totalAmount.toFixed(2)}</h2>
        </div>
      </main>
    </div>
  );
}
