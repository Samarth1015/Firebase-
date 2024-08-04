import "./App.css";
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
let auth = getAuth(app);

function App() {
  let [data, setData] = useState({ email: "", password: "" });
  let singup = (e) => {
    e.preventDefault();
    console.log(data.email);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  let formData = (e) => {
    console.log(data);
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={formData}
          name="email"
          value={data.email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={formData}
          name="password"
          value={data.password}
        />
        <button onClick={singup}>click</button>
      </form>
    </>
  );
}

export default App;
