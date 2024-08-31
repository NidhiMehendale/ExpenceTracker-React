// app/components/ExpenseForm.js
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [money, setMoney] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (money && description && category) {
      let amount = parseFloat(money);
      if (isNaN(amount)) {
        alert('Please enter a valid number for the amount');
        return;
      }

      // If the input doesn't start with '-', treat it as positive
      if (!money.trim().startsWith('-')) {
        amount = Math.abs(amount);
      }

      addExpense({ money: amount, description, category });
      setMoney('');
      setDescription('');
      setCategory('');
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-inputs">
        <input
          type="text"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          placeholder="Amount(+income/-expense)"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Food,Cloths,Movies etc."
        required
      />
    
      </div>
      <button type="submit" className="submit-button">+ Add Expense</button>
    </form>
  );
};

export default ExpenseForm;