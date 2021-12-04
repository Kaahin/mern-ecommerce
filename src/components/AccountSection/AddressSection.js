import React from "react";
import { Link } from "react-router-dom";
import Heading, {
  AcctButton,
  AcctContainer,
  AcctHeader,
  AcctNav,
  AcctSec,
  AcctSpan,
} from "./AccountSection.elements";

const AddressSection = ({ header, link, lightBg }) => {
  return (
    <>
      <AcctSec lightBg={lightBg}>
        <AcctContainer>
          <AcctNav>
            <Link
              to="/account"
              style={{
                textDecoration: "none",
                color: "black",
                background: "0 0",
              }}
            >
              {link[0]}
            </Link>
            <AcctSpan>/</AcctSpan>
            {header}
          </AcctNav>
          <AcctHeader>
            <Heading level={1}>{header}</Heading>
            <AcctButton to={"/"} >
              {link[1]}
            </AcctButton>
          </AcctHeader>
        </AcctContainer>
      </AcctSec>
    </>
  );
};

export default AddressSection;
