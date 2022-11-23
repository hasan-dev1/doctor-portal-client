import React from 'react';
import tretment from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
      <div className="flex justify-around lg:flex-row flex-col items-center mb-40">
        <div className="lg:w-1/2 mx-2 flex justify-center ">
          <img src={tretment} style={{ maxHeight: "600px", borderRadius:'8px' }} alt="" />
        </div>
        <div className="lg:w-1/2 mx-2 text-start text-accent  mt-3">
          <h4 className="lg:text-6xl">Exceptional Dental Care, on Your Terms</h4>
          <p className="py-7 font-semibold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn rounded hover:border-white  bg-gradient-to-r from-primary to-secondary text-white font-bold">
            GET STARTED
          </button>
        </div>
      </div>
    );
};

export default Exceptional;