import React from "react";
import { useLocation } from "react-router-dom";
import SimplePage from "../../components/simple-page/SImple-page";

const Page = ({ pageCode }) => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");  

  console.log(pageCode);
  return (
    <div>
      <SimplePage code={code ? code : pageCode} />
    </div>
  );
};

export default Page;
