import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class AddCourseManuallyBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Courses </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">Course</li>
                  <li className="breadcrumb-item active">Register</li>
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
                <h3 className="card-title  ">Add Course</h3>
              </div>
              <form className="form" role="form">
                <div className="col">
                  <div className="form-group ">
                    <label>Course code</label>
                    <input className="form-control" id="exampleInputEmail1" />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>English Name</label>
                    <input className="form-control" id="exampleInputEmail1" />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>Arabic Name</label>
                    <input className="form-control" id="exampleInputEmail1" />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>Hours</label>
                    <input className="form-control" id="exampleInputEmail1" />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>Lec Hours</label>
                    <input className="form-control" id="exampleInputEmail1" />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>Lab Hours</label>
                    <input className="form-control" id="exampleInputEmail1" />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Type </label>
                    <select
                      className="form-control  "
                      data-dropdown-css-class="select2-primary"
                      style={{ width: "100%" }}
                    >
                      <option selected="selected">motatlab</option>
                      <option>java</option>
                      <option>c++</option>
                      <option>python</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Pre Courses</label>
                    <div className="select2-purple">
                      <select
                        className="select2"
                        multiple="multiple"
                        data-placeholder="Select a State"
                        data-dropdown-css-class="select2-purple"
                        style={{ width: "100%" }}
                      >
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Enter ..."
                      defaultValue={""}
                    />
                  </div>
                  <hr />
                </div>
                <div className="card-footer float-right">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
                {/* /.modal-content */}
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
