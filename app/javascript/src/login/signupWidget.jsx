// signupWidget.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class SignupWidget extends React.Component {
  state = {
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    address:'',
    city: '',
    country:'',
    error: '',
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if (data.user) {
          this.login();
          console.log("Sign up successful")
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
    const { first_name, last_name, email, password, address, city, country, error } = this.state;

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
              <p className="mb-15">Set up your address and you are're good to go!</p>
              <input name="address" type="ptext" className="form-control mb-15" placeholder="Address"  value={address} onChange={this.handleChange} required />
              <div className="d-flex ">
              <input name="city" type="text" className="form-control mb-15 mr-5" placeholder="City"  value={city} onChange={this.handleChange} required />
              <input name="country" type="text" className="form-control mb-15 ml-5" placeholder="Country"  value={country} onChange={this.handleChange} required />
            </div>
            </div>

            <button type="submit" className="btn btn-login-signup d-block mx-auto">
              Sign up
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </form>
        </div>

        <p className="text-center mt-40 mb-20">Already have a Super Eats account? 
          <a className="ml-5 text-decoration-underline" onClick={this.props.toggle}>
            Log in
          </a>
        </p>
      </React.Fragment>
    )
  }
}
export default SignupWidget