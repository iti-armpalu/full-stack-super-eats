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
        <nav className="navbar navbar-expand-xl position-absolute w-100 pl-40 pr-40" id="navbar">

          {/* <!-- nav for xl screens --> */}
          <div className="d-none d-xl-flex flex-grow-1" id="xlNavbar"> 
          <a href="#" onClick={this.showHamburgerMenuFunc}>
          <FontAwesomeIcon icon={faBars} size="xl" className="mr-20" />
          </a>

          {(showHamburgerMenu)
            ? (<div className="hamburger-menu">
                <ul className=" mt-20 mb-20">
                  <li>
                    <a className="btn btn-sign-up pt-10 pb-10 mb-20" href="#" role="button">
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-log-in pt-10 pb-10 mb-20" href="#" role="button">
                      <FontAwesomeIcon icon={faUser} size="lg" className="mr-10" />
                      Log in
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex mb-20">
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


            <a className="navbar-brand py-auto pr-0 pl-2" href="#">
              <h3 className="m-0">Super <b>Eats</b></h3>
            </a>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="btn btn-log-in pt-10 pb-10 mr-20" href="#" role="button">
                  <FontAwesomeIcon icon={faUser} size="lg" className="mr-10" />
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-sign-up pt-10 pb-10" href="#" role="button">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div className="content">
          {this.props.children}
        </div> */}

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
				  Countries with Uber Eats
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
       
                <ul className="d-md-block p-0 mb-0">
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