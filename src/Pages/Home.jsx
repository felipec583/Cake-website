import React from "react";
import NavBar from "../Components/NavBar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateProvider";

const Home = () => {
  const location = useLocation();
  const { setIsSubmitted } = useContext(StateContext);
  useEffect(() => {
    if (location.pathname === "/") {
      setIsSubmitted(false);
    }
  }, [location.pathname]);

  return (
    <>
      <h1 className="tex-black text-center my-6 text-xl">
        Bienvenido a <span className="text-4xl font-bold">Happy Cake</span>
      </h1>
      <p className="text-center">El lugar de los pasteles felices</p>
      <div className="img-cont">
        <img
          src="https://www.svgrepo.com/show/404839/birthday-cake.svg"
          alt="birthday-cake"
        />
      </div>
    </>
  );
};

export default Home;
