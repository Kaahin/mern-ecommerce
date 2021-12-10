import axios from "axios";
import { useEffect, useContext, useRef, useState } from "react";
import UserContext from "../../context/GlobalState";
import { useLocation } from "react-router-dom";

const useForm = () => {
  const location = useLocation();
  const _isMounted = useRef(true);
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);
  const [values, setValues] = useState({
    address: "",
    care_of: "",
    city: "",
    country: "",
    email: "",
    first: "",
    item: "",
    last: "",
    password: "",
    phone: "",
    postal_code: "",
    price: "",
  });

  const addAddr = () => {
    const { first, last, address, care_of, city, country, postal_code, phone } =
      values;
    const data = {
      first,
      last,
      address,
      care_of,
      city,
      country,
      postal_code,
      phone,
    };

    axios
      .post("http://localhost:4000/address", data, { withCredentials: true })
      .then(() => {
        window.location.reload();
      });
  };

  const addProd = () => {
    const { item, price } = values;
    const data = {
      item,
      price,
    };

    axios
      .post("http://localhost:4000/product", data, { withCredentials: true })
      .then(() => {});
  };

  const login = () => {
    const { email, password } = values;
    const data = { email, password };

    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then((response) => {
        user.setAuth(response.data.auth);
        setValues((values) => ({
          ...values,
          email: "",
          password: "",
        }));
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  const loginAdmin = () => {
    const { email, password } = values;
    const data = { email, password };

    axios
      .post("http://localhost:4000/login/admin", data, {
        withCredentials: true,
      })
      .then((response) => {
        user.setAuth(response.data.auth);
        setValues((values) => ({
          ...values,
          email: "",
          password: "",
        }));
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  const createUser = async () => {
    const { email, first, last, password} = values;
    const data = { email, first, last, password};
    await axios
      .post("http://localhost:4000/register", data, { withCredentials: true })
      .then((response) => {
        if (_isMounted) {
          setError(false);
          const newdata = response.data.auth;
          user.setAuth(newdata);
          setValues((values) => ({
            ...values,
            email: "",
            password: "",
          }));
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    addAddr();
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    addProd();
  };

  const handleSubmitLogin = () => {
    login();
  };
  const handleSubmitLoginAdmin = () => {
    loginAdmin();
  };

  const handleSubmitReg = (e) => {
    e.preventDefault();
    createUser()
      .then(() => {
        window.location.reload();
      })
      .then(() => {
        window.location.href = "/account";
      });
  };

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  // useEffect(() => {
  //   if (error) {
  //     setError(null);
  //   }
  // }, [location.pathname]);

  return {
    error,
    handleChange,
    handleSubmitAddress,
    handleSubmitLogin,
    handleSubmitLoginAdmin,
    handleSubmitProduct,
    handleSubmitReg,
    setError,
    setValues,
    values,
  };
};

export default useForm;
