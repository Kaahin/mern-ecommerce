import React from "react";
import { RegSection } from "../../components";
import { signupObjOne } from "./Data";

const SignUp = () => {
  return (
    <>
      <RegSection {...signupObjOne} />
    </>
  );
};

export default SignUp;
