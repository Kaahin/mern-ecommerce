import axios from "axios";
import React, { useContext, useState, useRef } from "react";
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

const RegSection = ({
  error,
  header,
  label,
  lightBg,
  lightTextDesc,
  lightTopLine,
  submitLabel,
}) => {
  const [name, setName] = useState(["", ""]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignUpError] = useState(false);

  const user = useContext(UserContext);

  // Går det att göra ett enklare utryck??
  //----------
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const onClickFocus = (input) => {
    input.current.focus();
  };

  //----------

  const createUser = (e) => {
    e.preventDefault();
    const data = { first: name[0], last: name[1], email, password };
    axios
      .post("http://localhost:4000/register", data, { withCredentials: true })
      .then((response) => {
        user.setEmail(response.data.email);
        setEmail("");
        setPassword("");
        setSignUpError(false);
      })
      .catch(() => {
        setSignUpError(true);
      });
  };

  const handleChange = (index, value) => {
    setName((prevName) =>
      prevName.map((item, idx) => (idx === index ? value : item))
    );
  };

 



  return (
    <>
      <FormSec lightBg={lightBg}>
        <FormContainer>
          <FormHeader lightTopLine={lightTopLine}>
            <FormTitle>{header}</FormTitle>
          </FormHeader>
          <FormContent>
            <Form onSubmit={(e) => createUser(e)}>
              {signupError && (
                <FormError>
                  <FormList>
                    <FormListItem>{error}</FormListItem>
                  </FormList>
                </FormError>
              )}
              <FormLabel
                onClick={() => onClickFocus(inputRef)}
                lightTextDesc={lightTextDesc}
              >
                {label[2]}
              </FormLabel>
              <FormInput
                type="text"
                value={name[0]}
                onChange={(e) => handleChange(0, e.target.value)}
                autoFocus
                ref={inputRef}
              />
              <FormLabel
                onClick={() => onClickFocus(inputRef2)}
                lightTextDesc={lightTextDesc}
              >
                {label[3]}
              </FormLabel>
              <FormInput
                type="text"
                value={name[1]}
                onChange={(e) => handleChange(1, e.target.value)}
                ref={inputRef2}
              />
              <FormLabel
                onClick={() => onClickFocus(inputRef3)}
                lightTextDesc={lightTextDesc}
              >
                {label[0]}
              </FormLabel>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={inputRef3}
              />
              <FormLabel
                onClick={() => onClickFocus(inputRef4)}
                lightTextDesc={lightTextDesc}
              >
                {label[1]}
              </FormLabel>
              <FormInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={inputRef4}
              />
              <FormSubmit>
                <FormSubmitBtn type="submit">{submitLabel}</FormSubmitBtn>
              </FormSubmit>
            </Form>
          </FormContent>
        </FormContainer>
      </FormSec>
    </>
  );
};

export default RegSection;
