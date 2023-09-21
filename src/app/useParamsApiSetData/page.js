import React from "react";
import Link from "next/link";
import Api from "../useParamsApi/page";
const UseParamsApiSetData = async () => {
  const getUser = Api();
  const user = await getUser;

  return (
    <div>
      <Link href="/">Go back to home page</Link>
      <br />
      <br />
      {user.map((item) => {
        return (
          <h2 key={item.id}>
            <Link href={`/useParamsApiSetData/${item.id}`}>{item.name}</Link>
            <br />
            <br />
          </h2>
        );
      })}
    </div>
  );
};

export default UseParamsApiSetData;
