import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHooks = () => {


    const [counter, setCounter] = useState(10)

    //Envia una funcion guardada en memoria
    const increment = useCallback(
        (num) => {
            setCounter(c => c + num)    
        },[setCounter]
    )

    useEffect(() => {
        
    }, [increment])
    return (
        <div>
            <h1>useCallback Hook</h1>
            <h3>{counter}</h3>
            <hr/>
            <ShowIncrement increment={increment}/>


        </div>
    )
}
