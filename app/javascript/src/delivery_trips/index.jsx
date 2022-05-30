import React from 'react'
import ReactDOM from 'react-dom'
import DeliveryTrips from './delivery_trips';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DeliveryTrips />,
    document.body.appendChild(document.createElement('div')),
  )
})