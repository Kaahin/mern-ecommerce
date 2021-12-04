import React from "react";
import { AccountSection } from "../../components";
import { accountObjOne } from "./Data";

const Account = () => {
  return (
    <>
      <AccountSection {...accountObjOne} />
    </>
  );
};

export default Account;
