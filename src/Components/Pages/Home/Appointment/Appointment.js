import React from 'react';
import '../Home.css'
import doctor from '../../../assets/images/doctor.png'

const Appointment = () => {
    return (
      <div>
        <div className="appointment h-[540px] mb-20">
          <div className="flex justify-around lg:flex-row flex-col items-center ">
            <div className="lg:w-1/2 relative">
              <img src={doctor} className="max-h-[636px] absolute -top-[316px] left-0" alt="" />
            </div>
            <div className="lg:w-1/2 mx-2 text-start text-white lg:mt-20  mt-12">
              <h4 className="text-2xl text-primary mb-2">Appointment</h4>
              <h4 className="lg:text-6xl">Make an appointment Today</h4>
              <p className="py-7 font-semibold">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="btn rounded hover:border-white  bg-gradient-to-r from-primary to-secondary text-white font-bold">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Appointment;