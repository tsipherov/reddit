import axios from "axios";
// import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const getToken = (createFetchOptions, code) => {
  const url = "https://www.reddit.com/api/v1/access_token";

  const data = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`;
  const config = {
    auth: {
      username: "uAmIbE9Ka4vcgm5Etmrrng",
      password: "77M2MtMKiVa85nONal7E6OnMqL-v8A",
    },
    headers: { "Content-type": "application/x-www-form-urlencoded" },
  };

  createFetchOptions(url, data, config);
};

export const getUserData = (token, setUserName, setUserIcon) => {
  const baseUrl = "https://oauth.reddit.com/api/v1/me";

  axios
    .get(baseUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("from getUserData: ", res.data);
      setUserName(res.data.name);
      setUserIcon(res.data.icon_img);
      return res.data;
    })
    .catch((err) => {
      console.log("err: ", err);
      //   setError(err.response.data);
      //   setIsLoading(false);
    });
};
