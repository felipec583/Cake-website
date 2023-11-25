import ContactForm from "../Components/ContactForm";
import { useContext, useState } from "react";
import { StateContext } from "../Context/StateProvider";

const Contact = () => {
  const { error, setError } = useContext(StateContext);

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">
        Cuentános, ¿en qué te podemos ayudar?
      </h1>
      <ContactForm />
    </>
  );
};

export default Contact;
