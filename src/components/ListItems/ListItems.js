import React, { useEffect, useState } from "react";
import { getListPosts } from "../../api/userDataApi";
import Item from "../Item/Item";

const ListItems = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) return;
    getListPosts(token).then((res) => {
      console.log("result from list: ", res.data.data.children);
      setData(res.data.data.children);
    });
  }, []);
  console.log(data);
  const listItems = data ? (
    data.map((item) => (
      <Item
        key={item.data.id}
        title={item.data.title}
        img={item.data.thumbnail}
      />
    ))
  ) : (
    <h2>List is empty yet</h2>
  );
  return <ul className="d-flex flex-column align-items-center">{listItems}</ul>;
};

export default ListItems;
