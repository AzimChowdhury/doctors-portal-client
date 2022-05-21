import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

function Users() {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fathomless-island-44034.herokuapp.com/users').then(res => res.json()));
    if (isLoading) {
        return (<div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>)
    }

    const makeAdmin = (email) => {

        fetch(`https://fathomless-island-44034.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made an admin')

                }
                else {
                    toast.error('failed to make an admin')
                }
            })
    }

    return (
        <div>
            <h2>Total {users?.length} users</h2>
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Users Email</th>
                        <th>Date</th>
                        <th>Time slot</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        users?.map((user, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role ? '' : <button onClick={() => {
                                    makeAdmin(user.email)
                                    refetch();
                                }} className='btn btn-xs'>Make admin</button>}</td>
                                <td><button className='btn btn-xs'>Remove User</button></td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Users
