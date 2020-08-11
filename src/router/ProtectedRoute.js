import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../services/auth.service";

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
          if (!this.state.userRole) {
            return <Redirect to="/login" />;
          } else if (
            role === this.state.userRole ||
            role.includes(this.state.userRole)
          ) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    );
  }
}
