import React from 'react'
import ReactDOM from 'react-dom'
import Restaurants from './restaurants';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Restaurants />,
    document.body.appendChild(document.createElement('div')),
  )
})