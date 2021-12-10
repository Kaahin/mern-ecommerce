import React from "react";
import { AdminLoginSection } from "../../components";
import { adminObjOne } from "./Data";

const Admin = () => {
  return (
    <>
      <AdminLoginSection {...adminObjOne} />
    </>
  );
};

export default Admin;
