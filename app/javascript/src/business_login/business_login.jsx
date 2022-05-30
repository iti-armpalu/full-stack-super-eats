// business_login.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';
import BusinessLoginWidget from './businessLoginWidget';
import BusinessSignupWidget from './businessSignupWidget';

// Importing stylesheet
import './business_login.scss';

class BusinessLogin extends React.Component {
  state = {
    // authenticated: false,
    show_login: true,
  }

  // componentDidMount() {
  //   fetch('/api/authenticated')
  //     .then(handleErrors)
  //     .then(data => {
  //       this.setState({
  //         authenticated: data.authenticated,
  //       })
  //     })
  // }

  toggle = () => {
    this.setState({
      show_login: !this.state.show_login,
    })
  }

  render () {
    const { show_login } = this.state;

    // if (authenticated) {
    //   return (
    //     <Layout>
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
    //             <div className="border p-4">
    //               <p className="mb-0">You are already logged in 🙂</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Layout>
    //   );
    // };

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <div className="row">
            <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
                {show_login 
                ? <BusinessLoginWidget toggle={this.toggle} /> 
                : <BusinessSignupWidget toggle={this.toggle} />}
            </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BusinessLogin;