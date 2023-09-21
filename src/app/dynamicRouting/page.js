import React from "react";
import Link from "next/link";
const DynamicRouting = () => {
  const array = [
    { id: 1, name: "Zain" },
    { id: 2, name: "Hassan" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Umer" },
  ];
  return (
    <div>
      {/* <ul>
        <li>
          <Link href="/dynamicRouting/Zain">Zain</Link>
        </li>
        <li>
          <Link href="/dynamicRouting/Hassan">Hassan</Link>
        </li>
        <li>
          <Link href="/dynamicRouting/Ali">Ali</Link>
        </li>
        <li>
          <Link href="/dynamicRouting/Umer">Umer</Link>
        </li>
      </ul> */}
      {/* In above commit ul  used of static */}

      {/* In below ul it is used for dynamically */}
      <ul>
        {array.map((item) => (
          <li key={item.id}>
            <Link href={`/dynamicRouting/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicRouting;
