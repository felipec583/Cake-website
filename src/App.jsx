import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import StateProvider from "./Context/StateProvider";
function App() {
  return (
    <>
      <NavBar />
      <StateProvider>
        <Outlet />
      </StateProvider>
    </>
  );
}

export default App;

