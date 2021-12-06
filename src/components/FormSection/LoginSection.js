import React, { useRef } from "react";
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

const LoginSection = ({
  errorMsg,
  header,
  label,
  lightBg,
  lightTextDesc,
  lightTopLine,
  link,
  submitLabel,
}) => {
  const { handleChange, values, handleSubmitLogin, error } = useForm();
  
  // Går det att göra ett enklare utryck??
  //----------
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const onClickFocus = (input) => {
    input.current.focus();
  };
  //-------------

  return (
    <FormSec lightBg={lightBg}>
      <FormContainer>
        <FormHeader lightTopLine={lightTopLine}>
          <FormTitle>{header}</FormTitle>
        </FormHeader>
        <FormContent>
          <Form onSubmit={handleSubmitLogin}>
            {error && (
              <FormError>
                <FormList>
                  <FormListItem>{errorMsg}</FormListItem>
                </FormList>
              </FormError>
            )}
            <FormLabel
              onClick={() => onClickFocus(inputRef)}
              lightTextDesc={lightTextDesc}
            >
              {label[0]}
            </FormLabel>
            <FormInput
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              ref={inputRef}
              autoFocus
            />
            <FormLabel
              onClick={() => onClickFocus(inputRef2)}
              lightTextDesc={lightTextDesc}
            >
              {label[1]}
            </FormLabel>
            <FormInput
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
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
