import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data, error } = useFetch(url);
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  //Se usa para mostrar cambios en el efecto de un layout, pero es igual que el useEffect
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-2">
          {quote}{" "}
        </p>
      </blockquote>
       <pre> {
            JSON.stringify(boxSize, null, 3)
        }</pre>

      <button onClick={() => increment(1)}>Siguiente cita</button>
      <button onClick={() => decrement(1)}>Cita anterior</button>
    </div>
  );
};
