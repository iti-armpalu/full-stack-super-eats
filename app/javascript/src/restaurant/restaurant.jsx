// restaurant.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTrashCan } from '@fortawesome/free-solid-svg-icons';

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {},
      restaurantFoods: [],
      quantity: '',
    }
  }

  componentDidMount() {
    this.getRestaurantData()
    this.getRestaurantFoods()
  }

  getRestaurantData() {
    const restaurantId = this.props.restaurant_id;
    console.log(restaurantId)

    fetch(`/api/restaurants/${restaurantId}`)
    .then(handleErrors)
    .then(data => {
      console.log('data', data)
      console.log(process.env.STRIPE_PUBLISHABLE_KEY)
      this.setState({
        restaurant: data.restaurant,
        loading: false,
      })
    })
  }

  getRestaurantFoods() {
    const restaurantId = this.props.restaurant_id;
    console.log(restaurantId)

    fetch(`/api/restaurants/${restaurantId}/foods`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          restaurantFoods: data.foods,
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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

  submitOrder = (e) => {
    if (e) { e.preventDefault(); }

    fetch(`/api/orders`, safeCredentials({
      method: 'POST',
        body: JSON.stringify({
          order: {
            restaurant_id: this.props.restaurant_id,
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
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
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
    const { restaurant, restaurantFoods, quantity } = this.state;

  return (
    <Layout>
      <div className="mt-80 pb-40">
        <div className="pl-40 pr-40">
          <div className="restaurant-image mb-10 rounded position-relative" style={{ backgroundImage: `url(${restaurant.image_url})` }} >

            <div className="position-absolute restaurant-delivery-time rounded pl-10 pr-10 pt-5 pb-5 my-auto">
              <p>{restaurant.delivery_time}</p>
            </div>

            <div className="position-absolute restaurant-details rounded pl-20 pr-20 pt-10 pb-10 my-auto">
              <h4 className="mb-5">{restaurant.name}</h4>
              <p className="restaurant-address">
                <FontAwesomeIcon  icon={faLocationDot} className="mr-10 icon-location-dot"  />
                {restaurant.address}, {restaurant.city}, {restaurant.country}
              </p>
              <p>Open: {restaurant.opening_time}:00 am - {restaurant.closing_time}:00 pm </p>
            </div>
          </div>

            <div className="row mt-80 mb-40">

            {restaurantFoods.map(food => {
              return (
              <div key={food.id} id={food.id} className="col-12 mb-40">
                <div className="row gx-5">

                  <div className="col-3">
                    <div className="food-image rounded" style={{ backgroundImage: `url(${food.image_url})` }} />
                  </div>
                    
                  
                  <div className="col-6 my-auto">
                    <h5 className="mb-20"><b>{food.name}</b></h5>
                    <p className="mb-20">
                    {food.description}
                    </p>
                    <h5 className="food-price">USD {food.price}.00</h5>
                  </div>

                  <div className="col-2 my-auto mx-auto">
                    <form>
                      <div className="text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label mb-20">Quantity</label>
                        <input type="number" className="form-control w-50 mx-auto" id="exampleInputEmail1" name="quantity" value={quantity} onChange={this.handleChange}  />
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            )
          })}

            </div>

            {/* If food.id user input > 0, then add to the basket */}
            <div className="mt-80 mb-40">
              <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                <h6>My basket</h6>
              <div className="rounded bg-light px-5 py-5">

                <div className="row d-flex justify-content-end align-items-center text-center mb-20">
                  <div className="col">
                    <p>2x</p>
                  </div>
                  <div className="col">
                    <p>Aloha Bowl</p>
                  </div>
                  <div className="col">
                    <div className="food-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702)` }} />
                  </div>
                  <div className="col">
                    <p className="food-subtotal">USD 24.00</p>
                  </div>
                  <div className="item-remove col">
                  <button className="btn btn-remove">
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    </button>
                  </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center text-center mb-20">
                  <div className="col">
                    <p>2x</p>
                  </div>
                  <div className="col">
                    <p>Aloha Bowl</p>
                  </div>
                  <div className="col">
                    <div className="food-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702)` }} />
                  </div>
                  <div className="col">
                    <p className="food-subtotal">USD 24.00</p>
                  </div>
                  <div className="item-remove col">
                  <button className="btn btn-remove">
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    </button>
                  </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center text-center mb-20">
                  <div className="col">
                    <p>2x</p>
                  </div>
                  <div className="col">
                    <p>Aloha Bowl</p>
                  </div>
                  <div className="col">
                    <div className="food-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702)` }} />
                  </div>
                  <div className="col">
                    <p className="food-subtotal">USD 24.00</p>
                  </div>
                  <div className="item-remove col">
                    <button className="btn btn-remove">
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    </button>
                  </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center text-center pt-20 pb-20">
                  <div className="col">
                    <h4>Total</h4>
                  </div>
                  <div className="col">
                    <h4 className="total-price">USD {this.updateTotal()}.00</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  {/* <a className="btn btn-place-order text-uppercase pl-30 pr-30 pt-10 pb-10 mx-auto" href="/order/id/success" role="button">Place order</a> */}
                <form onSubmit={this.submitOrder}>
                  <button type="submit" className="btn btn-place-order text-uppercase pl-30 pr-30 pt-10 pb-10 mx-auto">Submit order</button>
                </form>
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

export default Restaurant