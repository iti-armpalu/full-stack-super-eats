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


  updateTotal = () => {
    let basketTotal = [];
    let subtotal = [24, 24, 24];

    for (var i = 0; i < subtotal.length; i++) {
      basketTotal.push(subtotal[i]);
    }

    let subtotalSum = basketTotal.reduce( (acc, x) => acc + x )
    
    if (subtotalSum === 0) {
      return 0;
    } else {
      return subtotalSum;;
    }
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
                        <div className="d-flex justify-content-between px-3">
                          <p className="mb-5"><span>1x </span>Aloha Bowl</p>
                          <p className="mb-5">$ 12.00</p>
                        </div>
                      </div>
                      <div className="divider my-3"></div>
                      <div className="order-total d-flex justify-content-between px-3">
                        <p>Total</p>
                        <p>$ {this.updateTotal()}.00</p>
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