import React from 'react'
import ReactDOM from 'react-dom'
import DeliveryTrips from './delivery_trips';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params')
  const data = JSON.parse(node.getAttribute('data-params'))

  ReactDOM.render(
    <DeliveryTrips delivery_user_id={data.delivery_user_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})