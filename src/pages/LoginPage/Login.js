import React from "react";
import { LoginSection } from "../../components";
import { loginObjOne } from "./Data";



const Login = () => {

  return (
    <>
      <LoginSection {...loginObjOne}  />
    </>
  );
};

export default Login;
