import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/GlobalState";
import { Footer, Navbar, ScrollToTop } from "./components";
import GlobalStyle from "./globalStyles";
import { MyAccount, Home, Login, SignUp } from "./pages";
import Addresses from "./pages/AccountPage/Addresses";

function App() {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((response) => {
        setValues((values) => ({
          ...values,
          first: response.data.first,
          last: response.data.last,
          email: response.data.email,
        }));
      });
  }, []);

  return (
    <UserContext.Provider value={{ values, setValues }}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          {!values.email && <Route path="/account" element={<Login />} />}
          {!!values.email && <Route path="/account" element={<MyAccount />} />}
          <Route path="/account/addresses" element={<Addresses />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
