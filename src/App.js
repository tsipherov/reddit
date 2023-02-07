import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "./api/useFetch";
// import { useFetch } from "./api/useFetch";
import { getUserData } from "./api/userDataApi";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { userContext } from "./context/userContext";
import Routs from "./Routs";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const context = userContext;
  const [{ isLoading, response, error }, createFetchOptions] = useFetch();

  return (
    <context.Provider value={userData}>
      <div className="App">
        <TopBar />
        <Routs />
      </div>
    </context.Provider>
  );
}

export default App;
