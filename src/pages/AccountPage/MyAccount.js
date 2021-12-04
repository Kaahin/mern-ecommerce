import React from "react";
import { MyAccountSection } from "../../components";
import { myaccountObjOne } from "./Data";

const MyAccount = () => {
  return (
    <>
      <MyAccountSection {...myaccountObjOne} />
    </>
  );
};

export default MyAccount;
