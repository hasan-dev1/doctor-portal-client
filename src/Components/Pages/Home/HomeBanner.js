import React from 'react';
import chairimg from '../../assets/images/chair.png'
import './Home.css'

const HomeBanner = () => {
    return (
      <div>
        <div className="flex justify-between lg:flex-row flex-col-reverse homebanner px-12 py-20 mb-20">
          <div className="order-last lg:w-1/2 ">
            <img src={chairimg} alt="" />
          </div>
          <div className="order-1 lg:w-1/2 text-accent text-start lg:mt-16">
            <h2 className="text-6xl">Your New Smile Starts Here</h2>
            <p className="my-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn rounded hover:border-white  bg-gradient-to-r from-primary to-secondary text-white font-bold">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeBanner;