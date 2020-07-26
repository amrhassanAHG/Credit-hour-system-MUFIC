import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class WritePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Write post</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/" exact={true}>
                      Home
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item">Write post</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Write Post</h3>
              </div>
              <form className="form" role="form">
                <div className="card-body">
                  <div className="mb-3">
                    <textarea
                      className="textarea"
                      placeholder="Place some text here"
                      style={{
                        width: "100%",
                        height: "200px",
                        fontSize: "14px",
                        lineHeight: "18px",
                        border: "1px solid #dddddd",
                        padding: "10px",
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
