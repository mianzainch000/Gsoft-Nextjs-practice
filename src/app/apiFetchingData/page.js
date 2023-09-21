"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const FectingData = () => {
  const router = useRouter();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [productList, setProductList] = useState([]);
  const fetchingData = async () => {
    const response = await axios.get(url);
    setProductList(response.data);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <div>
      <button onClick={() => router.push("/")}>Back to home page</button>
      {productList.map((item) => {
        return (
          <h3 key={item.id}>
            Id:{item.id} Title:{item.title}
          </h3>
        );
      })}
    </div>
  );
};

export default FectingData;
