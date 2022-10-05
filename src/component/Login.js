import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const login = () => {
        localStorage.setItem('login',true)
        navigate('/')
 
    }
    const navigate = useNavigate()

    useEffect(() => {
        const login = localStorage.getItem('login')

        if (login) {
            navigate('/')
        }
    })

    return (

        <div style={{ textAlign: 'center' }}>
            <h1>Login Page</h1>
            <input type='taxt' /><br /><br />
            <input type='taxt' /><br /><br />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login