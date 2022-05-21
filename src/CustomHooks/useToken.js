import { useEffect, useState } from 'react'

function useToken(user) {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://fathomless-island-44034.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('jwt-token', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token]
}

export default useToken;
