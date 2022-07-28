// basket.jsx
import React, { Fragment, useState } from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

class Basket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
    }
  }

  // Increase the quantity on click and update the database
  increaseQuantity = (e, id) => {
    e.preventDefault();

    let currentQuantityEl = document.querySelector('.item-qty')
    let currentQuantity = Number(currentQuantityEl.innerHTML)
    let addQuantity = currentQuantity + 1

    fetch(`/api/orders_positions/${id}`, safeCredentials({
      method: 'PATCH',
      body: JSON.stringify({
        orders_position: {
          quantity: addQuantity,
        }
      })
    }))
    .then(handleErrors)
    .then(data => {
      // console.log('data', data)
      this.props.getOrdersPositions()
    })
    .catch(error => {
      this.setState({
        error: 'Could not update quantity.',
      })
    })
  }

  // Decrease the quantity on click and update the database
  decreaseQuantity = (e, id) => {
    e.preventDefault();

    let currentQuantityEl = document.querySelector('.item-qty')
    let currentQuantity = Number(currentQuantityEl.innerHTML)
    let removeQuantity = currentQuantity - 1

    if (removeQuantity < 1) {
      return removeQuantity = 1
    };

    fetch(`/api/orders_positions/${id}`, safeCredentials({
      method: 'PATCH',
      body: JSON.stringify({
        orders_position: {
          quantity: removeQuantity,
        }
      })
    }))
    .then(handleErrors)
    .then(data => {
      // console.log('data', data)
      this.props.getOrdersPositions()
    })
    .catch(error => {
      this.setState({
        error: 'Could not update quantity.',
      })
    })
  }

  // Delete item in the basket, and refresh the basket's orders positions
  deleteOrdersPosition = (e, id) => {
    e.preventDefault();

    fetch(`/api/orders_positions/${id}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.props.getOrdersPositions()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete entry.',
        })
      })
  }

  // Delete orders_positions after new order is created
  deleteOrdersPositionsAll = (e) => {
    e.preventDefault();
    const restaurant_id = this.props.restaurant_id;

    fetch(`/api/restaurants/${restaurant_id}/orders_positions`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete entries.',
        })
      })
  }

  // Calculate subtotal of the item in the basket
  getItemSubtotal = (price, quantity) => {
    let itemSubtotal = price * quantity;
    itemSubtotal = itemSubtotal.toFixed(2);
    return itemSubtotal
  }

  // Calculate total
  getTotal = (subtotal, deliveryFee) => {
    let total = subtotal + deliveryFee;
    total = Number(total).toFixed(2);
    return total;
  }

  // Submit an order
  submitOrder = (e) => {
    if (e) { e.preventDefault(); }

    fetch(`/api/orders`, safeCredentials({
      method: 'POST',
        body: JSON.stringify({
          order: {
            restaurant_id: this.props.restaurant_id,
            subtotal: this.props.subtotal
          }
        })
    }))
      .then(handleErrors)
      .then(response => {
        this.deleteOrdersPositionsAll(e)
        return this.initiateStripeCheckout(response.order.id)
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Initiate Stripe checkout
  initiateStripeCheckout = (order_id) => {
    return fetch(`/api/charges?order_id=${order_id}&cancel_url=${window.location.pathname}`, safeCredentials({
      method: 'POST',
    }))
      .then(handleErrors)
      .then(response => {
        const stripe = Stripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);
        stripe.redirectToCheckout({
          sessionId: response.charge.checkout_session_id,
        })
        .then((result) => {
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {
    const { orderPositions, delivery_fee, authenticated } =this.props;

    if (!authenticated) {
      return (
        <div className="bg-basket px-3 py-5 text-center">
          Please <a href={`/login?redirect_url=${window.location.pathname}`} className="text-decoration-underline">log in</a> to order.
        </div>
      );
    };

    return (
      <React.Fragment>
        <div className="bg-basket px-3 py-3">
          <h5 className="py-3">
            Your current basket:
          </h5>

          {(orderPositions.length != 0)

          ?
          <div>  
            {orderPositions.map( (item) => {
              return (
                <div 
                  key={item.id} 
                  id={item.id} 
                  className="row gx-0 d-flex justify-content-end align-items-center text-center mt-20 mb-20">
                    <div className="col">
                      <p className="text-start ml-10">
                        {item.food.name}
                      </p>
                    </div>
                    <div className="col-2">
                      <p className="text-start ml-10">
                        $ {item.food.price}.00
                      </p>
                    </div>
                    <div className="col-3 d-flex justify-content-center my-auto mx-auto">
                      <button type="button"
                        onClick={(e) => {this.decreaseQuantity(e, item.id);}}>
                          <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <p className="item-qty mx-2">
                        {item.quantity}
                      </p>
                      <button type="button"
                        onClick={ (e) => {this.increaseQuantity(e, item.id);}}>
                          <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="col-2">
                      <p className="food-subtotal">
                        $ {this.getItemSubtotal(item.food.price, item.quantity)}
                      </p>
                    </div>
                    <div className="col-1">
                      <button className="btn btn-remove" 
                        onClick={ (e) => {this.deleteOrdersPosition(e, item.id);}}>
                          <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                </div>
              )
            })}

            <form onSubmit={this.submitOrder}>
              <div className="divider-basket my-3"></div>
              <div className="row text-end py-2 pr-30">
                <div className="col">
                  <h6>
                    Subtotal:
                  </h6>
                </div>
                <div className="col-4">
                  <h6>
                    $ {Number(this.props.subtotal).toFixed(2)}
                  </h6>
                </div>
              </div>
              <div className="row text-end py-2 pr-30">
                <div className="col">
                  <h6>
                    Delivery fee:
                  </h6>
                </div>
                <div className="col-4">
                  <h6>
                    $ {Number(delivery_fee).toFixed(2)}
                  </h6>
                </div>
              </div>
              <div className="row text-end py-2 pr-30">
                <div className="col">
                  <h5>
                    Total:
                  </h5>
                </div>
                <div className="col-4">
                  <h5>
                    $ {this.getTotal(this.props.subtotal, delivery_fee)}
                  </h5>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center my-5">
                <button type="submit" className="btn btn-place-order text-uppercase pl-30 pr-30 pt-10 pb-10 mx-auto">
                  Submit order
                </button>
              </div>
            </form>
          </div>

          :
          <div className="text-center">
            <p className="py-4 mb-0">
              You don't have any items in your basket at the moment.
            </p>
          </div>
        }
        </div>
      </React.Fragment>
      );
    }
}

export default Basket