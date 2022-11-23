import React from 'react';

const ServiceItem = ({service}) => {
    const {iconimg, title, description} = service;
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={iconimg}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-accent">
          <h2 className="card-title text-2xl font-semibold">{title}</h2>
          <p className='font-semibold'>{description}</p>
        </div>
      </div>
    );
};

export default ServiceItem;