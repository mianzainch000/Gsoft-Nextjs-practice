import React from "react";
import axios from "axios";
import Link from "next/link";
export const FetchingData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get(url);
  console.log("response", response.data.response);
  return response.data;
};

const FetchingDataServerSide = async () => {
  let productList = [];
  productList = await FetchingData();

  return (
    <div>
      <Link href="/">Back to home page</Link>
      {productList.map((item) => {
        return (
          <h3 key={item.id}>
            Id: {item.id} Title: {item.title}
          </h3>
        );
      })}
    </div>
  );
};

export default FetchingDataServerSide;
