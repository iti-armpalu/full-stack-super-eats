// basket.jsx
import React, { Fragment } from 'react';
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
      orderPositions: [],
      total: null,
      quantity: null,
    }
  }

  componentDidMount() {
    this.getOrdersPositions()
  }

  getOrdersPositions() {
    fetch(`/api/orders_positions`)
      .then(handleErrors)
      .then(data => {
        console.log(data, "data")
        const total = (data.orders_positions).reduce((accumulator,current) => accumulator + current.food.price * current.quantity, 0)
        this.setState({
          orderPositions: data.orders_positions,
          total: total,
        })
      })
  }

  handleChange = (e) => {
    // const { orderPositions } = this.state;
    // const name = orderPositions[index].name;

    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  // increaseQuantity = (e, id) => {
  //   e.preventDefault();

  //   const { orderPositions } = this.state;
  //   const quantity = orderPositions[index].quantity;
  //   this.setState({
  //     quantity: this.state.quantity + 1
  //   });
  // }

  decreaseQuantity = (e, id) => {
    e.preventDefault();
      this.setState(prevState => ({
        quantity: prevState.quantity ? this.state.quantity - 1 : 0
      }))
  }

  increaseQuantity = (e, id) => {
    e.preventDefault();

    fetch(`/api/orders_positions/${id}`, safeCredentials({
      method: 'PATCH',
      body: JSON.stringify({
        orders_position: {
          quantity: this.state.quantity + 1,
        }
      })
    }))
    .then(handleErrors)
    .then(data => {
      console.log('data', data)
    })
    .catch(error => {
      this.setState({
        error: 'Could not update quantity.',
      })
    })

  }

  getSubtotal = (price, quantity) => {
    let subtotal = price * quantity;
    subtotal = subtotal.toFixed(2);
    return subtotal
  }

  deleteOrdersPosition = (e, id) => {
    e.preventDefault();

    fetch(`/api/orders_positions/${id}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.getOrdersPositions()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete entry.',
        })
      })
  }


  submitOrder = (e) => {
    if (e) { e.preventDefault(); }

    fetch(`/api/orders`, safeCredentials({
      method: 'POST',
        body: JSON.stringify({
          order: {
            restaurant_id: this.props.restaurant_id,
            total: this.state.total,
          }
        })
    }))
      .then(handleErrors)
      .then(response => {
        return this.initiateStripeCheckout(response.order.id)
      })
      .catch(error => {
        console.log(error);
      })
  }

  initiateStripeCheckout = (order_id) => {
    return fetch(`/api/charges?order_id=${order_id}&cancel_url=${window.location.pathname}`, safeCredentials({
      method: 'POST',
    }))
      .then(handleErrors)
      .then(response => {
        const stripe = Stripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);
        stripe.redirectToCheckout({
          sessionId: response.charge.checkout_session_id,
        }).then((result) => {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {
    const { orderPositions, total } = this.state;

    return (
      <React.Fragment>
        <div className="bg-basket px-3 py-3">
          <h6 className="py-3">Your current basket</h6>
            
              {orderPositions.map( (item) => {
                return (
                  <div key={item.id} id={item.id} className="row gx-0 d-flex justify-content-end align-items-center text-center mb-20">
                    <div className="col">
                      <p className="text-start ml-10">{item.food.name}</p>
                    </div>
                    <div className="col-2">
                      <p className="text-start ml-10">$ {item.food.price}.00</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center my-auto mx-auto">
                      <button type="button" className="btn-plus-minus" 
                      onClick={(e) => this.decreaseQuantity}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <p className="mx-2">{item.quantity}</p>
                      {/* <input className="input-qty form-control text-center" 
                        type="text"
                        name={`${item.id}`}
                        value={quantity}
                        onChange={this.handleChange}
                        onChange={ (e) => {this.handleChange(e, index);}}
                      /> */}
                      <button type="button" className="btn-plus-minus" 
                      onClick={ (e) => {this.increaseQuantity(e, item.id);}}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="col-2">
                      <p className="food-subtotal">$ {this.getSubtotal(item.food.price, item.quantity)}</p>
                    </div>
                    <div className="col-1 item-remove">
                      <button className="btn btn-remove" onClick={ (e) => {this.deleteOrdersPosition(e, item.id);}}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>
                )
              })}
                  

              <form onSubmit={this.submitOrder}>
                <div className="row d-flex justify-content-end align-items-center text-center pt-20 pb-20">
                  <div className="col">
                    <h4>Total</h4>
                  </div>
                  <div className="col">
                    <h4 className="total-price">$ {Number(total).toFixed(2)}</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                  <button type="submit" className="btn btn-place-order text-uppercase pl-30 pr-30 pt-10 pb-10 mx-auto">Submit order</button>
                </div>
              </form>
            </div>
      </React.Fragment>
      );
    }
}

export default Basket