import React from "react";
import NavBar from "../Components/NavBar";
const Home = () => {
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
