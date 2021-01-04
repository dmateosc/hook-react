import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  
  const { counter, increment, decrement, reset } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data, error } = useFetch(url);
  const {author, quote} = !!data && data[0]
  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-2">{quote} </p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>

        
      )}
      

      <button onClick={() => increment(1)}>Siguiente cita</button>
      <button onClick={() => decrement(1)}>Cita anterior</button>
    </div>
  );
};
