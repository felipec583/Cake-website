import { useState, createContext } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <StateContext.Provider
      value={{ error, setError, setIsSubmitted, isSubmitted }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
