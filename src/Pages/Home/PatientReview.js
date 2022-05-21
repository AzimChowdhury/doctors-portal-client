import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const PatientReview = () => {
    const reviews = [
        { _id: 1, name: 'Winson Harry', image: `${people1}`, location: 'California', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { _id: 2, name: 'Winson Harry', image: `${people2}`, location: 'California', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        { _id: 3, name: 'Winson Harry', image: `${people3}`, location: 'California', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' }
    ]



    return (
        <div className='px-16 mb-28'>
            <div className='px-10 flex justify-between'>
                <div className='mt-8'>
                    <h4 className='text-xl text-primary font-semibold'>Testimonial</h4>
                    <h1 className='text-4xl'>What our patient says</h1>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-7'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default PatientReview;