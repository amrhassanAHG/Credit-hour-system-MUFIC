import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ViewExcuses extends Component {
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
                <h1 className="m-0 text-dark">Excuses</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">view excuses</li>
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
                <h3 className="card-title">View Excuses</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>select A matirail</label>
                      <select
                        defaultValue="java"
                        className="form-control select2 select2-danger"
                        data-dropdown-css-class="select2-danger"
                        style={{ width: "100%" }}
                      >
                        <option value="java">java</option>
                        <option>c++</option>
                        <option>python</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}

                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title"> Students execuses </h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th style={{ width: "10px" }}>Date</th>

                              <th> Student name </th>
                              <th> Reason </th>

                              <th style={{ width: "100px" }}>view</th>
                              <th style={{ width: "100px" }}>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1/1/2020.</td>
                              <td>Mohamed osama el shwiakh</td>
                              <td>I was sick</td>

                              <td className="project-actions text-right">
                                <a className="btn btn-primary btn-sm" href="#">
                                  <i className="fas fa-folder"></i>
                                  View
                                </a>
                              </td>
                              <td className="project-actions text-right">
                                <a className="btn btn-danger btn-sm" href="#">
                                  <i className="fas fa-trash"></i>
                                  Delete
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>1/1/2020.</td>
                              <td>Mohamed osama el shwiakh</td>
                              <td>I was sick</td>
                              <td className="project-actions text-right">
                                <a className="btn btn-primary btn-sm" href="#">
                                  <i className="fas fa-folder"></i>
                                  View
                                </a>
                              </td>
                              <td className="project-actions text-right">
                                <a className="btn btn-danger btn-sm" href="#">
                                  <i className="fas fa-trash"></i>
                                  Delete
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>1/1/2020.</td>
                              <td>Mohamed osama el shwiakh</td>
                              <td>I was sick</td>
                              <td className="project-actions text-right">
                                <a className="btn btn-primary btn-sm" href="#">
                                  <i className="fas fa-folder"></i>
                                  View
                                </a>
                              </td>
                              <td className="project-actions text-right">
                                <a className="btn btn-danger btn-sm" href="#">
                                  <i className="fas fa-trash"></i>
                                  Delete
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-right">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              &laquo;
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              &raquo;
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
