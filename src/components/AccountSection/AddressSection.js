import React, { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/GlobalState";
import AddrForm from "../FormSection/AddrForm";
import Heading, {
  AcctButton,
  AcctContainer,
  AcctHeader,
  AcctNav,
  AcctSec,
  AcctSpan,
  AcctToogle,
} from "./AccountSection.elements";
import AddressList from "./AddressList";

const AddressSection = ({ header, link, lightBg }) => {
  const [toogle, setToogle] = useState(false);
  const {addrList} = useContext(UserContext);

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
            <Heading level={1} style={{ marginBottom: "20px" }}>
              {header}
            </Heading>
            <AcctButton onClick={() => setToogle(!toogle)}>
              {link[1]}
            </AcctButton>
          </AcctHeader>
          <AcctToogle toogle={toogle}>
            <AddrForm header={"Add address"} submitBtn={"ADD ADDRESS"} />
          </AcctToogle>
          <AddressList addrList={addrList} />
        </AcctContainer>
      </AcctSec>
    </>
  );
};

export default AddressSection;
