// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';

// Importing FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

// Importing stylesheet
import './home.scss';




const Home = () => (
  <Layout>

    <div className="container py-3 content">
      <h1>Hello world!</h1>
    </div>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})