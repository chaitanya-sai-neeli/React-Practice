import React from "react";

const Header = () => {
  return (
    // <div className="ui fixed menu">
    //   <div className="ui container center">
    //     <h2>Contact Manager</h2>
    //   </div>
    // </div>
    <div
      className="ui fixed menu"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <h2>Contact Manager</h2>
    </div>
  );
};

export default Header;
