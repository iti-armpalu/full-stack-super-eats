// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

// Importing stylesheet
import './home.scss';




const Home = () => (
  <React.Fragment>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="#">Super Eats</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container py-3 content">
      <h1>Hello world!</h1>
    </div>
    <footer className="p-3 bg-light">
      <div className="container">
        <span className="me-3 text-secondary">Built by Iti with <FontAwesomeIcon icon={faCoffee} /> and <FontAwesomeIcon icon={faHeart} /></span>
      </div>
    </footer>
  </React.Fragment>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})