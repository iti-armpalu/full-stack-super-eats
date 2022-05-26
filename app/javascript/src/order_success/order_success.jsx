// order_success.jsx
import React from 'react';
import Layout from '@src/layout';

// Importing stylesheet
import './order_success.scss';
// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCircle, faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

class OrderSuccess extends React.Component {

  render () {

  return (
    <Layout>
      <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <div className="mb-70">
              <h1 className="text-center mb-10">
                Your order from <span className="order-restaurant-name text-decoration-underline">Season Restaurant</span> is confirmed!
              </h1>
              <div className="d-flex justify-content-center">
                <p className="order-number">
                  Order ID: <span>#1</span>
                </p>
                <span className="px-2"> · </span>
                <p className="order-date">
                  Order submitted: <span>25 May 2022 at 14:00</span>
                </p>
                <span className="px-2"> · </span>
                <p className="order-date">
                  Order total: <span>$50.00</span>
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-between gx-0 pt-40 pb-40 pl-60 pr-60">
              <div className="col-4 pl-30 pr-30">
                <div className="d-flex flex-column">

                <div className="d-flex mb-40">
                    <div className="mr-20 my-auto">
                      <span className="fa-layers fa-fw fa-3x">
                        <FontAwesomeIcon icon={faCircle} className="icon-circle" />
                        <FontAwesomeIcon  icon={faLocationDot} transform="shrink-8"  className="icon-location-dot" />
                      </span>
                    </div>
                    <div>
                      <p className="order-delivery-address mb-1">
                        Delivery address
                      </p>
                      <h6>
                        1301 Oaklanding Fleming, New York, United States
                      </h6>
                    </div>
                  </div>

                  <div className="d-flex mb-40">
                    <div className="mr-20">
                      <span className="fa-layers fa-fw fa-3x">
                      <FontAwesomeIcon icon={faCircle} className="icon-circle" />
                      <FontAwesomeIcon  icon={faClock} transform="shrink-8"  className="icon-location-dot" />
                    </span>
                    </div>
                    <div>
                      <p className="order-delivery-address mb-1">
                        Estimated delivery time
                      </p>
                      <h6>
                        15 - 25 mins
                      </h6>
                    </div>
                  </div>

                  <div className="d-flex mb-40">
                    <div className="mr-20">
                      <span className="fa-layers fa-fw fa-3x">
                        <FontAwesomeIcon icon={faCircle} className="icon-circle" />
                        <FontAwesomeIcon  icon={faCar} transform="shrink-8"  className="icon-location-dot" />
                      </span>
                    </div>
                    <div className="mr-30">
                      <p className="order-delivery-address mb-1">
                        Delivery partner
                      </p>
                      <h6>
                        Peter Parker
                      </h6>
                    </div>
                    <div className="ml-20 my-auto">
                      <span className="fa-layers fa-fw fa-2x">
                        <FontAwesomeIcon icon={faCircle} className="icon-call-circle" />
                        <FontAwesomeIcon  icon={faPhone} transform="shrink-8"  className="icon-phone" />
                      </span>
                    </div>
                  </div>
                  <div className="border-top pt-40 pb-10">
                    <p>You can always view your order details in your order history:</p>
                    <a className="btn btn-order-history" href="#" role="button">
                      View order history
                    </a>
                  </div>



                </div>
              </div>
              <div className="col-7 d-flex">
              <div className="map-area-one me-lg-4 md-mt-50">
									<div className="mapouter">
										<div className="gmap_canvas">
											<iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jvt&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
										</div>
									</div>
								</div>
              </div>
              
            </div>
          </div>
        </div>
    </Layout>
    );
  }
}

export default OrderSuccess