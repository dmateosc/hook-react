import React, { useRef } from 'react'
import '../02-useEffect/effects.css';
export const FocustScreen = () => {

    const myInput = useRef()

    //Se utiliza para comprobar que una referencia se modifica sin renderizar la pantalla
    //como un getElementById
    const handleClick =() => {
        
        myInput.current.select()
        console.log(myInput)

    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>


            <input
            ref={myInput}
             className="form-control" 
            placeholder="Su nombre"
            type="text"/>

            <button className="btn btn-outline-primary mt-5"
            onClick={handleClick}
            >Focus</button>
        </div>
    )
}
