// business_restaurants.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Importing stylesheet
import './business_restaurants.scss';

class BusinessRestaurants extends React.Component {

  businessRestaurants = [
    {
      id: 1,
      name: "Season Restaurant",
      address: "Cool Street, New York",
      type: "Bowl",
      opening_time: "9",
      closing_time: "10",
      image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
    }
  ]




  render () {


    return (
      <Layout>
         <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">

          <div className="d-flex justify-content-between align-items-center mb-50">
            <h3 className="mb-0">My restaurant listings</h3>
            <a className="btn btn-my-bookings p-2 mx-2" role="button" href={`/business/add-restaurant`}><FontAwesomeIcon icon={ faPlus } className="mr-10" />Add a new restaurant</a>
          </div>

          <div className="row">
        

          {(this.businessRestaurants.length != 0)
          
          ?
          <div>
            {this.businessRestaurants.map(restaurant => {
              return (
                <div key={restaurant.id} id={restaurant.id} className="col-4">
                
                    
                      <div className="property-image rounded" style={{ backgroundImage: `url(${restaurant.image_url})` }} />
                      <h5 className="mb-2">{restaurant.name}</h5><div className="d-flex">
                          <a className="btn btn-danger btn-sm btn-edit mr-2 mt-2" role="button" href={`/business`}>Edit property</a>
                          <a className="btn btn-danger btn-sm btn-edit mr-2 mt-2" role="button" href={`/business`}>View property reservations</a>
                          <button type="submit" className="btn btn-danger btn-sm btn-delete ml-auto mr-2 mt-2">Delete property</button>
                        </div>
                      
                    
                
                </div>
              )
            })}
          </div>

          :
          <div className="border border-secondary rounded text-center">
            <p className="py-4 mb-0">You don't have any active restaurants at the moment.</p>
          </div>
          }
              
              </div>
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default BusinessRestaurants;