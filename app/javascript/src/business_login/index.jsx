import React from 'react'
import ReactDOM from 'react-dom'
import BusinessLogin from './business_login';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BusinessLogin />,
    document.body.appendChild(document.createElement('div')),
  )
})