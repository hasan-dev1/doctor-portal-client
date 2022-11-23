import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContuctUs = () => {
    return (
        <section>
            <div style={{ 
                backgroundImage:`url(${appointment})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
             }}
             className='py-20 mb-20'
             >
                <div>
                    <h2 className='text-xl text-bold text-primary'>Contuct US</h2>
                    <p className='text-4xl text-white mb-12'>Stay Connected</p>

                    <form className='lg:w-1/3 md:w-2/3 md:mx-auto lg:mx-auto mx-2'>
                        <div className='my-4'>
                            <input type="email" name='email' className='input input-bordered p-2 w-full' placeholder='Email Address' />
                        </div>
                        <div className='my-4'>
                            <input type="text" name='subject' className='input input-bordered p-2 w-full' placeholder='Subject' />
                        </div>
                        <div className='mt-4 mb-8'>
                            <textarea name="message" cols="30" className=' input input-bordered p-2 w-full h-20' placeholder='Your message'  rows="10"></textarea>
                        </div>
                        <button className='btn btn-primary px-16 text-white bg-gradient-to-r from-primary to-secondary'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContuctUs;