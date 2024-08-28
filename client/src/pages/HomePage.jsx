import React from "react";

import './HomePage.scss'

import Ball from "../component/Ball/Ball";
import Input from "../component/Input/Input";

const HomePage = () => {
  return (
    <>
      <div className="page">
        <Ball />
        <Input />
      </div>
    </>
  );
};

export default HomePage;
