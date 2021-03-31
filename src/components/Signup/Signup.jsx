
import React from "react";
import fire from 'firebase';

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User registered successfully.");
        // ...
      })
      .catch((error) => {
        console.log("Failed to register user");
        // ..
      });
  };

  return (
    <div>
        <label>Email Id</label>
        <input type="email" name="email" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label><b>Password</b></label>
        <input type="password" name="password" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button id="btn1" color="primary" onClick={signup} > Signup </button>
    </div>
  );
}

