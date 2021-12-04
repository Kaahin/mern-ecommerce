import React, { useRef } from "react";
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
  FormSuccess,
  FormTitle,
} from "./FormSection.elements";
import useForm from "../useForm";

const RegSection = ({
  errorMsg,
  header,
  label,
  lightBg,
  lightTextDesc,
  lightTopLine,
  submitLabel,
  success,
}) => {
  const { error, handleChange, handleSubmitReg, values } = useForm();

  // Går det att göra ett enklare utryck??
  //----------
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const onClickFocus = (input) => {
    input.current.focus();
  };

  return (
    <>
      <FormSec lightBg={lightBg}>
        <FormContainer>
          <FormHeader lightTopLine={lightTopLine}>
            <FormTitle>{header}</FormTitle>
          </FormHeader>
          <FormContent>
            <Form onSubmit={handleSubmitReg}>
              {error === true && (
                <FormError>
                  <FormList>
                    <FormListItem>{errorMsg}</FormListItem>
                  </FormList>
                </FormError>
              )}
              {error === false && (
                <FormSuccess>
                  <FormList>
                    <FormListItem>{success}</FormListItem>
                  </FormList>
                </FormSuccess>
              )}
              <FormLabel
                onClick={() => onClickFocus(inputRef)}
                lightTextDesc={lightTextDesc}
              >
                {label[2]}
              </FormLabel>
              <FormInput
                name="first"
                type="text"
                value={values.first}
                onChange={handleChange}
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
                name="last"
                type="text"
                value={values.last}
                onChange={handleChange}
                ref={inputRef2}
              />
              <FormLabel
                onClick={() => onClickFocus(inputRef3)}
                lightTextDesc={lightTextDesc}
              >
                {label[0]}
              </FormLabel>
              <FormInput
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                ref={inputRef3}
              />
              <FormLabel
                onClick={() => onClickFocus(inputRef4)}
                lightTextDesc={lightTextDesc}
              >
                {label[1]}
              </FormLabel>
              <FormInput
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
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
