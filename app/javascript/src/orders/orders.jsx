// restaurants.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';

// Importing stylesheet
import './orders.scss';

class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userOrders: []
    }
  }

  componentDidMount() {
    this.getUserOrders()
  }

  getUserOrders() {
    const user_id = this.props.user_id;

    fetch(`/api/users/${user_id}/orders`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userOrders: data.orders,
        })
      })
  }

  getTotal = (subtotal, deliveryFee) => {
    let total = subtotal + deliveryFee;
    total = total.toFixed(2);
    return total;
  }

  render () {
    const { userOrders } = this.state;

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <h3 className="mb-50">My orders</h3>
              <div className="row">
              {userOrders.map(order => {
                return (
                  <div key={order.id} id={order.id} className="col-4 d-flex flex-column mb-20">
                    <div className="bg-light rounded px-3 py-3">
                      <div className="aspect-ratio-rectangle rounded mb-10" style={{ backgroundImage: `url(${order.restaurant.image_url})` }} />
                      <h5 className="mb-5">{order.restaurant.name}</h5>
                      <p className="order-details mb-10">{FormatDate(order.created_at)}</p>
                      <p>Liked what you ordered?<a className="btn btn-view-menu text-decoration-underline py-0 mx-2" role="button" href={`/restaurant/${order.restaurant.id}`} >Order again</a></p>
                      <div className="divider my-3"></div>
                      <div>
                        <h6 className="mb-10">Your order details:</h6>
                        <div className="d-flex justify-content-between px-3 order-details">
                          <p className="mb-5">Subtotal</p>
                          <p className="mb-5">$ {Number(order.total).toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between px-3 order-details">
                          <p className="mb-5">Delivery fee</p>
                          <p className="mb-5">$ {Number(order.restaurant.delivery_fee).toFixed(2)}</p>
                        </div>
                        <div className="order-total d-flex justify-content-between px-3">
                          <p><b>Total</b></p>
                          <p><b>$ {this.getTotal(order.total, order.restaurant.delivery_fee)}</b></p>
                        </div>
                        </div>
                    </div>
                  </div>
                )
              })}
              </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Orders;