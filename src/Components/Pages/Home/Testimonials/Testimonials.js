import React from "react";
import testimonial from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonials = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-20">
        <div className="text-start">
          <h3 className="text-2xl text-primary">Testimonial</h3>
          <p className="text-4xl text-accent">What Our Patients Says</p>
        </div>
        <div>
          <img src={testimonial} className="w-48" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-2">
        <div className="mb-20">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <p className="text-start text-accent text-bold p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum, eligendi molestias. Suscipit eveniet est natus maiores
                eligendi eaque reiciendis exercitationem aperiam aliquid
                officia!
              </p>
            </figure>
            <div className="flex items-center p-3">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-3">
                  <img src={people1} />
                </div>
              </div>
              <div className="text-start ">
                <h4 className="text-3xl text-accent">Black Paper</h4>
                <p className="text-xl text-accent">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <p className="text-start text-accent text-bold p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum, eligendi molestias. Suscipit eveniet est natus maiores
                eligendi eaque reiciendis exercitationem aperiam aliquid
                officia!
              </p>
            </figure>
            <div className="flex items-center p-3">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-3">
                  <img src={people2} />
                </div>
              </div>
              <div className="text-start ">
                <h4 className="text-3xl text-accent">Black Paper</h4>
                <p className="text-xl text-accent">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <p className="text-start text-accent text-bold p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum, eligendi molestias. Suscipit eveniet est natus maiores
                eligendi eaque reiciendis exercitationem aperiam aliquid
                officia!
              </p>
            </figure>
            <div className="flex items-center p-3">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-3">
                  <img src={people3} />
                </div>
              </div>
              <div className="text-start ">
                <h4 className="text-3xl text-accent">Black Paper</h4>
                <p className="text-xl text-accent">Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
