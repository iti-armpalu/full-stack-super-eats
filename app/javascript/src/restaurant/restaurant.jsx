// restaurant.jsx
import React from 'react';
import Layout from '@src/layout';
import Menu from './menu';
import Basket from './basket';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {},
      delivery_fee: '',
    }
  }

  componentDidMount() {
    this.getRestaurantData()
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

  render () {
    const { restaurant, delivery_fee } = this.state;
    const { restaurant_id } = this.props;

  return (
    <Layout>
      <div className="mt-80 pb-40">
        <div className="pl-40 pr-40">
          <div className="restaurant-image mb-10 rounded position-relative" style={{ backgroundImage: `url(${restaurant.image_url})` }} >

            <div className="position-absolute restaurant-delivery-time rounded pl-10 pr-10 pt-5 pb-5 my-auto">
              <p>{restaurant.delivery_time} mins</p>
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
            <div className="col-8">
              <Menu restaurant_id={this.props.restaurant_id} />
            </div>
            <div className="col-4">
              <Basket restaurant_id={restaurant_id} delivery_fee={delivery_fee} />
            </div>
          </div>            
        </div>
      </div>
    </Layout>
    );
  }
}

export default Restaurant