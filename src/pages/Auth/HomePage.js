import React, { useEffect, useState } from "react";
import { getUserData } from "../../api/userDataApi";
import { userContext } from "../../context/userContext";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const token = localStorage.getItem("token");

  console.log("token: ", token);

  useEffect(() => {
    if (token) {
      getUserData(token, setUserName, setUserIcon);
    }
    console.log("from useEffect");
  }, [userName]);

  const { Consumer } = userContext;
  // console.log(Consumer);

  return (
    <div>
      <img title="user icon" src={userIcon} />
      <h1>Hello, {userName}</h1>
    </div>
  );
};

export default HomePage;
