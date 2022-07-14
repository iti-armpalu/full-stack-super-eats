// restaurants.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './restaurants.scss';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBurger, faPizzaSlice, faFish, faBowlFood, faIceCream, faMugHot, faBottleWater, faLocationDot, faDrumstickBite, faSeedling, faPepperHot } from '@fortawesome/free-solid-svg-icons';

class Restaurants extends React.Component {
  constructor() {
    super();
    this.state = { 
      restaurants: [],
      filterRestaurants: [],
      total_pages: null,
      next_page: null,
      loading: true,
    }
  }

  componentDidMount(){
    fetch('/api/restaurants')
      .then(handleErrors)
      .then(data => {
        console.log(data, 'data')
        this.setState({
          restaurants: data.restaurants,
          filterRestaurants: data.restaurants,
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }

  loadMore = () => {
    if (this.state.next_page === null) {
      return;
    }
    this.setState({ loading: true });
    fetch(`/api/restaurants?page=${this.state.next_page}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          restaurants: this.state.restaurants.concat(data.restaurants),
          filterRestaurants: this.state.restaurants.concat(data.restaurants),
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }

  handleClick = event => {
    const byType = event.target.value
    let filterRestaurants = []
    if (event.target.value === 'All'){
      filterRestaurants = this.state.restaurants
    } else {
      filterRestaurants = this.state.restaurants.filter(restaurant => restaurant.restaurant_type === byType)
    }
    this.setState({filterRestaurants: filterRestaurants})
  }

  render () {
    const { restaurants, filterRestaurants, next_page, loading } = this.state;

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">

            <div className="pb-40">
              <h3 className="mb-50">
                Categories
              </h3>
              <div className="d-flex flex-wrap justify-content-start">

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='All' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faUtensils} size="lg" className="mr-10" />
                  All food
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Burger' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faBurger} size="lg" className="mr-10" />
                  Burger
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Pizza' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faPizzaSlice} size="lg" className="mr-10" />
                  Pizza
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Chicken' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faDrumstickBite} size="lg" className="mr-10" />
                  Chicken
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Seafood' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faFish} size="lg" className="mr-10" />
                  Seafood
                </button>
                
                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Mexican' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faPepperHot} size="lg" className="mr-10" />
                  Mexican
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Salad' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faSeedling} size="lg" className="mr-10" />
                  Salad
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Bowl' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faBowlFood} size="lg" className="mr-10" />
                  Bowl
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Dessert' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faIceCream} size="lg" className="mr-10" />
                  Dessert
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Soft drinks' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faBottleWater} size="lg" className="mr-10" />
                  Soft Drinks
                </button>

                <button className="btn btn-category pl-20 pr-20 mr-20 mb-10" value='Hot beverages' onClick={this.handleClick}>
                  <FontAwesomeIcon  icon={faMugHot} size="lg" className="mr-10" />
                  Hot beverages
                </button>                
              </div>
            </div>

            <div className="row">
              {filterRestaurants.map(restaurant => {
                return (
                  <div key={restaurant.id} id={restaurant.id} className="col-6 col-lg-4 mb-40">
                    <a href={`/restaurant/${restaurant.id}`} className="d-block">
                      <div className="aspect-ratio-rectangle mb-10 rounded position-relative" style={{ backgroundImage: `url(${restaurant.image_url})` }} >
                        <div className="position-absolute restaurant-delivery-time rounded pl-10 pr-10 pt-5 pb-5 my-auto">
                          <p>{restaurant.delivery_time} mins</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <h5 className="mb-5">
                            {restaurant.name}
                          </h5>
                          <p className="restaurant-address">
                            <FontAwesomeIcon  icon={faLocationDot} className="mr-10 icon-location-dot"  />
                            {restaurant.address}, {restaurant.city}
                          </p>
                        </div>
                        <div className="col-4 text-center my-auto">
                          <h5 className="restaurant-price-range">
                            {restaurant.price_range}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
            {loading && <p>loading...</p>}
            {(loading || next_page === null) ||
              <div className="text-center">
                <button 
                  className="btn btn-load-more text-uppercase pl-30 pr-30 mt-60 mb-30" 
                  onClick={this.loadMore}>
                    Load more
                </button>
              </div>
            }
          </div>
        </div>
      </Layout>
    )
  }
}

export default Restaurants;