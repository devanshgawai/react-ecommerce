import React from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  // console.log("LAYOUT PAGE LOADED");
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
