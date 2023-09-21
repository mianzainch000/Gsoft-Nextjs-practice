import React from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";
const roboto = Roboto({
  weight: "100",
  subsets: ["greek"],
  display: "swap",
});
const FontOptimization = () => {
  return (
    <>
      <Link href="/">Go to home page</Link>
      <h1 className={roboto.className}>Font Optimization</h1>
    </>
  );
};

export default FontOptimization;
