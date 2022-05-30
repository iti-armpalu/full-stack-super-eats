// restaurants.jsx
import React from 'react';

// Importing components
import Layout from '@src/layout';

// Importing stylesheet
import './orders.scss';

class Orders extends React.Component {

  orders = [
    {
      id: 1,
      date: "15 May 2022",
      time: "6:00pm",
      restaurant: {
        id: 1,
        name: "Season Restaurant",
        image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
        delivery_fee: 2,
        foods: [
          {
            id: 1,
            name: "Aloha Poke",
            quantity: "1",
            price: "12",
          },
          {
            id: 2,
            name: "Waikiki Bowl",
            quantity: "2",
            price: "12",
          },
        ]
      },
    },
    {
      id: 2,
      date: "10 May 2022",
      time: "3:00pm",
      restaurant: {
        id: 2,
        name: "Pink Donuts",
        image_url: "https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832",
        delivery_fee: 4,
        foods: [
          {
            id: 2,
            name: "Chocolate Custard",
            quantity: "1",
            price: "2",
          },
          {
            id: 3,
            name: "Original Glazed",
            quantity: "2",
            price: "2",
          },
          {
            id: 5,
            name: "Strawberry Iced",
            quantity: "2",
            price: "2",
          },
        ]
      },
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

    return (
      <Layout>
        <div className="mt-80 pb-40">
          <div className="pl-40 pr-40">

        
            <h3 className="mb-50">My orders</h3>
        

              <div className="row">
              {this.orders.map(order => {
                return (
                  <div key={order.id} id={order.id} className="col-4 d-flex flex-column">
                    <div className="bg-light rounded px-3 py-3">
                      <div className="property-image rounded mb-10" style={{ backgroundImage: `url(${order.restaurant.image_url})` }} />
                      <h5>{order.restaurant.name}</h5>
                      <p className="order-details">{order.date}<span className="px-2"> · </span>{order.time}</p>
                      <p>Liked the food?<a className="btn btn-view-menu text-decoration-underline py-0 mx-2" role="button" href="/restaurant/id">Order again</a></p>
                      <div className="divider my-3"></div>
                      <div>
                        <h6 className="mb-10">Your order details:</h6>

                      {
                      order.restaurant.foods.map(food => {
                      return (

                      
                        <div key={food.id} id={food.id}  className="d-flex justify-content-between px-3">
                          <p className="mb-5"><span>{food.quantity}x </span>{food.name}</p>
                          <p className="mb-5">$ {food.price}.00</p>
                        </div>
                      

)
})}
</div>
                      <div className="divider my-3"></div>
                      <div className="d-flex justify-content-between px-3 order-details">
                        <p className="mb-5">Subtotal</p>
                        <p className="mb-5">$ 24.00</p>
                      </div>

                         


                      <div className="d-flex justify-content-between px-3 order-details">
                        <p className="mb-5">Delivery fee</p>
                        <p className="mb-5">$ {order.restaurant.delivery_fee}.00</p>
                      </div>
                      <div className="order-total d-flex justify-content-between px-3">
                        <p>Total</p>
                        <p>$ {this.updateTotal()}.00</p>
                      </div>
                    </div>
                  </div>
                )
              })}

                

              </div>
              
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Orders;