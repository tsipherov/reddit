import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState({});
  const [data, setData] = useState({});
  const [url, setUrl] = useState("");

  const baseUrl = "https://www.reddit.com/api/v1/access_token";
  const createFetchOptions = (url, data, config) => {
    setUrl(url);
    setConfig(config);
    setData(data);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;
    // console.log("data: ", data);
    // console.log("config: ", config);
    axios
      .post(url, data, config)
      .then((res) => {
        setResponse(res.data);
        // console.log("res: ", res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setError(err.response.data);
        setIsLoading(false);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, createFetchOptions];
};
