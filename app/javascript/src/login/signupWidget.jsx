// signupWidget.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Import International Tel Input 
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

class SignupWidget extends React.Component {
  state = {
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    address:'',
    city: '',
    country:'',
    phone_number: '',
    delivery: false,
    error: '',
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handlePhoneChange = (status, phone_number, countryCode) => {
    this.setState({ 
      phone_number
    });
  };

  handleChecked = (e) => {
    this.setState({
      delivery: !this.state.delivery
    })
  }


  signup = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });
    fetch('/api/users', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          address: this.state.address,
          city: this.state.city,
          country: this.state.country,
          phone_number: this.state.phone_number,
          delivery: this.state.delivery,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if (data.user) {
          this.login();
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign up.',
        })
      })
  }

  login = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });
    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/restaurants';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not log in.',
        })
      })
  }

  render () {
    const { first_name, last_name, email, password, address, city, country, phone_number, delivery, error } = this.state;

    return (
      <React.Fragment>

        <div className="text-center mb-40">
          <h2>Sign up</h2>
          <p>Sign up and start ordering. Say no to hunger.</p>
        </div>

        <div className="bg-login rounded pt-40 pb-40 pl-40 pr-40 mx-auto">
          <form onSubmit={this.signup}>
            <div className="d-flex ">
              <input name="first_name" type="text" className="form-control mb-15 mr-5" placeholder="First name"  value={first_name} onChange={this.handleChange} required />
              <input name="last_name" type="text" className="form-control mb-15 ml-5" placeholder="Last name"  value={last_name} onChange={this.handleChange} required />
            </div>
            <input name="email" type="text" className="form-control mb-15" placeholder="Email" value={email} onChange={this.handleChange} required />
            <input name="password" type="password" className="form-control mb-15" placeholder="Password" value={password} onChange={this.handleChange} required />
            <div className="mt-30 mb-30">
              <p className="mb-15">
                Add your phone number
              </p>
              <IntlTelInput
                name="phone_number" 
                type="tel"
                preferredCountries={["us", "gb", "ae"]}
                containerClassName="intl-tel-input"
                inputClassName="form-control input-tel"
                value={phone_number} 
                // onChange={this.handleChange}
                onPhoneNumberChange={this.handlePhoneChange}
                required />
            </div>
            <div className="mt-30 mb-30">
              <p className="mb-15">
                Set up your address and you are're good to go!
              </p>
              <input name="address" type="text" className="form-control mb-15" placeholder="Address"  value={address} onChange={this.handleChange} required />
              <div className="d-flex ">
                {/* <input name="city" type="text" className="form-control mb-15 mr-5" placeholder="City"  value={city} onChange={this.handleChange} required /> */}
                <select
                  name="city"
                  value={city}
                  className="form-select mb-15 mr-5"
                  onChange={this.handleChange}
                  >
                    <option value="" disabled>City</option>
                    <option value="New York">New York</option>
                </select>
                
                {/* <input name="country" type="text" className="form-control mb-15 ml-5" placeholder="Country"  value={country} onChange={this.handleChange} required /> */}
                <select
                  name="country"
                  value={country}
                  className="form-select mb-15 ml-5"
                  onChange={this.handleChange}>
                    <option value="" disabled>Country</option>
                    <option value="United States">United States</option>
                </select>
              </div>
            </div>
            <div className="mt-30 mb-30">
              <p className="mb-10">
                Become a delivery partner and start earning!
              </p>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox"
                  defaultChecked={delivery}
                  id="flexCheckDefault" 
                  onChange={this.handleChecked}></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Yes, I want to become a delivery partner.
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-login-signup d-block mx-auto">
              Sign up
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </form>
        </div>

        <p className="text-center mt-40 mb-20">
          Already have a Super Eats account? 
          <a className="ml-5 text-decoration-underline" onClick={this.props.toggle}>
            Log in
          </a>
        </p>
      </React.Fragment>
    )
  }
}
export default SignupWidget