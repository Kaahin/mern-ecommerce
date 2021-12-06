import React, { Fragment, useState } from "react";
import { AcctButton, AcctSubtitle } from "./AccountSection.elements";
import AddrForm from "../FormSection/AddrForm";
import axios from "axios";

const AddressList = (props) => {
  const [toogle, setToogle] = useState({});
  const toogleForm = (id) => {
    setToogle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const deleteAddr = (id) => {
    const _delete = window.confirm(
      "Are you sure you wish to delete this address?"
    );
    if (_delete) {
      const data = { _id: id };
      axios.post("http://localhost:4000/deleteADR", data, {
        withCredentials: true,
      });
      window.location.reload();
    }
  };

  if (props.addrList.length > 0) {
    return props.addrList.map((addr) => {
      return (
        <Fragment key={addr._id}>
          <AcctSubtitle>
            {addr.first} {addr.last}
            <br />
            {addr.address}
            <br />
            {addr.care_of}
            <br />
            {addr.postal_code} {addr.city}
            <br />
            {addr.country}
          </AcctSubtitle>
          <AcctButton
            style={{ borderColor: "transparent" }}
            onClick={() => toogleForm(addr._id)}
          >
            Edit
          </AcctButton>
          <AcctButton onClick={() => deleteAddr(addr._id)}>Delete</AcctButton>
          <hr style={{ margin: "45px 0 45px 0" }} />
          {toogle[addr._id] ? (
            <AddrForm
              id={addr._id}
              update={true}
              header={"Edit Address"}
              submitBtn={"UPDATE ADDRESS"}
            />
          ) : (
            "null"
          )}
        </Fragment>
      );
    });
  } else {
    return <></>;
  }
};

export default AddressList;
