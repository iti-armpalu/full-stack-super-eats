import React from 'react'
import ReactDOM from 'react-dom'
import Restaurant from './restaurant';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Restaurant />,
    document.body.appendChild(document.createElement('div')),
  )
})