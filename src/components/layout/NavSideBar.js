import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import AuthService from "../../services/auth.service";
import adminImage from "../../assets/admin.png";
import lecturerImage from "../../assets/lecturer.png";

/*AuthService.getCurrentUser().imageUrl;*/

export default class NavSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: this.props.semester,
      role: AuthService.getRole(),
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="wrapper">
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>

          {/* Right navbar links */}
          {this.state.role ? (
            <ul className="navbar-nav ml-auto">
              <li
                className="nav-item dropdown user user-menu"
                style={{ marginTop: "8px", marginRight: "5px" }}
              >
                {/* Menu Toggle Button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {/* The user image in the navbar*/}
                  <img
                    src={
                      this.state.role === "ROLE_ADMIN"
                        ? adminImage
                        : lecturerImage
                    }
                    className="user-image"
                    alt="User Image"
                  />
                  {/* hidden-xs hides the username on small devices so only the image appears. */}
                  <span className="hidden-xs">
                    {AuthService.getCurrentUser().username}
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  {/* The user image in the menu */}
                  <li className="dropdown-header">
                    <img
                      src={
                        this.state.role === "ROLE_ADMIN"
                          ? adminImage
                          : lecturerImage
                      }
                      className="img-circle"
                      alt="User Image"
                    />
                    <p>{AuthService.getCurrentUser().username}</p>
                  </li>
                  {/* Menu Body */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-sm-4 text-center"></div>
                      <div className="col-sm-4 text-center"></div>
                      <div className="col-xs-4 text-center">
                        <a
                          onClick={() => AuthService.logout()}
                          href="/"
                          className="btn btn-default btn-flat"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                    {/* /.row */}
                  </li>
                </ul>
              </li>
              {/*Right bars*/}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-none d-sm-inline-block">
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              {/*Right bars*/}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          )}
        </nav>
        {/* End of navbar */}

        {/* Main Sidebar Container */}
        <div className="main-sidebar sidebar-dark-primary elevation-4">
          <Sidebar semester={this.state.semester} />
        </div>
        {/* End of Main Sidebar Container */}

        {this.props.children}
      </div>
    );
  }
}
