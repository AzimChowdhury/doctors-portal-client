import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='w-96 shadow-2xl p-10'>
            <p>{review.review}</p>
            <div className='flex mt-6'>
                <img className='w-16' src={review.image} alt="" />
                <div className='ml-4'>
                    <p className='text-xl font-semibold'>{review.name}</p>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;