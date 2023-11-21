import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-red-cake">
      <div className="flex-1 left">
        <img src="/home.svg" alt="home" />
        <Link className="btn btn-ghost text-xl text-white" to={"/"}>
          Home{" "}
        </Link>
        <img src="/contacts.svg" alt="contact-book" />
        <Link className="btn btn-ghost text-xl text-white" to={"contact"}>
          Contact
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 right">
          <li>
            <h2 className="text-white text-xl font-bold hover:bg-red-cake hover:text-white">
              Happy Cake
            </h2>
          </li>
          <img src="/cake.svg" alt="cake" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
