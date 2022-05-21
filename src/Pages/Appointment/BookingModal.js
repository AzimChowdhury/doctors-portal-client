import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';



const BookingModal = ({ treatmentAvailable, setTreatmentAvailable, date, refetch }) => {
    const { _id, name, slots } = treatmentAvailable;

    const handleBooking = (e) => {
        e.preventDefault();
        const pName = e.target.name.value;
        const number = e.target.number.value;
        const email = e.target.email.value;
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: format(date, 'PP'),
            slot,
            patientEmail: email,
            patientName: pName,
            phone: number

        }

        fetch('https://fathomless-island-44034.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {

                    toast.success(` on ${format(date, 'PP')} you set an appointment for ${name} at ${slot}`)
                }
                else if (data.success === false) {

                    toast.error(`you already have an appointment for ${name} today`)
                }
            })

        refetch();
        setTreatmentAvailable(null)
    }

    const [user] = useAuthState(auth);



    return (
        <div>

            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <label for="booking-modal" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="booking-modal" class="btn btn-sm bg-primary text-white font-semibold text-xl border-0 btn-circle absolute right-3 top-3">✕</label>
                    <h3 class="text-xl text-center text-primary font-bold">Book Appointment for {name}</h3>
                    <form onSubmit={handleBooking} className='px-10'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full mt-4  " />

                        <select name='slot' class="select text-accent select-bordered w-full mt-4">

                            {
                                slots.map(slot => <option >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full mt-4  " />
                        <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full mt-4  " />
                        <input type="number" name='number' placeholder='Phone Number' class="input input-bordered w-full mt-4  " />
                        <input type="submit" value="Submit" className='btn btn-primary w-full mt-4 text-white text-xl ' />
                    </form>

                </label>
            </label>
        </div>
    );
};

export default BookingModal;