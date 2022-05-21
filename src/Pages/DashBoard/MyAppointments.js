import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  useEffect(() => {

    if (user) {
      fetch(`https://fathomless-island-44034.herokuapp.com/booking?email=${user.email}`, {
        method: "GET",
        headers: {
          'authorization': `bearer ${localStorage.getItem('jwt-token')}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            alert('Unauthorized or Forbidden Access')
            signOut(auth)
            localStorage.removeItem('jwt-token')
            return navigate('/')
          }
          else if (res.status === 200) {
            return res.json();
          }
        })
        .then(data => {
          setBooking(data)
        })
    }
  }, [user, navigate])
  return (
    <div>
      <h2 className='text-xl mt-2 text-center'>{user?.displayName} , you have {booking?.length} appointments</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time slot</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              booking?.map((b, index) =>
                <tr>
                  <th>{index + 1}</th>
                  <td>{b.treatmentName}</td>
                  <td>{b.date}</td>
                  <td>{b.slot}</td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;