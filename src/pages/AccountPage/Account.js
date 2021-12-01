import axios from "axios";
import React, { useState, useEffect } from "react";
import UserContext from "../../context/GlobalState";
import { Link } from "react-router-dom";

const Account = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((response) => {
        setEmail(response.data.email);
      });
  }, []);

  const logout = () => {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then(() => {
          setEmail("");
          window.location.reload(true)
    });
  };

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <div>
        {!!email && (
          <div>
            Logged in as {email}
            <button style={{ cursor: "pointer" }} onClick={() => logout()}>
              <Link to="/">Log out</Link>
            </button>
          </div>
        )}
        {/* {!email && <div>Not logged in </div>} */}
      </div>
    </UserContext.Provider>
  );
};

export default Account;
