import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/GlobalState";

import Heading, {
  AcctButton,
  AcctContainer,
  AcctGrid,
  AcctGridItem,
  AcctHeader,
  AcctSec,
  AcctSubtitle,
} from "./AccountSection.elements";

const MyAccountSection = ({ area, header, lightBg, link, subtitle }) => {
  const { names, count, setAuth } = useContext(UserContext);

  const logout = () => {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then(() => {
        setAuth(false);
      });
  };
  return (
    <>
      <AcctSec lightBg={lightBg}>
        <AcctContainer>
          <AcctHeader>
            <Heading level={1}>{header[0]}</Heading>
            <AcctButton to={"/"} onClick={() => logout()}>
              {link[0]}
            </AcctButton>
          </AcctHeader>
          <AcctGrid>
            <AcctGridItem area={area[0]}>
              <Heading level={2} style={{ fontSize: "18px" }}>
                {header[1]}
              </Heading>
              <AcctSubtitle>{subtitle[0]}</AcctSubtitle>
            </AcctGridItem>
            <AcctGridItem area={area[1]}>
              <Heading level={3} style={{ fontSize: "14px" }}>
                {header[2]}
              </Heading>
              <AcctSubtitle>
                {names.first} {names.last}
              </AcctSubtitle>
              <AcctSubtitle>
                <Link
                  to="./addresses"
                  style={{
                    textDecoration: "none",
                    color: "#1c2237",
                    cursor: "pointer",
                  }}
                >
                  {link[1]} {'('}{count}{')'}
                </Link>
              </AcctSubtitle>
            </AcctGridItem>
          </AcctGrid>
        </AcctContainer>
      </AcctSec>
    </>
  );
};

export default MyAccountSection;
