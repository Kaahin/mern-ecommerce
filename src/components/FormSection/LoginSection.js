import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormContainer,
  FormContent,
  FormError,
  FormHeader,
  FormInput,
  FormLabel,
  FormList,
  FormListItem,
  FormSec,
  FormSubmit,
  FormSubmitBtn,
  FormTitle,
} from "./FormSection.elements";

import useForm from "./useForm";

import UserContext from "../../context/GlobalState";


const LoginSection = ({
  error,
  header,
  label,
  lightBg,
  lightTextDesc,
  lightTopLine,
  link,
  submitLabel,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const user = useContext(UserContext);
  // const {values, setValues, handleChange} = useForm();
  // Går det att göra ett enklare utryck??
  //----------
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const onClickFocus = (input) => {
    input.current.focus();
  };
  //-------------

  const loginUser = (e) => {
    e.preventDefault();

    const data = { email, password };

    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then((response) => {
        user.setEmail(response.data.email);
        setEmail("");
        setPassword("");
        setLoginError(false);
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  return (
    <FormSec lightBg={lightBg}>
      <FormContainer>
        <FormHeader lightTopLine={lightTopLine}>
          <FormTitle>{header}</FormTitle>
        </FormHeader>
        <FormContent>
          <Form onSubmit={(e) => loginUser(e)}>
            {loginError && (
              <FormError>
                <FormList>
                  <FormListItem>{error}</FormListItem>
                </FormList>
              </FormError>
            )}
            <FormLabel onClick={() => onClickFocus(inputRef)} lightTextDesc={lightTextDesc}>
              {label[0]}
            </FormLabel>
            <FormInput
              type="email"
              value={values.email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange}
              ref={inputRef}
              autoFocus
            />
            <FormLabel onClick={() => onClickFocus(inputRef2)} lightTextDesc={lightTextDesc}>
              {label[1]}
            </FormLabel>
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={inputRef2}
            />
            <FormSubmit>
              <FormSubmitBtn type="submit">{submitLabel}</FormSubmitBtn>
            </FormSubmit>
            <FormSubmit>
              <Link
                to="/sign-up"
                style={{ textDecoration: "none", color: "#1c2237" }}
              >
                {link}
              </Link>
            </FormSubmit>
          </Form>
        </FormContent>
      </FormContainer>
    </FormSec>
  );
};

export default LoginSection;
