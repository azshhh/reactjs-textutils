import React from "react";

const Root = (props) => {
  
  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
        textAlign: "center",
        marginTop: "300px",
      }}
    >
      <h1>Welcome to TextUtils</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere culpa
        iusto dolores provident quisquam nisi expedita earum omnis, cupiditate
        dignissimos, vel eum placeat fuga?
      </p>
    </div>
  );
};

export default Root;
