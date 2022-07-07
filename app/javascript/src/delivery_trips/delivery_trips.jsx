// delivery_trips.jsx
import React from 'react';

// Import components
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';

// Import stylesheet
import './delivery_trips.scss';

class DeliveryTrips extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      deliveryTrips: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getDeliveryTrips()
  }

  getDeliveryTrips() {
    const delivery_partner_id = this.props.user_id;

    fetch(`/api/users/${delivery_partner_id}/deliveries`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          deliveryTrips: data.deliveries,
          loading: false
        })
      })
  }


  render () {
    const { deliveryTrips, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    };

    const {
      order
    } = deliveryTrips

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">
            <h3 className="mb-50">My trips</h3>

            {(deliveryTrips.length != 0)

              ?
              <div>
                <div className="reservations-header-row p-4 mb-20 border-bottom">
                  <div className="row no-gutters d-flex justify-content-between align-items-center text-center">
                    <div className="col-1">
                      <p className="mb-2">Delivery ID</p>
                    </div>
                    <div className="col-2">
                      <p className="mb-2">Delivery date</p>
                    </div>
                    <div className="col-3">
                    
                      <p className="mb-2">Pick-up details</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-2">Drop-off details</p>
                    </div>
                    <div className="col-2">
                      <p className="mb-2">Delivery earning</p>
                    </div>
                  </div>
                </div>
                
                {deliveryTrips.map(delivery => {
                  return (
                    <div key={delivery.id} id={delivery.id} className="trips-wrap p-4 mb-20 rounded">
                      <div className="row no-gutters d-flex justify-content-between align-items-center text-center">
                        <div className="col-1">
                          <p className="mb-2"># {delivery.id}</p>
                        </div>
                        <div className="col-2">
                          <p className="mb-2">{FormatDate(delivery.created_at)}</p>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <p className="mb-10">
                              {delivery.order.restaurant.name}
                            </p>
                            <p>
                              {delivery.order.restaurant.address},
                            </p>
                            <p className="mb-10">
                              {delivery.order.restaurant.city}, {delivery.order.restaurant.country}
                            </p>
                            <button type="button" className="btn btn-trip-contact btn-sm mx-5">Message restaurant</button>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <p className="mb-10">
                              {delivery.order.user.first_name} {delivery.order.user.last_name}
                            </p>
                            <p>
                              {delivery.order.user.address},
                            </p>
                            <p className="mb-10">
                              {delivery.order.user.city}, {delivery.order.user.country}
                            </p>
                            <button type="button" className="btn btn-trip-contact btn-sm mx-5">Message {delivery.order.user.first_name}</button>
                          </div>
                        </div>
                        <div className="col-2">
                          <p className="trip-earning"><b>$ {delivery.order.restaurant.delivery_fee}.00</b></p>
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