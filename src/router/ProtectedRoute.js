import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../services/auth.service";
import { studentRole } from "../staticData";

export default class ProtectedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: AuthService.getRole(),
    };
  }

  render() {
    const { component: Component, role, ...props } = this.props;
    
    return (
      <Route
        {...props}
        render={(props) => {
          //return <Component {...props} />;
          if (!this.state.userRole) {
            return <Redirect to="/login" />;
          } else if (role.includes(this.state.userRole)) {
            return <Component {...props} />;
          } else {
            return (this.state.userRole === studentRole)? <Redirect to="/registercourses" /> : <Redirect to="/write-post" />;
          }
        }}
      />
    );
  }
}
