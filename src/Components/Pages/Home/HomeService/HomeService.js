import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceItem from './ServiceItem';

const HomeService = () => {
    const servicesItem = [
      {
        id: 1,
        iconimg: fluoride,
        title: "Fluoride Treatment",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        id: 2,
        iconimg: cavity,
        title: "Cavity Filling",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        id: 3,
        iconimg: whitening,
        title: "Teeth Whitening",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
    ];
    return (
      <div>
        <div className="mb-[70px]">
          <p className="text-2xl text-primary font-bold">Our Service</p>
          <h3 className="text-4xl font-bold text-accent ">
            Services We Provide
          </h3>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 my-40 mx-3'>
          {servicesItem.map((service) => (
            <ServiceItem key={service.id} service={service}></ServiceItem>
          ))}
        </div>
      </div>
    );
};

export default HomeService;