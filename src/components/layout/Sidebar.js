import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userImage from "../../assets/user2-160x160.jpg";
import adminLteLogo from "../../assets/logo.jpg";
import AuthService from "../../services/auth.service";
import {studentRole, lecturerRole, adminRole} from '../../staticData'
//import './SideBar.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: props.semester ? true : false,
      role: AuthService.getRole(),
    };
  }

  render() {
    return (
      <div>
        {/* Brand Logo */}
        <a className="brand-link">
          <img
            src={adminLteLogo}
            alt="AdminLTE Logo"
            width="60"
            height="60"
            className="img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span
            style={{ marginLeft: "10px" }}
            className="brand-text font-weight-dark"
          >
            MUFIC
          </span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {this.state.role === {studentRole} && (
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={userImage}
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <NavLink
                  to="/profile"
                  activeClassName="active"
                  className="d-block"
                >
                  {AuthService.getCurrentUser().username}
                </NavLink>
              </div>
            </div>
          )}

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon className
                              with font-awesome or any other icon font library */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                  exact={true}
                >
                  <i className="nav-icon fa fa-home"></i>
                  <p>
                    Home
                    <span className="right badge badge-danger">New</span>
                  </p>
                </NavLink>
              </li>

              {this.state.role === studentRole && (
                <ul className="nav nav-pills nav-sidebar flex-column">
                  <li className="nav-header">Student</li>
                  <li className="nav-item">
                    <NavLink
                      to="/registercourses"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-edit"></i>
                      <p>
                        Register Courses
                        <span className="right badge badge-danger">New</span>
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/materials"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-download"></i>
                      <p>Materails</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/courses"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-book"></i>
                      <p>Courses</p>
                    </NavLink>
                  </li>

                  <li
                    className={`nav-item has-treeview ${
                      this.state.semester === true ? "menu-open" : ""
                    }`}
                  >
                    <NavLink
                      to="no-where"
                      className={`nav-link ${
                        this.state.semester === true ? "active" : ""
                      }`}
                    >
                      <i className="nav-icon fas fa-user-alt"></i>
                      <p>
                        Status
                        <i className="right fas fa-angle-down"></i>
                      </p>
                    </NavLink>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <NavLink
                          to="/first-semester-result"
                          activeClassName="active"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>First Semster</p>
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/second-semester-result"
                          activeClassName="active"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Second Semster</p>
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/summer-semester-result"
                          activeClassName="active"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Summer Semster</p>
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/excuse"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-backspace"></i>
                      <p>
                        Excuse
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/department"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-list-ol"></i>
                      <p>Department</p>
                    </NavLink>
                  </li>
                </ul>
              )}

              {this.state.role === lecturerRole && (
                <ul className="nav nav-pills nav-sidebar flex-column">
                  <li className="nav-header">Lecturer</li>

                  <li className="nav-item">
                    <NavLink
                      to="/student-marks"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-edit"></i>
                      <p>
                        Student marks
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/edit-material"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-cogs"></i>
                      <p>
                        Edit Materails
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/upload-materials"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-upload"></i>
                      <p>
                        upload Materails
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/write-post"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-pen"></i>
                      <p>
                        Write Post
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/view-excuses"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-glasses"></i>
                      <p>
                        View Excuses
                        <span className="right badge badge-danger">New</span>
                      </p>
                    </NavLink>
                  </li>
                </ul>
              )}

              {this.state.role === adminRole && (
                <ul className="nav nav-pills nav-sidebar flex-column">
                  <li className="nav-item">
                    <NavLink
                      to="/terms"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-check"></i>
                      <p>
                        Terms
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/write-post"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-pen"></i>
                      <p>
                        Write Post
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/students"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-users"></i>
                      <p>STudents</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/add-student"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-plus"></i>
                      <p>Add STudents</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/payments"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-credit-card"></i>
                      <p>Payments</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/registration-provement"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-check"></i>
                      <p>Registeration provement</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/admin-courses"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-random"></i>
                      <p>Courses</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/courses-registered"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <i className="nav-icon fa fa-chart-pie"></i>
                      <p>Courses Registered</p>
                    </NavLink>
                  </li>
                </ul>
              )}

              <li className="nav-header"></li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </div>
    );
  }
}
