import { useState, useRef } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    setValues,
    values,
  };
};

export default useForm;
