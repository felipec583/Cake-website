import { useState } from "react";
import { useContext } from "react";
import { StateContext } from "../Context/StateProvider";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
const ContactForm = () => {
  const { error, setError, setIsSubmitted, isSubmitted } =
    useContext(StateContext);
  const [textLength, setTextLength] = useState(0);
  const [textValues, setTextValues] = useState({
    textAreaValue: "",
    emailValue: "",
  });

  const passwordPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordValidation = passwordPattern.test(textValues.emailValue);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!passwordValidation || textLength < 50) {
      setError(true);
    } else {
      setError(false);
      setTextValues({
        textAreaValue: "",
        emailValue: "",
      });
      setTextLength(0);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    }
  }

  return (
    <>
      <form
        action=""
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="mb-2">
          Correo
        </label>

        <input
          type="email"
          placeholder="Type here"
          className="input input-bordered w-1/2"
          id="email"
          onChange={(e) =>
            setTextValues({ ...textValues, emailValue: e.target.value })
          }
          value={textValues.emailValue}
        />
        <label htmlFor="" className="my-2">
          Descripción
        </label>
        <textarea
          className="textarea textarea-bordered w-1/2 h-32"
          placeholder="Escribe tu mensaje aquí"
          id="textArea"
          value={textValues.textAreaValue}
          maxLength={200}
          minLength={50}
          onChange={(e) => {
            setTextLength(e.target.value.length);
            setTextValues({ ...textValues, textAreaValue: e.target.value });
          }}
        ></textarea>
        <p className={textLength < 50 ? "text-red-500" : "text-green-500"}>
          {textLength} Caracteres{" "}
          <span className="text-black"> | Minimo 50</span>{" "}
          <span className="text-black"> | Máximo 200</span>{" "}
        </p>
        {error === "" ? (
          ""
        ) : error ? (
          <p className="text-red-500">Llena la información correctamente</p>
        ) : (
          isSubmitted && <p className="text-green-500">Mensaje enviado</p>
        )}
        <button
          className="btn bg-red-cake text-white font-bold my-2"
          type="submit"
        >
          Enviar
        </button>
      </form>
      {isSubmitted && <Alert />}
    </>
  );
};

export default ContactForm;
