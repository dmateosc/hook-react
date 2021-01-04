import React, {useState} from 'react'
import './counter.css'
export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    })

    //console.log(counter1, )

    const {counter1, counter2 } = state 
    return (
        <>
            <h1>Coutner {counter1}</h1>
            <h1>Coutner {counter2}</h1>
            <hr/>
            <button className="btn btn-primary" onClick={ ()=> {
                //setCounter(counter1+1)
                //importante usar el spread ...
                setState({
                    ...state,
                    counter1: counter1 + 1
                    

                })
            }}>
            +1

            </button>
        </>
    )
}
