import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import "./Login.css";


export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-password").value;
    const message = document.getElementById("error-message");

    if (email === "" || pass === "") {
      message.innerHTML = "Please Enter your email and password";
    } else {
      /*if (!isEmail(email)) {
        message.innerHTML = "enter a valid email";
      } else {*/
      const userData = AuthService.login(email, pass, 7);
      
      Promise.resolve(userData).then((value) => {
        if(!value) {
          message.innerHTML = "your email or password might be wrong";
        }else if (value && value.accessToken) {
          this.props.history.push("/");
          window.location.reload();
        }
      });
      //}
    }
  };

  render() {
    if(AuthService.getRole()){
      this.props.history.push('/');
    }

    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/">
              <b style={{ color: "white" }}>MUFCI</b>
              <b style={{ color: "white" }}>System</b>
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="../../index3.html" onSubmit={this.onLogin}>
                <div className="input-group mb-3">
                  <input
                    id="login-email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    id="login-password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                    >
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div id="error-message" style={{ color: "red" }}></div>
              <p className="mb-1">
                <a href="/forget-password">I forgot my password</a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}
