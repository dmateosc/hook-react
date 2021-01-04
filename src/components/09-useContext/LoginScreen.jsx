import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState({});

  //1. Obtener referencia al context
  //2. setUser
  /*
        {
            id: 1123,
            name: Nombre
        }
    
    */

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <form action="">
        <input
          type="text"
          name="user"
          onChange={(e) => setName({ name: e.target.value })}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() =>
            setUser({
              id: Date.now(),
              name,
            })
          }>
          Login
        </button>
      </form>
    </div>
  );
};
