import React from "react";

const Layout = (props) => {
  return (
    <div>
      <h1>Iam header</h1>
      {props.children}
      <h1>Iam footer</h1>
    </div>
  );
};

export default Layout;
