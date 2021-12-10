import { useState, useEffect } from "react";
import { projectFirestore } from "../config/config";

const useFireStore = collection => {
  // useState hook
  const [docs, setDocs] = useState([]); // nu är docs === [].
  useEffect(() => {
    // körs de gånger som useFirestore är invoked
    const unsub = projectFirestore
      .collection(collection) // hämtar addressen/kopplingen till Firebase.
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        // snap innehåller information från firebase
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); // lägger till i firebase
        });
        setDocs(documents); // setState av docs
      });
    return () => unsub(); // rensar minnet av applikationen
  }, [collection]);

  return {docs};
};

export default useFireStore;
