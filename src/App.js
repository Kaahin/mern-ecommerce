import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/GlobalState";
import { Footer, Navbar, ScrollToTop } from "./components";
import GlobalStyle from "./globalStyles";
import { Account, Home, Login, SignUp } from "./pages";

function App() {
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          {!email && <Route path="/log-in" element={<Login />} />}
          {!!email && <Route path="/log-in" element={<Account />} />}
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
