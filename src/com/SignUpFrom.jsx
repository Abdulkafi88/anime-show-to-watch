import React from "react"
import "../Login.css"
import { useState, useEffect } from "react"
import { auth } from "../Firebase"
import { Form, Navigate, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
export const SignUpFrom = ({ setUserEmail }) => {
  const [SignUpEmail, setSignUpEmail] = useState("")
  const [SignUPPassword, setSignUpPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const nav = useNavigate()
  const SignUP = async () => {
    if (!SignUpEmail.trim() || !SignUPPassword.trim()) {
      alert("please enter your email and password")
    }
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        SignUpEmail,
        SignUPPassword
      )
      if(res){
        nav('/Popular')
      }
      if (res.user && res.user.email) {
        setUserEmail(res.user.email)
        console.log(res.user)
      }

      console.log(res)
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setErrorMessage(
          "Email is already in use. Please use a different email."
        )
      } else if (err.code === "auth/invalid-email") {
        setErrorMessage("please enter your email and password")
      } else {
        setErrorMessage("An error occurred. Please try again later.")
      }

      console.error(err)
    }
   
  }
  return (
    <div className="wrapper" style={{ border: "5px solid #e5e7eb" }}>
      <div className="heading">
        <h2 style={{ color: "#454e56" }}>Welcome!</h2>
        <p>Sign up</p>
        <p>{errorMessage}</p>
      </div>

      <div className="input-group">
        <input
          type="text"
          id="email"
          className="input-field"
          placeholder="email"
          onChange={(e) => {
            setSignUpEmail(e.target.value)
          }}
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
          onChange={(e) => {
            setSignUpPassword(e.target.value)
          }}
        />
      </div>

      <div className="input-group row">
        <div className="row">
          <input type="checkbox" id="remember" hidden />
        </div>
      </div>

      <div className="input-group">
        <button
          onClick={SignUP}
          className="login-btn"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "5px solid #e5e7eb",
          }}
        >
          Login{" "}
        </button>
      </div>
    </div>
  )
}

export default SignUpFrom
