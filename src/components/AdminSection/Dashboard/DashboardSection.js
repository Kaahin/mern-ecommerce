import axios from "axios";
import React, { useContext, useState } from "react";
import Heading, {
  AcctButton,
  AcctContainer,
  AcctHeader,
  AcctSec,
} from "../../AccountSection/AccountSection.elements";
import {
  Form,
  FormGrid,
  FormGridItem,
  FormInput,
  FormLabel,
  FormSubmit,
  FormSubmitBtn,
} from "../../FormSection/FormSection.elements";
import useForm from "../../FormSection/useForm";
import ImageGrid from "./Firebase/ImageGrid";
import UploadForm from "./Firebase/UploadForm";
import Modal from "./Firebase/Modal";
import Title from "./Firebase/Title";
// import "./index.css";
import UserContext from "../../../context/GlobalState";

const DashboardSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const ligthBg = true;
  const { values, handleChange, handleSubmitProduct } = useForm();

  const { setAuth } = useContext(UserContext);

  const logout = () => {
    axios
      .post("http://localhost:4000/logout/admin", {}, { withCredentials: true })
      .then(() => {
        setAuth(false);
      });
  };
  return (
    <>
      <AcctSec style={{ background: "#FFF" }} ligthBg={ligthBg}>
        <AcctContainer>
          <AcctHeader>
            <Heading level={1}>Dashboard</Heading>
            <AcctButton to={"/"} onClick={() => logout()}>
              LOG OUT
            </AcctButton>
          </AcctHeader>
          <Form onSubmit={handleSubmitProduct}>
            <Heading
              level={2}
              style={{ marginBottom: "15px", fontSize: "19px" }}
            >
              PRODUCT
            </Heading>
            <FormGrid>
              <FormGridItem>
                <FormLabel>ITEM</FormLabel>
                <FormInput
                  name="item"
                  type="text"
                  value={values.item}
                  onChange={handleChange}
                />
              </FormGridItem>
              <FormGridItem>
                <FormLabel>PRICE</FormLabel>
                <FormInput
                  name="price"
                  type="text"
                  value={values.price}
                  onChange={handleChange}
                />
              </FormGridItem>
            </FormGrid>
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
                Add Item
              </FormSubmitBtn>
            </FormSubmit>
          </Form>
          <hr style={{ margin: "45px 0 45px 0" }} />
          <Title />
          <UploadForm />
          <ImageGrid setSelectedImage={setSelectedImage} />
          {selectedImage && (
            <Modal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            ></Modal>
          )}
        </AcctContainer>
      </AcctSec>
    </>
  );
};

export default DashboardSection;
