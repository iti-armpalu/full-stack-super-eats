// layout.js
import React from 'react';


// Import stylesheet
import './home.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

class Layout extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      showHamburgerMenu: false,
    }
  }

  showHamburgerMenuFunc = () => {
    const overlayEl = document.querySelector('.overlay')
    if (!this.state.showSearchResults) {
      overlayEl.classList.replace('overlay', 'dark-overlay')
    } else {
      overlayEl.classList.replace('dark-overlay', 'overlay')
    }
    this.setState({ showHamburgerMenu: !this.state.showHamburgerMenu })
  }


  render () {
    const { showHamburgerMenu } = this.state;

    return (
      <React.Fragment>

        {/* 
        =====================================================
				  Nav bar
			  ===================================================== 
        */}
        <nav className="navbar navbar-expand-xl position-relative w-100 pl-40 pr-40" id="navbar">

          {/* <!-- nav for xl screens --> */}
          <div className="d-none d-xl-flex flex-grow-1" id="xlNavbar"> 
          <a href="#" className="my-auto mr-20" onClick={this.showHamburgerMenuFunc}>
          <FontAwesomeIcon icon={faBars} size="xl" />
          </a>

          {(showHamburgerMenu)
            ? (<div className="hamburger-menu">
                <ul className=" mt-20 mb-20">
                  <li>
                    <a className="btn btn-sign-up pt-10 pb-10 mb-20" href="/login" role="button">
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-log-in pt-10 pb-10 mb-20" href="/login" role="button">
                      <FontAwesomeIcon icon={faUser} size="lg" className="mr-10" />
                      Log in
                    </a>
                  </li>
                  <li>
                    <a href="/business/login" className="d-flex mb-20">
                      Create a business account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-20">
                      Add your restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-20">
                      Sign up to deliver
                    </a>
                  </li>
                </ul>
              </div>)

            : (<div></div>)
          }


            <a className="navbar-brand py-auto pr-0 pl-2" href="/">
              <h3 className="m-0">Super <b>Eats</b></h3>
            </a>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="btn btn-log-in pt-10 pb-10 mr-20" href="/login" role="button">
                  <FontAwesomeIcon icon={faUser} size="lg" className="mr-10" />
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-sign-up pt-10 pb-10" href="/login" role="button">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* 
        =====================================================
				  Children
			  ===================================================== 
        */}
        <div className="content">
          {this.props.children}
        </div>

        
        {/* 
        =====================================================
				  Footer
			  ===================================================== 
        */}
        <footer id="footer" className="mt-80 pt-70 pb-70">
          <div className="pl-40 pr-40">

            <div className="row gx-0">
              <div className="col-12 col-md-6 mb-40">

                <div className="d-flex flex-column align-content-between">
                  <h2 className="mb-40">Super <b>Eats</b></h2>
                  <div className="d-flex flex-row">
                    <a href="https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277" className="mr-10">
                      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/783bb4a82e5be29e.svg" alt="Download App Store" />
                    </a>
                    <a href="https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277">
                      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/163bdc9b0f1e7c9e.png" alt="Download Google Play" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <ul className="footer-column d-md-block p-0 mb-0 ml-10">
                  <li>
                    <a href="#" className="d-flex mb-15">Get help</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">Buy gift cards</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">Add your restaurant</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">Sign up to deliver</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">Create a business account</a>
                  </li>
                  <li>
                  <a href="#" className="d-flex mb-15">Save on your first order</a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-3">
                <ul className="footer-column d-md-block p-0 mb-0 ml-10">
                  <li>
                    <a href="#" className="d-flex mb-15">Restaurants near me</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">View all cities</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">View all countries</a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-15">About Super Eats</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="divider mt-40 mb-40"></div>

            <div className="row gx-0 justify-content-between">
              <div className="col-12 col-xl-auto order-2 order-xl-1">
                  <div className="d-xl-flex text-left text-md-center">
                    <span className="d-block">© 2022 Super Eats, Inc. All rights reserved</span>
                    <ul className="d-inline-flex align-items-center p-0 m-0">
                      <li>
                        <span className="d-none d-xl-inline px-2"> · </span>
                        <a href="#" className="text-dark">Privacy Policy</a>
                      </li>
                      <li>
                        <span className="px-2"> · </span>
                        <a href="#" className="text-dark">Terms</a>
                      </li>
                      <li>
                        <span className="px-2"> · </span>
                        <a href="#" className="text-dark">Pricing</a>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="col-12 col-xl-auto order-1 order-xl-2 mb-10">
                <div className="footer-bar-social text-left text-md-center">
                  <a href="#" className="mr-10">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </a>
                  <a href="#" className="mr-10">
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} size="xl" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Layout;