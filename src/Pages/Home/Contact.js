import React from 'react';
import bg from '../../assets/images/appointment.png';


const Contact = () => {
    return (
        <div className='text-center py-16' style={{ backgroundImage: `url(${bg})` }} >
            <h4 className='text-primary text-xl '>Contact us</h4>
            <h1 className=' text-3xl  text-white'>Stay connected with us </h1>
            <form>
                <input placeholder='Your Email' type="email" className='input input-bordered block w-1/4 mt-3 mx-auto' />

                <input placeholder='Your Name' type="text" className='input input-bordered block w-1/4  mt-3 mx-auto' />
                <textarea placeholder='Your Massage' type="text" className='input input-bordered block w-1/4  mt-3 mx-auto' />

                <input type='submit' value='Submit' className="btn bg-gradient-to-r from-primary to-secondary border-0  text-white mt-6" />
            </form>
        </div>
    );
};

export default Contact;