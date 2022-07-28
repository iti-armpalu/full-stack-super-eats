// layout.js
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './home.scss';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBars, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';

class Layout extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      first_name: '',
      user_id: '',
      delivery_partner: false,
      showHamburgerMenu: false,
      showUserMenu: false,
    }
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        // console.log(data)
        this.setState({
          authenticated: data.authenticated,
          first_name: data.first_name,
          user_id: data.user_id,
          delivery_partner: data.delivery_partner,
        })
      })
      this.addAbsoluteClass()
  }

  showHamburgerMenuFunc = () => {
    const overlayEl = document.querySelector('.dark-overlay-inactive')
    overlayEl.classList.replace('dark-overlay-inactive', 'dark-overlay-active')

    const bodyEl = document.querySelector('body')
    bodyEl.classList.add("fixed-position")

    this.setState({ showHamburgerMenu: !this.state.showHamburgerMenu })
  }

  closeHamburgerMenuFunc = () => {
    const overlayEl = document.querySelector('.dark-overlay-active')
    overlayEl.classList.replace('dark-overlay-active', 'dark-overlay-inactive')

    const bodyEl = document.querySelector('body')
    bodyEl.classList.remove("fixed-position")

    this.setState({ showHamburgerMenu: !this.state.showHamburgerMenu })
  }

  showUserMenuFunc = () => {
    this.setState({ showUserMenu: !this.state.showUserMenu })
  }

  addAbsoluteClass = () => {
    const navbarEl = document.querySelector('#navbar')
    if (location.pathname == "/") {
      navbarEl.classList.replace('position-relative', 'position-absolute')
    } else {
      navbarEl.classList.replace('position-absolute', 'position-relative')
    }
  }

  logout = (e) => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        // console.log('data', data)
        if (data.success) {
          this.setState({
            authenticated: false,
          })
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign out.',
        })
      })
  }


  render () {
    const { authenticated, first_name, user_id, delivery_partner, showHamburgerMenu, showUserMenu } = this.state;

    return (
      <React.Fragment>
        {/* 
        =====================================================
				  Nav bar
			  ===================================================== 
        */}
        {(authenticated)

        ?
        <nav className="navbar navbar-expand-sm position-relative w-100 container" id="navbar">

          {/* Authenticated - nav for sm and above screens */}
          <div className="d-none d-sm-flex flex-grow-1" id="xlNavbar"> 
            <a className="navbar-brand py-auto pr-0 pl-2" href="/">
              <h3 className="m-0">
                Super <b>Eats</b>
              </h3>
            </a>

            <div className="ms-auto">
              <button 
                type="submit" 
                className="btn btn-user-menu pt-10 pb-10 mr-10" 
                onClick={this.showUserMenuFunc}>
                  <FontAwesomeIcon icon={faUser} size="lg" className="mr-10" />
                  Hello, {first_name}
                  <span className="ml-10">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                
                  {(showUserMenu)
                    ? (<div className="user-menu">
                        <ul className="list-unstyled">
                          <li><a href={`/user/${user_id}/orders`}>Orders</a></li>
                          {(delivery_partner === true)
                          ? (<li><a href={`/delivery/user/${user_id}/trips`}>Delivery trips</a></li>)
                          :(<div></div>)
                          }
                          <li><a href="#">Favourites</a></li>
                          <div className="divider"></div>
                          <li><a href="#">Account details</a></li>
                        </ul>
                      </div>)

                    : (<div></div>)
                  }
              </button>
              <button 
                type="submit" 
                className="btn btn-logout pt-10 pb-10" 
                onClick={this.logout}>
                  Log out
              </button>
            </div>
          </div>

          {/* Not authenticated - nav for sm and below screens */}
          <div className="d-flex d-sm-none w-100">
            <a className="navbar-brand py-auto pr-0 pl-2" href="/">
              <h3 className="m-0">Super <b>Eats</b></h3>
            </a>
            <div className="ms-auto">
              <button 
                type="submit" 
                className="btn btn-sm btn-user-menu pt-10 pb-10 mr-10" 
                onClick={this.showUserMenuFunc}>
                  Account
                  <span className="ml-10">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                
                  {(showUserMenu)
                    ? (<div className="user-menu">
                        <ul className="list-unstyled">
                          <li><a href={`/user/${user_id}/orders`}>Orders</a></li>
                          {(delivery_partner === true)
                          ? (<li><a href={`/delivery/user/${user_id}/trips`}>Delivery trips</a></li>)
                          :(<div></div>)
                          }
                          <li><a href="#">Favourites</a></li>
                          <div className="divider"></div>
                          <li><a href="#">Account</a></li>
                        </ul>
                      </div>)

                    : (<div></div>)
                  }
              </button>
              <button 
                type="submit" 
                className="btn btn-sm btn-logout pt-10 pb-10" 
                onClick={this.logout}>
                  Log out
              </button>
            </div>
            
          </div>

        </nav>

        : 
        <nav className="navbar navbar-expand-sm position-relative w-100 container" id="navbar">

        {/* Not authenticated - nav for sm and above screens */}
          <div className="d-none d-sm-flex flex-grow-1"> 
            <a 
              className="d-none d-lg-block my-auto mr-20" 
              onClick={this.showHamburgerMenuFunc}>
                <FontAwesomeIcon icon={faBars} size="xl" />
            </a>

            {(showHamburgerMenu)
            ? 
            (<div className="hamburger-menu">
              <div className="d-flex justify-content-end my-2">
                <button onClick={this.closeHamburgerMenuFunc}>
                  <FontAwesomeIcon icon={faXmark} size="lg" className="mr-15"/>
                </button>
              </div>
              <ul className="mt-20 mb-20">
                <li>
                  <a 
                    className="btn btn-sign-up pt-10 pb-10 mb-20" 
                    href="/login" 
                    role="button">
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
                  <a href="#" className="text-muted d-flex mb-20">
                    Create a business account (Coming soon)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted d-flex mb-20">
                    Add your restaurant (Coming soon)
                  </a>
                </li>
                <li>
                  <a href="/#" className="text-muted d-flex mb-20">
                    Log in or sign up to deliver (Coming soon)
                  </a>
                </li>
              </ul>
            </div>)

            :
            (<div></div>)
            }

            <a className="navbar-brand py-auto pr-0 pl-2" href="/">
              <h3 className="mx-0 my-auto">Super <b>Eats</b></h3>
            </a>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  className="btn btn-log-in pt-10 pb-10 mr-20" 
                  href="/login" 
                  role="button">
                    <FontAwesomeIcon icon={faUser} size="lg" className="mr-10" />
                    Log in
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="btn btn-sign-up pt-10 pb-10" 
                  href="/signup" 
                  role="button">
                    Sign up
                </a>
              </li>
            </ul>
          </div>

          {/* Not authenticated - nav for sm and below screens */}
          <div className="d-flex d-sm-none w-100">
            <a className="navbar-brand py-auto pr-0 pl-2" href="/">
              <h3 className="m-0">Super <b>Eats</b></h3>
            </a>
            <ul className="d-flex ms-auto">
              <li className="nav-item">
                <a 
                  className="btn btn-sm btn-log-in pt-10 pb-10 mr-10" 
                  href="/login" 
                  role="button">
                    Log in
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="btn btn-sm btn-sign-up pt-10 pb-10" 
                  href="/signup" 
                  role="button">
                    Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        }

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
          <div className="container">
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
                <ul className="footer-column d-md-block p-0 ml-10">
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
                <ul className="footer-column d-md-block p-0 ml-10">
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