// BoxRegister.js
import React from 'react';
import './BoxRegister.css';

export default function BoxRegister({ onAdd }) {
  const handleAdd = () => {
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;
    const type = document.getElementById('type').value;
    const payment = document.getElementById('payment').value;

    const newItem = { name, value, payment };

    onAdd(newItem, type);
  };

  return (
    <div className='boxTitle'>
      <h2>Cadastro</h2>
      <div className='boxRegister'>
        <label htmlFor="name">
          Nome:
          <input id="name" type="text" />
        </label>
        <label htmlFor="value">
          Valor:
          <input id="value" type="number" />
        </label>
        <label htmlFor="type">
          Tipo:
          <select id="type">
            <option value="revenue">Receita</option>
            <option value="expense">Despesa</option>
          </select>
        </label>
        <label htmlFor="payment">
          Pagamento:
          <select id="payment">
            <option value="card">Cartão</option>
            <option value="pix">Pix</option>
            <option value="ted">TED</option>
          </select>
        </label>
        <button value="adicionar" className='button' onClick={handleAdd}>Adicionar</button>
      </div>
    </div>
  );
}
