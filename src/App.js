import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./page/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
