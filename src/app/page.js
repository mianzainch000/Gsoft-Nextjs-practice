"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  console.log(process.env.NODE_ENV);
  const router = useRouter();

  // Navigation Routing used as a function

  const navigate = (routerName) => {
    return router.push(routerName);
  };

  const fun = (item) => {
    alert(item);
  };
  // InnerComp
  const InnerComp = () => {
    return <h1>Inner Component</h1>;
  };
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <h1>Home Page</h1>
      <button onClick={() => fun("Hello Next-Js")}>Click Me</button>
      {/* <InnerComp /> */}
      {InnerComp()}
      {/* In Above inner component as a function */}
      {/* Linking */}
      <Link href="/login">Go to Login Page</Link>
      <br /> <br />
      <Link href="/about">Go to About Page</Link>
      <br /> <br />
      {/* Navigation */}
      <button onClick={() => router.push("/login")}>Go to login page</button>
      <br /> <br />
      {/* It used as a function to pass parameter */}
      <button onClick={() => navigate("/about")}>Go to about page</button>
      <br />
      <br />
      <button onClick={() => navigate("/apiFetchingData")}>
        Go to Api Fetching Data page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/apiFetchingDataServerSide")}>
        Go to Api Fetching Data Server page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/imageOptimization")}>
        Go to Image Optimization page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/fontOptimization")}>
        Go to Font Optimization page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/metaData")}>Go to MetaData page</button>
      <br />
      <br />
      <button onClick={() => navigate("/loader")}>Go to Api Loader page</button>
      <br />
      <br />
      <button onClick={() => navigate("/useParamsApiSetData")}>
        Go to useParamsApi Set Data page
      </button>
      <br />
      <br />
    </main>
  );
}
