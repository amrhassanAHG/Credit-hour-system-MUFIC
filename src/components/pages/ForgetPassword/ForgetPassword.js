import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './ForgetPassword.css'

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href=" ./index2.html">
            <b style={{ color: "white" }}>MUFCI</b>
            <b style={{ color: "white" }}>System</b>{" "}
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              You forgot your password? Here you can easily retrieve a new
              password.
            </p>
            <form action="recover-password.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Request new password
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mt-3 mb-1">
              <a href="/login">Login</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      </div>
    );
  }
}
