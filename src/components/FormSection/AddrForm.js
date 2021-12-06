import axios from "axios";
import React from "react";
import Heading from "../AccountSection/AccountSection.elements";
import {
  Form,
  FormGrid,
  FormGridItem,
  FormInput,
  FormLabel,
  FormSubmit,
  FormSubmitBtn,
} from "./FormSection.elements";
import useForm from "./useForm";

const AddrForm = (props) => {
  const { id, header, submitBtn, update } = props;

  const updateAddr = () => {
    console.log(id);
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
      _id: id,
    };

    axios
      .post("http://localhost:4000/updateADR", data, { withCredentials: true })
      .then(() => {});
  };

  const { handleChange, handleSubmitAddress, values } = useForm();
  const handleSubmitUpdateAddress = (id) => {
    updateAddr(id);
  };

  return (
    <>
      <Form
        onSubmit={
          update === true ? handleSubmitUpdateAddress : handleSubmitAddress
        }
      >
        <Heading level={2} style={{ marginBottom: "15px", fontSize: "19px" }}>
          {header}
        </Heading>
        <FormGrid>
          <FormGridItem>
            <FormLabel>FIRST NAME</FormLabel>
            <FormInput
              name="first"
              type="text"
              value={values.first}
              onChange={handleChange}
            />
          </FormGridItem>
          <FormGridItem>
            <FormLabel>LAST NAME</FormLabel>
            <FormInput
              name="last"
              type="text"
              value={values.last}
              onChange={handleChange}
            />
          </FormGridItem>
        </FormGrid>
        <FormLabel>ADDRESS</FormLabel>
        <FormInput
          name="address"
          type="text"
          value={values.address}
          onChange={handleChange}
        />
        <FormLabel>C/O</FormLabel>
        <FormInput
          name="care_of"
          type="text"
          value={values.care_of}
          onChange={handleChange}
        />
        <FormGrid>
          <FormGridItem>
            <FormLabel>CITY</FormLabel>
            <FormInput
              name="city"
              type="text"
              value={values.city}
              onChange={handleChange}
            />
          </FormGridItem>
          <FormGridItem>
            <FormLabel>COUNTRY</FormLabel>
            <FormInput
              name="country"
              type="text"
              value={values.country}
              onChange={handleChange}
            />
          </FormGridItem>
        </FormGrid>
        <FormGrid>
          <FormGridItem>
            <FormLabel>POSTAL/ZIP CODE</FormLabel>
            <FormInput
              name="postal_code"
              type="text"
              value={values.postal_code}
              onChange={handleChange}
            />
          </FormGridItem>
          <FormGridItem>
            <FormLabel>PHONE</FormLabel>
            <FormInput
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
            />
          </FormGridItem>
        </FormGrid>
        <FormSubmit>
          <FormInput
            type="checkbox"
            style={{
              display: "inline-block",
              margin: "0 10px 30px 0",
              width: "auto",
            }}
          />
          <FormLabel style={{ display: "inline" }}>SET AS DEFAULT</FormLabel>
        </FormSubmit>

        <FormSubmit>
          <FormSubmitBtn
            type="submit"
            style={{
              display: "inline-block",
              position: "relative",
              transition: "background 0.2s ease 0s",
              width: "auto",
            }}
          >
            {submitBtn}
          </FormSubmitBtn>
        </FormSubmit>
      </Form>
    </>
  );
};

export default AddrForm;
