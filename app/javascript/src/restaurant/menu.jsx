// menu.jsx
import React, { Fragment } from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus,  } from '@fortawesome/free-solid-svg-icons';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantFoods: [],
      quantity: null,
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
            food_id: foodId,
            quantity: 1,
          }
        })
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
      })
      .catch(error => {
        console.log(error);
      })
  }


  render () {
    const { restaurantFoods } = this.state;
    return (
      <React.Fragment>

        <div className="row">

          {restaurantFoods.map( food => {
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

                <div className="col-3 my-auto">
                  <button 
                  className="btn btn-add-basket text-decoration-underline py-0 mx-auto" 
                  onClick={ (e) => {this.addToBasket(e, food.id);}}>
                    Add to basket
                  </button>
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