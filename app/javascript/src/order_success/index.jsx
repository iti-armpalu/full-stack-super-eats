import React from 'react'
import ReactDOM from 'react-dom'
import OrderSuccess from './order_success';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <OrderSuccess />,
    document.body.appendChild(document.createElement('div')),
  )
})