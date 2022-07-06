// order_success.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';

// Importing stylesheet
import './order_success.scss';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCircle, faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

class OrderSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {},
      loading: true
    }
  }

  componentDidMount() {
    const order_id = this.props.order_id;

    fetch(`/api/orders/${order_id}`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          order: data.order,
          loading: false
        })        
      })
  }

  getTotal = (subtotal, deliveryFee) => {
    let total = subtotal + deliveryFee;
    total = Number(total).toFixed(2);
    return total;
  }

  render () {
    const { order, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    };
    
    const {
      restaurant,
      user,
      delivery_user
    } = order

  return (
    <Layout>
      <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <div className="mb-70">
              <h1 className="text-center mb-10">
                Your order from <span className="order-restaurant-name text-decoration-underline">{restaurant.name}</span> is confirmed!
              </h1>
              <div className="d-flex justify-content-center">
                <p className="order-number">
                  Order ID: <span>#{order.id}</span>
                </p>
                <span className="px-2"> · </span>
                <p className="order-date">
                  Order submitted: <span>{FormatDate(order.created_at)}</span>
                </p>
                <span className="px-2"> · </span>
                <p className="order-date">
                  Order total: <span>$ {this.getTotal(order.subtotal, restaurant.delivery_fee)}</span>
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
                        {user.address}, {user.city}, {user.country}
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
                        {restaurant.delivery_time} mins
                      </h6>
                    </div>
                  </div>

                  <div className="d-flex mb-40">
                    <div className="mr-20 my-auto">
                      <span className="fa-layers fa-fw fa-3x">
                        <FontAwesomeIcon icon={faCircle} className="icon-circle" />
                        <FontAwesomeIcon  icon={faCar} transform="shrink-8"  className="icon-location-dot" />
                      </span>
                    </div>
                    <div className="mr-30">
                      <p className="order-delivery-address mb-1">
                        Delivery partner
                      </p>
                      <div className="d-flex">
                      <h6 className="mb-5">
                        {delivery_user.first_name} {delivery_user.last_name}
                      </h6>
                      <span className="mx-2"> · </span>
                      <h6>
                        <FontAwesomeIcon  icon={ faPhone } className="mr-10 icon-phone"  /> 
                        {delivery_user.phone_number}
                      </h6>
                      </div>
                    </div>
                    {/* <div className="ml-20 my-auto">
                      <span className="fa-layers fa-fw fa-2x">
                        <FontAwesomeIcon icon={faCircle} className="icon-call-circle" />
                        <FontAwesomeIcon  icon={faPhone} transform="shrink-8"  className="icon-phone" />
                      </span>
                    </div> */}
                  </div>
                  <div className="border-top pt-40 pb-10">
                    <p>
                      You can always view your order details in your order history:
                    </p>
                    <a className="btn btn-order-history text-uppercase mt-20 mb-20" 
                      href={`/user/${user.id}/orders`} 
                      role="button">
                        View order history
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-7 d-flex">
              <div className="map-area-one me-lg-4 md-mt-50">
									<div className="mapouter">
										<div className="gmap_canvas">
                      <iframe className="gmap_iframe" src={restaurant.address_url}></iframe>
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