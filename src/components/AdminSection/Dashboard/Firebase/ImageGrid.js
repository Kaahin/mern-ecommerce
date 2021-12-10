import React from "react";
import { FirebaseImgGrid, FirebaseImgWrapper } from "./Firebase.elements";
import useFireStore from "./hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFireStore("images");

  return (
    <FirebaseImgGrid>
      {docs &&
        docs.map((doc) => {
          return (
            <FirebaseImgWrapper
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <img src={doc.url} alt="cool bild" />
            </FirebaseImgWrapper>
          );
        })}
    </FirebaseImgGrid>
  );
};

export default ImageGrid;
