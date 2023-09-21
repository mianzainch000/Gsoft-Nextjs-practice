"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const FectingDataUsingLoader = () => {
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
      <Link href="/">Go back to home page</Link>

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

export default FectingDataUsingLoader;
