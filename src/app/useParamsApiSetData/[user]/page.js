import Api from "@/app/useParamsApi/page";
import React from "react";

const DetailPage = async (props) => {
  const user = await Api();
  const currentId = props.params.user;
  const userData = user[currentId - 1];
  console.log("data", props?.params?.user);
  return (
    <div>
      <h1>Detail Page</h1>
      <h2>Id:{userData.id}</h2>
      <h2>Name:{userData.name}</h2>
      <h2>Email:{userData.email}</h2>
      <h2>Website:{userData.website}</h2>
    </div>
  );
};

export default DetailPage;

// Gnerate ssg

export async function generateStaticParams() {
  const user = await Api();
  return user.map((item) => ({
    user: item.id.toString(),
  }));
}
