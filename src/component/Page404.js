import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
        <h1 style={{color:'red'}}>Error 404</h1>
        <p>An 'error' is a deviation from accuracy or correctness. A 'mistake' is an error caused by a fault: the fault being misjudgment, carelessness, or forgetfulness. </p>
        <Link to='/'>Go To Home Page</Link>
    </div>
  )
}

export default Page404