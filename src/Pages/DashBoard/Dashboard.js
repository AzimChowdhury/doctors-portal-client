import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


function DashBoard() {
  const [user] = useAuthState(auth);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        <h1 className='text-2xl text-center mt-2 font-semibold text-accent'>Welcome to your Dashboard , {user.displayName}</h1>


        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Appointments</Link></li>
          <li><Link to='/dashboard/reviews'>Reviews</Link></li>
          <li><Link to='/dashboard/users'>All Users</Link></li>
        </ul>

      </div>

    </div>
  )
}

export default DashBoard;
