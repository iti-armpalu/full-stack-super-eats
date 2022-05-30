// restaurant.jsx
import React from 'react';
import Layout from '@src/layout';

// Importing stylesheet
import './restaurant.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }



  foods = [
    {
      id: 1,
      name: "Aloha Poke",
      description: "Salmon, light ponzu sauce, red onion, edamame, cherry tomatoes, seaweed salad, mango, avocado, sesame seeds, chilli flakes and ginger. Recommended Base: Signature rice.",
      price: "12",
      image_url: "https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702",
    },
    {
      id: 2,
      name: "Waikiki Poke",
      description: "Raw tuna, spicy mayo sauce, edamame, cucumber, spring onion, masago, pineapple, spicy kale, chilli flakes, sesame seeds and nori strips. Recommended Base: Brown rice.",
      price: "12",
      image_url: "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180",
    },
    {
      id: 3,
      name: "Spicy Maui Poke",
      description: "Raw tuna, spicy mayo sauce, edamame, cucumber, spring onion, masago, pineapple, spicy kale, chilli flakes, sesame seeds and nori strips. Recommended Base: Brown rice.",
      price: "12",
      image_url: "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180",
    },
  ]



  updateTotal = () => {
    let basketTotal = [];
    let subtotal = [24, 24, 24];

    for (var i = 0; i < subtotal.length; i++) {
      basketTotal.push(subtotal[i]);
    }

    let subtotalSum = basketTotal.reduce( (acc, x) => acc + x )
    
    if (subtotalSum === 0) {
      return 0;
    } else {
      return subtotalSum;;
    }
  }

  render () {
    const { quantity } = this.state;

  return (
    <Layout>
      <div className="mt-80 pb-40">
        <div className="pl-40 pr-40">
          <div className="restaurant-image mb-10 rounded position-relative" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770)` }} >

            <div className="position-absolute restaurant-delivery-time rounded pl-10 pr-10 pt-5 pb-5 my-auto">
              <p className="mb-0">20 - 30 min</p>
            </div>

            <div className="position-absolute restaurant-details rounded pl-20 pr-20 pt-10 pb-10 my-auto">
              <h4 className="mb-5">Season Restaurant</h4>
              <p className="mb-0 restaurant-address">
                <FontAwesomeIcon  icon={faLocationDot} className="mr-10 icon-location-dot"  />
                27601 Brandford, New York
              </p>
              <p>Open: 9:00 am - 10:00 pm </p>
            </div>
          </div>

            <div className="row mt-80 mb-40">

            {this.foods.map(food => {
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
                    <h5 className="food-price mb-0">USD {food.price}.00</h5>
                  </div>

                  <div className="col-2 my-auto mx-auto">
                    <form>
                      <div className="text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label mb-20">Quantity</label>
                        <input type="number" className="form-control w-50 mx-auto" id="exampleInputEmail1" name="quantity" value={quantity} onChange={this.handleChange}  />
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            )
          })}

            </div>

            {/* If food.id user input > 0, then add to th basket */}
            <div className="mt-80 mb-40">
              <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                <h6>My basket</h6>
              <div className="rounded bg-light px-5 py-5">

                <div className="row d-flex justify-content-end align-items-center text-center mb-20">
                  <div className="col">
                    <p className="mb-0">2x</p>
                  </div>
                  <div className="col">
                    <p className="mb-0">Aloha Bowl</p>
                  </div>
                  <div className="col">
                    <div className="food-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702)` }} />
                  </div>
                  <div className="col">
                    <p className="food-subtotal mb-0">USD 24.00</p>
                  </div>
                  <div className="item-remove col">
                    <button className="btn btn-danger btn-sm btn-block remove mx-auto">Remove</button>
                    </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center text-center mb-20">
                  <div className="col">
                    <p className="mb-0">2x</p>
                  </div>
                  <div className="col">
                    <p className="mb-0">Aloha Bowl</p>
                  </div>
                  <div className="col">
                    <div className="food-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702)` }} />
                  </div>
                  <div className="col">
                    <p className="food-subtotal mb-0">USD 24.00</p>
                  </div>
                  <div className="item-remove col">
                    <button className="btn btn-danger btn-sm btn-block remove mx-auto">Remove</button>
                    </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center text-center mb-20">
                  <div className="col">
                    <p className="mb-0">2x</p>
                  </div>
                  <div className="col">
                    <p className="mb-0">Aloha Bowl</p>
                  </div>
                  <div className="col">
                    <div className="food-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604259597308-5321e8e4789c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702)` }} />
                  </div>
                  <div className="col">
                    <p className="food-subtotal mb-0">USD 24.00</p>
                  </div>
                  <div className="item-remove col">
                    <button className="btn btn-danger btn-sm btn-block remove mx-auto">Remove</button>
                    </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center text-center pt-20 pb-20">
                  <div className="col">
                    <h4 className="mb-0">Total</h4>
                  </div>
                  <div className="col">
                    <h4 className="total-price mb-0">USD {this.updateTotal()}.00</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <a className="btn btn-find-food text-uppercase pl-30 pr-30 pt-10 pb-10 mx-auto" href="/order/id/success" role="button">Place order</a>
                </div>
                

              </div>
                </div>
              </div>
              
            </div>
            
        </div>
      </div>
    </Layout>
    );
  }
}

export default Restaurant