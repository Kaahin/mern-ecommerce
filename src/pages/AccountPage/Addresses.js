import React from "react";
import { AddressSection } from "../../components";
import { addressObjOne } from "./Data";

const Addresses = () => {
  return (
    <>
      <AddressSection {...addressObjOne} />
    </>
  );
};

export default Addresses;
