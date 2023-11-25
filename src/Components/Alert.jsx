import { useContext } from "react";
import { StateContext } from "../Context/StateProvider";
const Alert = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-96 bg-base-100 shadow-xl rounded-box">
          <div className="card-body">
            <h2 className="text-xl text-center font-bold">
              Redirigiendo al Home
            </h2>
            <div className="card-actions flex justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
