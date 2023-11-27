import React from "react"
import "../Login.css"
export const Login = () => {
  return (
    <div className="wrapper" style={{ border: "5px solid #e5e7eb" }}>
      <div className="heading">
        <h2 style={{ color: "#454e56" }}>Welcome!</h2>
        <p>Sign In to your account</p>
      </div>

      <div className="input-group">
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Username"
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
        />
      </div>

      <div className="input-group row">
        <div className="row">
          <input type="checkbox" id="remember" hidden />
        </div>
      </div>

      <div className="input-group">
        <button
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
