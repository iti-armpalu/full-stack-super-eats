// restaurants.jsx
import React from 'react';

import Layout from '@src/layout';

// Importing stylesheet
import './restaurants.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faUtensils, faBurger, faPizzaSlice, faFish, faBowlFood, faIceCream, faMugHot, faBottleWater, faMapPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';

class Restaurants extends React.Component {
  constructor() {
    super();
    this.state = { restaurants: [
  {
    id: 1,
    name: "Season Restaurant",
    address: "Cool Street, New York",
    type: "Bowl",
    opening_time: "9",
    closing_time: "10",
    image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
  },
  {
    id: 2,
    name: "Pizza Hut",
    address: "Cool Street, New York",
    type: "Pizza",
    opening_time: "9",
    closing_time: "6",
    image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069"
  },
  {
    id: 3,
    name: "High Joint",
    address: "Cool Street, New York",
    type: "Burger",
    opening_time: "9",
    closing_time: "10",
    image_url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
  },
],
  filterRestaurant: []
    }
  }


  componentDidMount(){
    this.setState({
      filterRestaurant: this.state.restaurants
    })
  }

  handleClick = event => {
    const byType = event.target.value
    let filterRestaurant = []
    if(event.target.value === 'all'){
      filterRestaurant = this.state.restaurants
    } else{
      filterRestaurant = this.state.restaurants.filter(restaurant => restaurant.type === byType)
    }
    
    this.setState({filterRestaurant: filterRestaurant})

  }

  // restaurantListings = [
  //   {
  //     id: 1,
  //     name: "Season Restaurant",
  //     address: "Cool Street, New York",
  //     type: "Bowl",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
  //   },

  //   {
  //     id: 2,
  //     name: "Pizza Hut",
  //     address: "Cool Street, New York",
  //     type: "Pizza",
  //     opening_time: "9",
  //     closing_time: "6",
  //     image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069",
  //   },
  //   {
  //     id: 3,
  //     name: "High Joint",
  //     address: "Cool Street, New York",
  //     type: "Burger",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
  //   },
  //   {
  //     id: 4,
  //     name: "Fish Taverna",
  //     address: "Cool Street, New York",
  //     type: "Seafood",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
  //   },
  //   {
  //     id: 5,
  //     name: "Mr. Nice Coffee",
  //     address: "Cool Street, New York",
  //     type: "Hot beverages",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
  //   },
  //   {
  //     id: 6,
  //     name: "Pink Donuts",
  //     address: "Cool Street, New York",
  //     type: "Dessert",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
  //   },
  //   {
  //     id: 7,
  //     name: "Pickl",
  //     address: "Cool Street, New York",
  //     type: "Burger",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674",
  //   },
  //   {
  //     id: 8,
  //     name: "Seaside Restaurant",
  //     address: "Cool Street, New York",
  //     type: "Seafood",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652",
  //   },
  //   {
  //     id: 9,
  //     name: "Dashing Desserts",
  //     address: "Cool Street, New York",
  //     type: "Dessert",
  //     opening_time: "9",
  //     closing_time: "10",
  //     image_url: "https://images.unsplash.com/photo-1567941723610-db0bcb4cca67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
  //   },
  // ]
  

  render () {

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">

            <div className="pb-40">
              <h3 className="mb-50">Categories</h3>
              <div className="d-flex  justify-content-between">


              <button className="btn btn-danger mt-20" value='Pizza' onClick={this.handleClick}>
                <FontAwesomeIcon  icon={faPizzaSlice} />
                Pizza
              </button>



                <button value="Pizza" onClick={this.handleClick}>
                    <span className="fa-layers fa-fw fa-5x">
                      <FontAwesomeIcon icon={faSquare} className="category-square" />
                      <FontAwesomeIcon  icon={faUtensils} transform="shrink-8"/>
                    </span>
                    <p className="text-center">All food</p>
                </button>



                <a href="#">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faBurger} transform="shrink-8" />
                  </span>
                  <p className="text-center">Burger</p>
                </a>



                <a href="#">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faPizzaSlice} transform="shrink-8" />
                  </span>
                  <p className="text-center">Pizza</p>
                </a>



                <a href="#" className="mr-20">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faFish} transform="shrink-8" />
                  </span>
                  <p className="text-center">Fish</p>
                </a>


                <a href="#">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faBowlFood} transform="shrink-8" />
                  </span>
                  <p className="text-center">Bowl</p>
                </a>

                <a href="#">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faIceCream} transform="shrink-8" />
                  </span>
                  <p className="text-center">Dessert</p>
                </a>

                <a href="#">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faBottleWater} transform="shrink-8" />
                  </span>
                  <p className="text-center">Soft drinks</p>
                </a>

                <a href="#">
                  <span className="fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faSquare} className="category-square" />
                    <FontAwesomeIcon  icon={faMugHot} transform="shrink-8" />
                  </span>
                  <p className="text-center">Hot beverages</p>
                </a>
              </div>

            </div>

            <div className="row">

            {this.state.filterRestaurant.map(restaurant => {
              return (
              <div key={restaurant.id} className="col-6 col-lg-4 mb-40">

                  <div className="property-image mb-10 rounded position-relative" style={{ backgroundImage: `url(${restaurant.image_url})` }} >
                    <div className="position-absolute restaurant-delivery-time rounded pl-10 pr-10 pt-5 pb-5 my-auto">
                      <p className="mb-0">20 - 30 min</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <h5 className="mb-5">{restaurant.name}</h5>
                      <p className="mb-0 restaurant-address">
                        <FontAwesomeIcon  icon={faLocationDot} className="mr-10 icon-location-dot"  />
                        27601 Brandford, New York
                      </p>
                    </div>
                    <div className="col-4 text-center my-auto">
                      <h5 className="restaurant-price-range">$20 - $70</h5>
                    </div>
                  </div>

              </div>
            )
          })}

            </div>

            <div className="text-center">
              <button className="btn btn-load-more text-uppercase pl-30 pr-30 mt-60 mb-30">
                  Load more
              </button>
            </div>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Restaurants;