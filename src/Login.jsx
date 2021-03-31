import React, { Component } from 'react';
import fire from 'firebase';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const history = useHistory();
  
    const login = () => {
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          history.push("/");
        })
        .catch((error) => console.log(error));
    };
  
    React.useEffect(() => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          history.push("/");
        }
      });
    }, [history]);
  
    return (
      <div>
        <label>Email Id</label>
        <input value={email} type="email" name="email" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  />
        
        <label><b>Password</b></label>
        <input type="password" name="password" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
        
        <button id="btn1" color="primary" onClick={login} > Login </button>
      </div>
    );
  }
  
  

