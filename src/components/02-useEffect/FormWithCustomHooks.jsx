import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";
import { Message } from "./Message";

export const FormWithCustomHooks = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <h1>FormWithCustomHOok</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          oncChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          oncChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          value={password}
          oncChange={handleInputChange}
        />
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Guardar
      </button>
      {name === "123" && <Message />}
    </>
  );
};
