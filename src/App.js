import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Routs from "./Routs";
import { SET_USER_TOKEN } from "./store/actions/userActions";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(SET_USER_TOKEN(token));
    // console.log("token: ", token);
    if (!token) navigate("/register");
  }, []);

  return (
    <div className="App">
      <TopBar />
      <Routs />
    </div>
  );
}

export default App;
