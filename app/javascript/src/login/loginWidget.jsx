// loginWidget.jsx
import React from 'react';

class LoginWidget extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // login = (e) => {
  //   if (e) { e.preventDefault(); }
  //   this.setState({
  //     error: '',
  //   });

  //   fetch('/api/sessions', safeCredentials({
  //     method: 'POST',
  //     body: JSON.stringify({
  //       user: {
  //         email: this.state.email,
  //         password: this.state.password,
  //       }
  //     })
  //   }))
  //     .then(handleErrors)
  //     .then(data => {
  //       if (data.success) {
  //         const params = new URLSearchParams(window.location.search);
  //         const redirect_url = params.get('redirect_url') || '/';
  //         window.location = redirect_url;
  //       }
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: 'Could not log in.',
  //       })
  //     })
  // }
  
  render () {
    const { email, password, error } = this.state;

    return (
      <React.Fragment>
        <div className="text-center mb-40">
          <h2>Log in</h2>
          <p>Just log in and start ordering. Say no to hunger.</p>
        </div>

        <div className="bg-login rounded pt-40 pb-40 pl-40 pr-40 mx-auto">
          <form>
            <input name="email" type="text" className="form-control mb-15" placeholder="Email" value={email} onChange={this.handleChange} required />
            <input name="password" type="password" className="form-control mb-30" placeholder="Password" value={password} onChange={this.handleChange} required />
            <button type="submit" className="btn btn-login d-block mx-auto">
              Log in
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </form>

        </div>

        <p className="text-center mt-40 mb-20">Don't have an account yet? 
          <a className="ml-5 text-decoration-underline" onClick={this.props.toggle}>
            Sign up
          </a>
        </p>
      </React.Fragment>
    )
  }
}
export default LoginWidget