import React, { useState } from "react";
import {
  FirebaseError,
  FirebaseForm,
  FirebaseInput,
  FirebaseLabel,
  FirebaseOutput,
} from "./Firebase.elements";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  // useState Hook
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0]; // hämtar första filen
    // kollar vi om det finns ett fil och om filen är samma format
    if (selected && types.includes(selected.type)) {
      // set file
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image (png or jpeg).");
    }
  };

  return (
    <FirebaseForm>
      <FirebaseLabel>
        <FirebaseInput type="file" onChange={changeHandler} />
        <span>+</span>
      </FirebaseLabel>
      <FirebaseOutput>
        {error && <FirebaseError>{error} </FirebaseError>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </FirebaseOutput>
    </FirebaseForm>
  );
};

export default UploadForm;
