import React from 'react';
import CartDetails from './CartDetails';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'

const CartItem = () => {
    const cartInfo = [
      {
        id: 1,
        icon:clock,
        name: "Opening Hour",
        description: "Lorem Ipsum is simply dummy text of the pri",
        "bgClass":'bg-gradient-to-r from-primary to-secondary'
      },
      {
        id: 2,
        icon:marker,
        name: "Visit Our Location",
        description: "Dhaka Moghbazar wireless 1217",
        "bgClass":'bg-accent'
      },
      {
        id: 3,
        icon:phone,
        name: "Contuct Us",
        description: "+00 00000000000",
        "bgClass":'bg-gradient-to-r from-primary to-secondary'
      },
    ];
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 mb-40 gap-6'>
        {
            cartInfo.map(cart =><CartDetails
            key={cart.id}
            CartDetails={cart}
            ></CartDetails>)
        }
        </div>
    );
};

export default CartItem;