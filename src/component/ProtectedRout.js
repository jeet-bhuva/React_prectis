import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRout(props) {

    const { Component } = props
    const navigate = useNavigate()

    useEffect(() => {
        const login = localStorage.getItem('login')

        if (!login) {
            navigate('/login')
        }
    })

    return (
        <div>
            <h1><Component /></h1>
        </div>
    )
}

export default ProtectedRout