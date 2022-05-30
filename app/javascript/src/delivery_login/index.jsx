import React from 'react'
import ReactDOM from 'react-dom'
import DeliveryLogin from './delivery_login';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DeliveryLogin />,
    document.body.appendChild(document.createElement('div')),
  )
})