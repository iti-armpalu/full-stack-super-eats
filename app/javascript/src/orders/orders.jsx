// restaurants.jsx
import React from 'react';
import Layout from '@src/layout';

// Importing stylesheet
import './orders.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faUtensils, faBurger, faPizzaSlice, faFish, faBowlFood, faIceCream, faMugHot, faBottleWater, faMapPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';

class Orders extends React.Component {

  render () {

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">

        
            <h3 className="mb-50">My orders</h3>
        

              <div className="row">

                <div className="col-4 d-flex flex-column">
                  <div className="bg-light rounded px-3 py-3">
                    <div className="property-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770)` }} />
                    <h5>Season Restaurant</h5>
                    <p className="order-details">10 May 2022<span className="px-2"> · </span> 10:30am</p>
                    <p>Liked the food?<a className="btn btn-view-menu text-decoration-underline py-0 mx-2" role="button" href="/restaurant/id">Order again</a></p>
                    <div className="divider my-3"></div>
                    <div>
                      <h6 className="mb-10">Your order details:</h6>
                      <div className="d-flex justify-content-between px-3">
                        <p className="mb-5"><span>1x</span> Aloha Bowl</p>
                        <p className="mb-5">$ 12.00</p>
                      </div>
                      <div className="d-flex justify-content-between px-3">
                        <p className="mb-5"><span>1x</span> Aloha Bowl</p>
                        <p className="mb-5">$ 12.00</p>
                      </div>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex justify-content-between px-3 order-details">
                      <p className="mb-5">Subtotal</p>
                      <p className="mb-5">$ 24.00</p>
                    </div>
                    <div className="d-flex justify-content-between px-3 order-details">
                      <p className="mb-5">Delivery fee</p>
                      <p className="mb-5">$ 2.00</p>
                    </div>
                    <div className="order-total d-flex justify-content-between px-3">
                      <p>Total</p>
                      <p>$ 26.00</p>
                    </div>
                  </div>
                </div>

                <div className="col-4 d-flex flex-column">
                  <div className="bg-light rounded px-3 py-3">
                    <div className="property-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770)` }} />
                    <h5>Season Restaurant</h5>
                    <p className="order-details">10 May 2022<span className="px-2"> · </span> 10:30am</p>
                    <p>Liked the food?<a className="btn btn-view-menu text-decoration-underline py-0 mx-2" role="button" href="/restaurant/id">Order again</a></p>
                    <div className="divider my-3"></div>
                    <div>
                      <h6 className="mb-10">Your order details:</h6>
                      <div className="d-flex justify-content-between px-3">
                        <p className="mb-5"><span>1x</span> Aloha Bowl</p>
                        <p className="mb-5">$ 12.00</p>
                      </div>
                      <div className="d-flex justify-content-between px-3">
                        <p className="mb-5"><span>1x</span> Aloha Bowl</p>
                        <p className="mb-5">$ 12.00</p>
                      </div>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex justify-content-between px-3 order-details">
                      <p className="mb-5">Subtotal</p>
                      <p className="mb-5">$ 24.00</p>
                    </div>
                    <div className="d-flex justify-content-between px-3 order-details">
                      <p className="mb-5">Delivery fee</p>
                      <p className="mb-5">$ 2.00</p>
                    </div>
                    <div className="order-total d-flex justify-content-between px-3">
                      <p>Total</p>
                      <p>$ 26.00</p>
                    </div>
                  </div>
                </div>

                <div className="col-4 d-flex flex-column">
                  <div className="bg-light rounded px-3 py-3">
                    <div className="property-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770)` }} />
                    <h5>Season Restaurant</h5>
                    <p className="order-details">10 May 2022<span className="px-2"> · </span> 10:30am</p>
                    <p>Liked the food?<a className="btn btn-view-menu text-decoration-underline py-0 mx-2" role="button" href="/restaurant/id">Order again</a></p>
                    <div className="divider my-3"></div>
                    <div>
                      <h6 className="mb-10">Your order details:</h6>
                      <div className="d-flex justify-content-between px-3">
                        <p className="mb-5"><span>1x</span> Aloha Bowl</p>
                        <p className="mb-5">$ 12.00</p>
                      </div>
                      <div className="d-flex justify-content-between px-3">
                        <p className="mb-5"><span>1x</span> Aloha Bowl</p>
                        <p className="mb-5">$ 12.00</p>
                      </div>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex justify-content-between px-3 order-details">
                      <p className="mb-5">Subtotal</p>
                      <p className="mb-5">$ 24.00</p>
                    </div>
                    <div className="d-flex justify-content-between px-3 order-details">
                      <p className="mb-5">Delivery fee</p>
                      <p className="mb-5">$ 2.00</p>
                    </div>
                    <div className="order-total d-flex justify-content-between px-3">
                      <p>Total</p>
                      <p>$ 26.00</p>
                    </div>
                  </div>
                </div>

                
                
                
              </div>
              
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Orders;