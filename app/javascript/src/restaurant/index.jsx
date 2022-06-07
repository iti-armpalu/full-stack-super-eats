import React from 'react'
import ReactDOM from 'react-dom'
import Restaurant from './restaurant';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Restaurant restaurant_id={data.restaurant_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})