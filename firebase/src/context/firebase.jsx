import { createContext, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
let firebaseAuth = getAuth(app);

let firebaseContext = createContext();
let createUser = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};
let singin = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

function firebaseProvider({ children }) {
  let useFirebase = useContext(firebaseContext);
  return (
    <firebaseContext.Provider value={{ createUser, singin }}>
      {children}
    </firebaseContext.Provider>
  );
}
