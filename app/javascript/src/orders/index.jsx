import React from 'react'
import ReactDOM from 'react-dom'
import Orders from './orders';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params')
  const data = JSON.parse(node.getAttribute('data-params'))

  ReactDOM.render(
    <Orders user_id={data.user_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})