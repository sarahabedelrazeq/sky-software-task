import { useTheme } from "hooks";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Main = (props) => {
  const theme = useTheme();
  return (
    <div id="main-layout" className="layout" style={{ background: theme.bg }}>
      <Header />
      <div className="page-container" id={props.id ? props.id : "page"}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
