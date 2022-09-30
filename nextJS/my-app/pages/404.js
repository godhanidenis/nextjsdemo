import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Errorpage = () => {
    const navigate = useRouter()
  return (
    <div>
      Errorpage
      <h1>
        {/* <Link href="/"> back to home</Link> */}
        <button onClick={()=>navigate.push("/blog")}>back to home</button>
      </h1>
    </div>
  );
};

export default Errorpage;
