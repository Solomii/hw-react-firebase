import React, { useState, useEffect } from "react";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/title")
      }
    })
  }, []);

  const handleEmailChange = (e) => {
   setEmail(e.target.value)
  }
  
   const handlePasswordChange = (e) => {
   setPassword(e.target.value)
  }
  
  const hanleSignIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate('/title')
    })
    .catch((err) => alert(err.massage))
  }

  const handleRegister = () => {
    if (register.password !== register.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    
    createUserWithEmailAndPassword(auth, register.email, register.password)
    .then(() => {
      navigate('/title')
    })
    .catch((err) => alert(err.massage))
  }

  return (
    <div className="signin__page">
      <h2>Sing in</h2>
      <div className="login__registering__box">
        {isRegistering  ? (
          <>
          <input type="email" placeholder="Enter email..." value={register.email} onChange={(e) => setRegister({ ...register, email:e.target.value})} />
          <input type="password" placeholder="Password..." value={register.password}  onChange={(e) => setRegister({ ...register, password:e.target.value})} />
          <input type="password" placeholder="Confirm password..." value={register.confirmPassword} onChange={(e) => setRegister({ ...register, confirmPassword:e.target.value})} />
          <button className="register__btn" onClick={handleRegister} type="submit">Register</button>
          <div>
          <button className="go__back__btn"  onClick={() => setIsRegistering(false)}>Go back</button>
         </div>
          </> 
        ) : (
          <>
          <input type="email" placeholder="Enter email..." value={email}  onChange={handleEmailChange} />
          <input type="password" placeholder="Password..." value={password}  onChange={handlePasswordChange}/>
          <button className="sign__in__btn" onClick={hanleSignIn} type="submit">sign in</button>
          <button className="create__account__btn" onClick={() => setIsRegistering(true)}>Create an acount</button>
          </>
        )}
      </div>
    </div>
  )
}