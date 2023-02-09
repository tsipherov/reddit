import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/Spinner";
import { getUserData } from "../../api/userDataApi";
import ListItems from "../../components/ListItems/ListItems";

const HomePage = () => {
  const [user, setUser] = useState({ name: "user", icon_img: "" });
  const userToken = useSelector((store) => store.user.token);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("token: ", userToken);
    if (!userToken) return;

    setIsLoading(true);
    async function load() {
      console.log("from funcion load()");
      try {
        const result = await getUserData(userToken);
        setUser(result.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    load();
  }, [userToken]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <img title="user icon" src={user.icon_img} alt="user image" />
      <h1>Hello, {user.name}</h1>
      <ListItems />
    </div>
  );
};

export default HomePage;
