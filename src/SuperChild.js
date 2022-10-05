import React, { useContext } from 'react'
import { GlobalInfo } from './App'

function SuperChild() {
    const { infoColor } = useContext(GlobalInfo)
    console.log(infoColor)
    return (
        <div style={{color:infoColor}}>SuperChild Component</div>
    )
}

export default SuperChild