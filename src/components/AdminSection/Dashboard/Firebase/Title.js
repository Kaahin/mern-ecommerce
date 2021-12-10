import React from "react";
import { Heading } from "../../../InfoSection/InfoSection.elements";
import { FirebaseTitle } from "./Firebase.elements";

const Title = () => {
  return (
    <FirebaseTitle>
      <Heading level={2} style={{ marginTop: "60px", fontSize: "19px" }}>
        Upload Image for given Item
      </Heading>
    </FirebaseTitle>
  );
};

export default Title;
