import React from 'react'
import ReactDOM from 'react-dom'
import Orders from './orders';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Orders />,
    document.body.appendChild(document.createElement('div')),
  )
})