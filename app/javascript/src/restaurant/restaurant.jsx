// restaurant.jsx
import React from 'react';
import Layout from '@src/layout';
import Menu from './menu';
import Basket from './basket';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClock, faLocationDot, faBurger, faPizzaSlice, faDrumstickBite,faFish, faPepperHot, faSeedling, faBowlFood, faIceCream, faBottleWater, faMugHot } from '@fortawesome/free-solid-svg-icons';

library.add(faBurger, faPizzaSlice, faDrumstickBite, faFish, faPepperHot, faSeedling, faBowlFood, faIceCream, faBottleWater, faMugHot);

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {},
      delivery_fee: '',
      authenticated: false,
      orderPositions: [],
      subtotal: null,
    }
  }

  componentDidMount() {
    this.getRestaurantData()
    this.authenticate()
    this.getOrdersPositions()
  }

  // Authenticate user before showing itms in the basket
  authenticate = () => {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  getRestaurantData() {
    const restaurant_id = this.props.restaurant_id;
    console.log(restaurant_id)

    fetch(`/api/restaurants/${restaurant_id}`)
    .then(handleErrors)
    .then(data => {
      console.log('data', data)
      console.log(process.env.STRIPE_PUBLISHABLE_KEY)
      this.setState({
        restaurant: data.restaurant,
        delivery_fee: data.restaurant.delivery_fee,
        loading: false,
      })
    })
  }

  // Get all the basket's orders positions
  getOrdersPositions = () => {
    const restaurant_id = this.props.restaurant_id;

    fetch(`/api/restaurants/${restaurant_id}/orders_positions`)
      .then(handleErrors)
      .then(data => {
        console.log(data, "data")
        const subtotal = (data.orders_positions).reduce((accumulator,current) => accumulator + current.food.price * current.quantity, 0)
        this.setState({
          orderPositions: data.orders_positions,
          subtotal: subtotal,
        })
      })
  }

  render () {
    const { restaurant, delivery_fee, authenticated } = this.state;
    const { restaurant_id } = this.props;

  return (
    <Layout>
      <div className="mt-80 pb-40">
        <div className="container">
          <div>
            <a href="/restaurants">
                <FontAwesomeIcon icon={ faChevronLeft } className="mr-10" />
                Back to restaurants
            </a>
          </div>
          <div className="d-block d-lg-flex align-items-center pt-30 pb-20">
            <h2 className="mb-20 mb-lg-0">
              {restaurant.name}
            </h2>
            <span className="d-none d-lg-block mx-3"> · </span>
            <p className="mb-5 mb-lg-0">
              <FontAwesomeIcon icon={restaurant.type_icon} className="mr-10 icon-food-type" />
              {restaurant.restaurant_type}
            </p>
            <span className="d-none d-lg-block mx-3"> · </span>
            <p className="mb-5 mb-lg-0">
              <FontAwesomeIcon  icon={faLocationDot} className="mr-10 icon-location-dot"  />
              {restaurant.address}, {restaurant.city}, {restaurant.country}
            </p>
            <span className="d-none d-lg-block mx-3"> · </span>
            <p className="mb-5 mb-lg-0">
            <FontAwesomeIcon  icon={ faClock } className="mr-10 icon-clock"  /> 
            {restaurant.opening_time}:00 am - {restaurant.closing_time}:00 pm
            </p>
          </div>
          <div className="restaurant-image mb-10 rounded position-relative" style={{ backgroundImage: `url(${restaurant.image_url})` }} >

            <div className="position-absolute restaurant-delivery-time rounded pl-10 pr-10 pt-5 pb-5 my-auto">
              <p>
                {restaurant.delivery_time} mins
              </p>
            </div>
          </div>
          
          <div className="row mt-80 mb-40">
            <div className="col-12 col-xl-8">
              <Menu restaurant_id={this.props.restaurant_id} authenticated={authenticated} getOrdersPositions={this.getOrdersPositions} orderPositions={this.state.orderPositions}/>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto mx-xl-0 pt-20 pt-xl-0">
              <Basket restaurant_id={restaurant_id} delivery_fee={delivery_fee} authenticated={authenticated} getOrdersPositions={this.getOrdersPositions} orderPositions={this.state.orderPositions} subtotal={this.state.subtotal}/>
            </div>
          </div>            
        </div>
      </div>
    </Layout>
    );
  }
}

export default Restaurant