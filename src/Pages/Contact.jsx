import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">
        Cuentános, ¿en qué te podemos ayudar?
      </h1>
      <form action="" className="flex flex-col justify-center items-center">
        <label htmlFor="email" className="mb-2">
          Correo
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          id="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          required
        />
        <label htmlFor="" className="my-2">
          Descripción
        </label>
        <textarea
          className="textarea textarea-bordered w-1/2 h-32"
          placeholder="Escribe tu mensaje aquí"
          maxLength={200}
          required
        ></textarea>
        <button className="btn bg-red-cake text-white font-bold my-2">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Contact;
