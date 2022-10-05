import React, { useContext } from 'react'
import { GlobalInfo } from './App'

function Child() {
    const { infoColor } = useContext(GlobalInfo)
    console.log(infoColor)
    return (
        <div style={{ color: infoColor }}>
            Child Component

        </div>
    )
}

export default Child    