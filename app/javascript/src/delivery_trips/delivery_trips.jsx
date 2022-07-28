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

    fetch(`/api/delivery_users/${delivery_partner_id}/orders`)
      .then(handleErrors)
      .then(data => {
        // console.log('data', data)
        this.setState({
          deliveryTrips: data.orders,
          loading: false
        })
      })
  }

  render () {
    const { deliveryTrips, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    };

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="container">
            <h3 className="mb-50">My trips</h3>

            {(deliveryTrips.length != 0)

              ?
              <div>
                <div className="d-none d-lg-block p-4 mb-20 border-bottom">
                  <div className="row gx-0 d-flex justify-content-between align-items-center text-center">
                    <div className="col-1">
                      <p className="mb-10">Delivery ID</p>
                    </div>
                    <div className="col-2">
                      <p className="mb-10">Delivery date</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-10">Pick-up details</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-10">Drop-off details</p>
                    </div>
                    <div className="col-2">
                      <p className="mb-10">Delivery earning</p>
                    </div>
                  </div>
                </div>

                <div className="row">

                  {deliveryTrips.map(delivery => {
                    return (
                      <div 
                        key={delivery.id} 
                        id={delivery.id} 
                        className="col-12 col-sm-6 col-lg-12">
                          <div className="trips-wrap p-4 mb-20 rounded ">
                          <div className="row gx-0 d-flex justify-content-between align-items-center text-center">
                            <div className="col-12 col-lg-1">
                              <p className="mb-10">
                                # {delivery.id}
                              </p>
                            </div>
                            <div className="col-12 col-lg-2">
                              <p className="mb-10">
                                {FormatDate(delivery.created_at)}
                              </p>
                            </div>
                            <div className="col-12 col-lg-3">
                              <div className="d-flex flex-column md-mb-40 md-mt-40 mb-0 mt-0">
                                <p className="d-block d-lg-none mb-10">
                                  <b>Pick-up details</b>
                                </p>
                                <p className="mb-10">
                                  {delivery.restaurant.name}
                                </p>
                                <p>
                                  {delivery.restaurant.address},
                                </p>
                                <p className="mb-10">
                                  {delivery.restaurant.city}, {delivery.restaurant.country}
                                </p>
                                <button 
                                  type="button" 
                                  className="btn btn-trip-contact btn-sm mx-auto w-75">
                                    Message restaurant
                                </button>
                              </div>
                            </div>
                            <div className="col-12 col-lg-3">
                              <div className="d-flex flex-column md-mb-40 mb-0">
                                <p className="d-block d-lg-none mb-10">
                                  <b>Drop-off details</b>
                                </p>
                                <p className="mb-10">
                                  {delivery.user.first_name} {delivery.user.last_name}
                                </p>
                                <p>
                                  {delivery.user.address},
                                </p>
                                <p className="mb-10">
                                  {delivery.user.city}, {delivery.user.country}
                                </p>
                                <button 
                                  type="button" 
                                  className="btn btn-trip-contact btn-sm mx-auto w-75">
                                    Message {delivery.user.first_name}
                                </button>
                              </div>
                            </div>
                            <div className="col-12 col-lg-2">
                              <p className="d-block d-lg-none mb-10">
                                <b>Delivery earning</b>
                              </p>
                              <p className="trip-earning">
                                <b>$ {delivery.restaurant.delivery_fee}.00</b></p>
                            </div>
                          </div>
                        </div>
                    </div>
                    )
                  })}
                </div>
              </div>

              :
              <div className="border border-secondary rounded text-center">
                <p className="py-4">
                  You don't have any upcoming trips at the moment.
                </p>
              </div>
            }
          </div>
        </div>
      </Layout>
    )
  }
}

export default DeliveryTrips;