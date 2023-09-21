import React from "react";
import Link from "next/link";
const MetaDataDynamically = () => {
  return (
    <>
      <h1>MetaDataDynamically</h1>
      <Link href="/">Go back to Home Page</Link>
    </>
  );
};

export default MetaDataDynamically;

export const generateMetadata = () => {
  return {
    title: "metaData",
    des: "MetaData",
  };
};
