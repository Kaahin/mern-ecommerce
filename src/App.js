import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // useLocation,
} from "react-router-dom";
import UserContext from "./context/GlobalState";
import { Footer, Navbar, ScrollToTop } from "./components";
import GlobalStyle from "./globalStyles";
import {
  Addresses,
  Admin,
  Dashboard,
  Error,
  Home,
  Login,
  MyAccount,
  SignUp,
} from "./pages";
import { ProtectedRoute, ProtectedRouteAdmin } from "./components";

function App() {
  // const location = useLocation();
  const [auth, setAuth] = useState(false);
  const [names, setNames] = useState({
    first: "",
    last: "",
  });

  const [count, setCount] = useState(0);
  const [addrList, setAddrList] = useState("");

  const getUser = async () => {
    await axios
      .get("http://localhost:4000/user", {
        withCredentials: true,
      })
      .then((response) => {
        setAuth(response.data.pair.auth);
        setNames({
          first: response.data.userInfo.first,
          last: response.data.userInfo.last,
        });
      })
      .catch(() => console.log("not logged in"));
  };

  const getAddress = async () => {
    await axios
      .get("http://localhost:4000/address", { withCredentials: true })
      .then((response) => {
        const allAddrList = response.data;
        setCount(response.data.length);
        setAddrList(allAddrList);
      });
  };

  useEffect(() => {
    getAddress();
    getUser();
    console.log(auth);
  }, [auth]);

  return (
    <UserContext.Provider
      value={{
        addrList,
        setAddrList,
        auth,
        setAuth,
        count,
        setCount,
        names,
        setNames,
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteAdmin>
                <Dashboard />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin"
            element={!auth ? <Admin /> : <Navigate to="/dashboard" />}
          />
        </Routes>

        <ScrollToTop />
        <GlobalStyle />
        {/* {location.path === "/dashboard" || location.path === "/admin" ? null : (
          <Navbar />
        )} */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="account/addresses"
            element={
              <ProtectedRoute>
                <Addresses />
              </ProtectedRoute>
            }
          />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/account" />}
          />
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/* {location.path === "/dashboard" || location.path === "/admin" ? null : (
          <Footer />
        )} */}
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
