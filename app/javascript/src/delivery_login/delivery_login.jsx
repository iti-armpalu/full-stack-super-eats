// business_login.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';
import DeliveryLoginWidget from './deliveryLoginWidget';
import DeliverySignupWidget from './deliverySignupWidget';

// Importing stylesheet
import './delivery_login.scss';

class DeliveryLogin extends React.Component {
  state = {
    authenticated: false,
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
                ? <DeliveryLoginWidget toggle={this.toggle} /> 
                : <DeliverySignupWidget toggle={this.toggle} />}
            </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DeliveryLogin;