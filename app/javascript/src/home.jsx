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

    {/* 
        =====================================================
				  Hero content
			  ===================================================== 
        */}
         <div className="pb-40">
        <div id="hero" className="position-relative bg-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070)` }}>
          
            <div class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center overlay">
                <h1 className="hero-title mb-20">Order food to your door</h1>
                <p className="mb-60"><a href="" className="text-decoration-underline">Sign in</a> for your recent addresses</p>
                <a className="btn btn-find-food text-uppercase pl-30 pr-30 pt-10 pb-10" href="#" role="button">Find food</a>
       
          </div>
        </div>
        </div>

        {/* 
        =====================================================
				  XXX
			  ===================================================== 
        */}
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <div className="row">
              <div className="col-6 col-lg-4">
                  <div className="property-image mb-10 rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770)` }} />
                  <h5 className="mb-0">Are you hungry?</h5>
                  <a href="#" className="text-decoration-underline">Sign up or log in and start ordering</a>
              </div>
              <div className="col-6 col-lg-4">
                  <div className="property-image mb-10 rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1652862730746-93fcd0da61ae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnQlMjB0YWtlYXdheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800)` }} />
                  <h5 className="mb-0">Your restaurant, delivered</h5>
                  <a href="#" className="text-decoration-underline">Add your restaurant</a>
              </div>
              <div className="col-6 col-lg-4">
                  <div className="property-image mb-10 rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621503236463-3d812b12ea22?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770)` }} />
                  <h5 className="mb-0">Deliver with Super Eats</h5>
                  <a href="#" className="text-decoration-underline">Sign up to deliver</a>
              </div>
            </div>
          </div>
        </div>


        {/* 
        =====================================================
				  Countries with Super Eats
			  ===================================================== 
        */}
        <div className="mt-80">
          <div className="pl-40 pr-40">
            <h2 className="mb-30">Countries with Super Eats</h2>
            <div className="row gx-0">
              <div className="col-md-3">
       
                <ul className="d-md-block p-0 mb-0 country-list">
                    <li>
                      <a href="#" className="d-flex mb-15">Australia</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Belgium</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Brazil</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Canada</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Chile</a>
                    </li>
                    <li>
                    <a href="#" className="d-flex mb-15">Costa Rica</a>
                    </li>
                  </ul>
              </div>

              <div className="col-md-3">

                <ul className="d-md-block p-0 mb-0">
                    <li>
                      <a href="#" className="d-flex mb-15">Ecuador</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">France</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Guatemala</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Ireland</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Italy</a>
                    </li>
                    <li>
                    <a href="#" className="d-flex mb-15">Japan</a>
                    </li>
                  </ul>
              </div>

              <div className="col-md-3">

                <ul className="d-md-block p-0 mb-0">
                    <li>
                      <a href="#" className="d-flex mb-15">Mexico</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">New Zealand</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Poland</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Portugal</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">South Africa</a>
                    </li>
                    <li>
                    <a href="#" className="d-flex mb-15">Spain</a>
                    </li>
                  </ul>
              </div>

              <div className="col-md-3">

                <ul className="d-md-block p-0 mb-0">
                    <li>
                      <a href="#" className="d-flex mb-15">Sri Lanka</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Sweden</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Switzerland</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">Taiwan</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">United Kingdom</a>
                    </li>
                    <li>
                      <a href="#" className="d-flex mb-15">United States</a>
                    </li>
                  </ul>
              </div>

            </div>
          </div>
        </div>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})