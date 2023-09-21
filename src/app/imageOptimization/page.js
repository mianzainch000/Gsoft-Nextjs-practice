"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/vercel.svg";
const ImageOptimization = () => {
  return (
    <>
      <Link href="/">Back to home page</Link>
      <h1 style={{ textAlign: "center" }}>ImageOptimization</h1>
      <Image src={profile} />
      <br /> <br /> <br /> <br />
      <img src={profile.src} />
      <br />
      <br />
      <Image
        src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg"
        width={200}
        height={200}
      />
    </>
  );
};

export default ImageOptimization;
