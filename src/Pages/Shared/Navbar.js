import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
function Navbar() {
    const [user] = useAuthState(auth);

    const menu = (
        <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            {
                user && <li><Link to='/dashboard'>Dashboard</Link></li>
            }
            {user ?
                <li><button onClick={() => {
                    signOut(auth)
                    localStorage.removeItem('jwt-token')
                }} className='btn btn-ghost'>Log Out</button></li>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>

    )
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        < ul tabIndex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold" >{menu}</ul>


                    </div>
                    <p className="btn btn-ghost normal-case ml-20 text-3xl">Doctor's Portal</p>
                    {/* //dashboard menu */}
                    <label for="my-drawer-2" tabIndex="0" className="btn navbar-end  btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mr-20 font-semibold p-0">
                        {menu}
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Navbar;
