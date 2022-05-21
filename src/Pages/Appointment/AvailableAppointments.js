import React, { useState } from 'react'
import { format } from 'date-fns';
import Treatment from './Treatment';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

function AvailableAppointment({ date }) {
    const [treatmentAvailable, setTreatmentAvailable] = useState(null)
    const formattedDate = format(date, 'PP')

    const { data: treatments, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://fathomless-island-44034.herokuapp.com/available?date=${formattedDate}`).then(res => res.json())
    )

    if (isLoading) {
        return (<div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>)
    }

    return (
        <div className='my-28'>
            <h3 className='text-center text-primary text-xl mb-8 font-bold'>Available Appointment  on  {format(date, 'PP')}</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-24 mt-16'>
                {
                    treatments?.map(treatment => <Treatment
                        key={treatment._id}
                        setTreatmentAvailable={setTreatmentAvailable}
                        treatment={treatment}
                    ></Treatment>)
                }
                {
                    treatmentAvailable && <BookingModal
                        treatmentAvailable={treatmentAvailable}
                        setTreatmentAvailable={setTreatmentAvailable}
                        date={date}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    )
}

export default AvailableAppointment;