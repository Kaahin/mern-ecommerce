import React from "react";
import { FirebaseBackdrop, FirebaseBackdropImg } from "./Firebase.elements";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = () => {
    setSelectedImage(null);
  };

  return (
    <FirebaseBackdrop onClick={handleClick}>
      <FirebaseBackdropImg src={selectedImage} alt="enlarged pic" />
    </FirebaseBackdrop>
  );
};

export default Modal;
