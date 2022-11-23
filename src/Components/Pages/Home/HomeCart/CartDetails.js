import React from 'react';

const CartDetails = ({CartDetails}) => {
    const {name, icon, description, bgClass} = CartDetails;
    return (
      <div className={`card card-side ${bgClass} shadow-xl text-white mx-2 `}>
        <figure>
          <img className="mx-6 my-12" src={icon} alt="Movie" />
        </figure>
        <div className=" flex text-start flex-col justify-center">
          <h2 className="text-2xl font-bold ">{name}</h2>
          <p className="my-2 pr-16">{description}</p>
        </div>
      </div>
    );
};

export default CartDetails;