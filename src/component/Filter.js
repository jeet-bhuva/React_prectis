import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {

    const [serchParam] = useSearchParams();
    console.log(serchParam.get('name'))
    console.log(serchParam.get('age'))

    const name = serchParam.get('name')
    const age = serchParam.get('age')

  return (
    <div>
        <h1>Filter Page</h1>
        <h3>Name : {name}</h3>
        <h3>Age : {age}</h3>
        
    </div>
  )
}

export default Filter