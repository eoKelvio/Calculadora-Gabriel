// Box.js
import React from 'react';
import './Box.css'

export default function Box({ items, total, title }) {
  return (
    <div className='box'>
      <h2>{title}</h2>
      <h2 className='price'>Total: R$ {total}</h2>
      {items.map((item, index) => (
        <div key={index} className='item'>
          <div>{item.name}</div>
          <div>R$ {item.value}</div>
          <div>{item.payment}</div>
        </div>
      ))} 
    </div>
  );
}
