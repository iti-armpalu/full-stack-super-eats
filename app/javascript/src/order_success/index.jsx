import React from 'react'
import ReactDOM from 'react-dom'
import OrderSuccess from './order_success';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params')
  const data = JSON.parse(node.getAttribute('data-params'))

  ReactDOM.render(
    <OrderSuccess order_id={data.order_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})