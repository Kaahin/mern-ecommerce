import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import UserContext from "../../context/GlobalState";

const useForm = () => {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    address: "",
    care_of: "",
    city: "",
    country: "",
    postal_code: "",
    phone: "",
  });

  const [error, setError] = useState(null);
  const _isMounted = useRef(true);
  const user = useContext(UserContext);

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
      .then(() => {});
  };

  
  const login = () => {
    const { email, password } = values;
    const data = { email, password };

    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then((response) => {
        if (_isMounted) {
          user.setValues((values) => ({
            ...values,
            email: response.data.email,
          }));

          setValues((values) => ({
            ...values,
            email: "",
            password: "",
          }));
          setError(false);

          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  const createUser = () => {
    const data = values;
    axios
      .post("http://localhost:4000/register", data, { withCredentials: true })
      .then((response) => {
        if (_isMounted) {
          user.setValues((values) => ({
            ...values,
            email: response.data.email,
          }));

          setValues((values) => ({
            ...values,
            email: "",
            password: "",
          }));

          setError(false);

          setTimeout(() => {
            window.location = "/account";
          }, 3000);
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

  const handleSubmitAddress = () => {
    addAddr();
  };


  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login();
  };

  const handleSubmitReg = (e) => {
    e.preventDefault();
    createUser();
  };

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  return {
    error,
    setError,
    handleChange,
    handleSubmitAddress,
    handleSubmitLogin,
    handleSubmitReg,
    setValues,
    values,
  };
};

export default useForm;
