import React from 'react'
import ReactDOM from 'react-dom'
import BusinessRestaurants from './business_restaurants';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BusinessRestaurants />,
    document.body.appendChild(document.createElement('div')),
  )
})