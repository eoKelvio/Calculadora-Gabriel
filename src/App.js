// App.js
import React, { useState } from 'react';
import BoxRegister from './components/BoxRegister/BoxRegister';
import Box from './components/Box/Box';
import './App.css'

export default function App() {
  const [revenues, setRevenues] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAdd = (newItem, type) => {
    const paymentSelect = document.getElementById('payment');
    const paymentOption = paymentSelect.options[paymentSelect.selectedIndex].text;

    newItem.payment = paymentOption === 'name' ? newItem.name : paymentOption;

    if (type === 'revenue') {
      setRevenues([...revenues, newItem]);
    } else if (type === 'expense') {
      setExpenses([...expenses, newItem]);
    }
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + parseFloat(item.value), 0);
  };

  return (
    <div className='body'>
      <div className='register'>
        <BoxRegister onAdd={handleAdd} />
      </div>
      <div className='revenue'>
        <Box items={revenues} total={calculateTotal(revenues)} title="Receita" />
      </div>
      <div className='expense'>
        <Box items={expenses} total={calculateTotal(expenses)} title="Despesa" />
      </div>
    </div>
  );
}