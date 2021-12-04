import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading, {
  AcctButton,
  AcctContainer,
  AcctGrid,
  AcctGrid_item,
  AcctHeader,
  AcctSec,
  AcctSubtitle,
} from "./AccountSection.elements";


const AccountSection = ({ area, header, lightBg, link, subtitle }) => {
  const [names, setNames] = useState({
    first: "",
    last: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((response) => {
        setNames(({
          first: response.data.first,
          last: response.data.last,
        }));
      });
  }, []);

  const logout = () => {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then(() => {
        setNames(({
          first: "",
          last: "",
        }));
        window.location.reload(true);
      });
  };
  return (
      <AcctSec lightBg={lightBg}>
        <AcctContainer>
          <AcctHeader>
            <Heading level={1}>{header[0]}</Heading>
            <AcctButton to={"/"} onClick={() => logout()}>
              {link[0]}
            </AcctButton>
          </AcctHeader>
          <AcctGrid>
            <AcctGrid_item area={area[0]}>
              <Heading level={2} style={{ fontSize: "18px" }}>
                {header[1]}
              </Heading>
              <AcctSubtitle>{subtitle[0]}</AcctSubtitle>
            </AcctGrid_item>
            <AcctGrid_item area={area[1]}>
              <Heading level={3} style={{ fontSize: "14px" }}>
                {header[2]}
              </Heading>

              <AcctSubtitle>
                {names.first} {names.last}
              </AcctSubtitle>
              <AcctSubtitle>
                <Link
                  to="account/addresses"
                  style={{
                    textDecoration: "none",
                    color: "#1c2237",
                    cursor: "pointer",
                  }}
                >
                  {link[1]}
                </Link>
              </AcctSubtitle>
            </AcctGrid_item>
          </AcctGrid>
        </AcctContainer>
      </AcctSec>
  );
};

export default AccountSection;
