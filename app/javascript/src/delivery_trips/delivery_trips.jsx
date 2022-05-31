// delivery_trips.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';

// Importing stylesheet
import './delivery_trips.scss';

class DeliveryTrips extends React.Component {

  trips = [
    {
      id: 1,
      date: "15 May 2022",
      restaurant: {
        id: 1,
        name: "Season Restaurant",
        address: "Cool Street, New York",
        delivery_fee: 4,
      },
      user: {
        id: 1,
        first_name: "Ken",
        last_name: "Adams",
        address: "Nice Street, New York",
      }
    },
    {
      id: 2,
      date: "10 May 2022",
      restaurant: {
        id: 1,
        name: "Pink Donuts",
        address: "Cool Street, New York",
        delivery_fee: 5,
      },
      user: {
        id: 1,
        first_name: "Lisa",
        last_name: "Kudrow",
        address: "Nice Street, New York",
      }
    },
    {
      id: 3,
      date: "8 May 2022",
      restaurant: {
        id: 1,
        name: "Fish Taverna",
        address: "Cool Street, New York",
        delivery_fee: 6,
      },
      user: {
        id: 1,
        first_name: "Jack",
        last_name: "Sparrow",
        address: "Nice Street, New York",
      }
    },
  ]


  render () {

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <h3 className="mb-50">My trips</h3>

            {(this.trips.length != 0)

              ?
              <div>
                <div className="reservations-header-row p-4 mb-20 border-bottom">
                  <div className="row no-gutters d-flex justify-content-between align-items-center text-center">
                    <div className="col-1">
                      <p className="mb-2">Trip ID</p>
                    </div>
                    <div className="col-2">
                      <p className="mb-2">Trip date</p>
                    </div>
                    <div className="col-3">
                    
                      <p className="mb-2">Pick-up details</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-2">Drop-off details</p>
                    </div>
                    <div className="col-2">
                      <p className="mb-2">Trip earning</p>
                    </div>
                  </div>
                </div>
                
                {this.trips.map(trip => {
                  return (
                    <div key={trip.id} id={trip.id} className="trips-wrap p-4 mb-20 rounded">
                      <div className="row no-gutters d-flex justify-content-between align-items-center text-center">
                        <div className="col-1">
                          <p className="mb-2"># {trip.id}</p>
                        </div>
                        <div className="col-2">
                          <p className="mb-2">{trip.date}</p>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <p className="mb-5">{trip.restaurant.name}</p>
                            <p className="mb-10">{trip.restaurant.address}</p>
                            <button type="button" className="btn btn-trip-contact btn-sm mx-5">Message restaurant</button>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <p className="mb-5">{trip.user.first_name} {trip.user.last_name}</p>
                            <p className="mb-10">{trip.user.address}</p>
                            <button type="button" className="btn btn-trip-contact btn-sm mx-5">Message {trip.user.first_name}</button>
                          </div>
                        </div>
                        <div className="col-2">
                          <p className="trip-earning"><b>$ {trip.restaurant.delivery_fee}.00</b></p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              :
              <div className="border border-secondary rounded text-center">
                <p className="py-4">You don't have any upcoming trips at the moment.</p>
              </div>
            }
        
          </div>
        </div>
      </Layout>
    )
  }
}

export default DeliveryTrips;