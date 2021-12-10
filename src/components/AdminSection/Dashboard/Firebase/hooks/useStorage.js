// ännu en custom hook.
import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../config/config";

const useStorage = (file) => {
  // Set progress
  const [progress, setProgress] = useState(0);
  // set errors
  const [error, setError] = useState(null);
  // set urls
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // referencer till Firebase
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    // laddar vi upp bilden från dator till Firebase.
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage); // här ger vi värded till progress.
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        // har laddar vi upp filen.
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
