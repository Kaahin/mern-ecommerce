import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/GlobalState";
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
} from "../../FormSection/FormSection.elements";
import useForm from "../../FormSection/useForm";

const AdminLoginSection = ({
  errorMsg,
  header,
  label,
  lightBg,
  lightTextDesc,
  lightTopLine,
  submitLabel,
}) => {
  const { handleChange, values, handleSubmitLoginAdmin, error } = useForm();

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
          <Form onSubmit={handleSubmitLoginAdmin}>
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
              <Link to="Dashboard" />
              <FormSubmitBtn type="submit">{submitLabel}</FormSubmitBtn>
            </FormSubmit>
          </Form>
        </FormContent>
      </FormContainer>
    </FormSec>
  );
};

export default AdminLoginSection;
