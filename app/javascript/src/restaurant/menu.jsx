// menu.jsx
import React, { Fragment } from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faClock,  } from '@fortawesome/free-solid-svg-icons';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantFoods: [],
      quantity: null,
      isAdded: false,
    }
  }

  componentDidMount() {
    this.getRestaurantFoods()
  }

// Get all the foods from the database that belong to this restaurant
  getRestaurantFoods() {
    const restaurant_id = this.props.restaurant_id;
    console.log(restaurant_id)

    fetch(`/api/restaurants/${restaurant_id}/foods`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          restaurantFoods: data.foods,
        })
      })
  }

  // Add food item to the basket, default value = 1, if the item is already in the basket, increase quantity by 1
  addToBasket = (e, foodId) => {
    if (e) { e.preventDefault(); }

    fetch(`/api/orders_positions`, safeCredentials({
      method: 'POST',
        body: JSON.stringify({
          orders_position: {
            restaurant_id: this.props.restaurant_id,
            food_id: foodId,
            quantity: 1,
            
          }
        })
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.props.getOrdersPositions()
        this.setState({
          isAdded: true,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  isInBasket = (foodId) => {
    let basketItems = this.props.orderPositions;
    return basketItems.some(item => item.food.id === foodId)

  }

  render () {
    const { restaurantFoods, isAdded } = this.state;
    const { authenticated } = this.props;

    return (
      <React.Fragment>

        <div className="row">

          {restaurantFoods.map( food => {
            return (
            <div key={food.id} id={food.id} className="col-12 mb-40">
              <div className="row gx-lg-5">

                <div className="col-6 col-md-3 order-2 order-md-1">
                  <div className="food-image rounded" style={{ backgroundImage: `url(${food.image_url})` }} />
                </div>
                  
                
                <div className="col-6 col-md-6 my-auto order-1 order-md-2">
                  <h5 className="food-name mb-10 mb-lg-20">
                    <b>{food.name}</b>
                  </h5>
                  <p className="food-description mb-10 mb-lg-20">
                    {food.description}
                  </p>
                  <h5 className="food-price">$ {food.price}.00</h5>
                </div>

                <div className="col-12 col-md-3 pt-20 pb-20 my-md-auto order-3 food-divider">
                  {(authenticated)

                  ?
                  <div>
                    {!(this.isInBasket(food.id) )

                    ?
                    <button className="btn btn-add-basket text-decoration-underline py-0 mx-auto"
                      onClick={ (e) => {this.addToBasket(e, food.id);}}>
                      Add to basket
                    </button>

                    :
                    <p className="text-item-added py-0 px-lg-2 mx-auto">
                      <FontAwesomeIcon icon={ faCheck } className="mr-5" />
                    Item added</p>
                    }
                  </div>

                  :
                  <button className="btn btn-add-basket text-decoration-underline py-0 mx-auto"
                    onClick={ (e) => {this.addToBasket(e, food.id);}} disabled>
                      Add to basket
                  </button>

                  
                  }
                  
                </div>

              </div>
            </div>
          )
          })}

        </div>
        
          
      </React.Fragment>
      );
  }
}

export default Menu