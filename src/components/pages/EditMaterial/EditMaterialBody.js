import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class EditMaterialBody extends Component {
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
                <h1 className="m-0 text-dark">Starter Page</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Starter Page</li>
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
          {/* SELECT2 EXAMPLE */}
          <div className="card card-default">
            <div className="card-header">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label>select Your matirail</label>
                    <select
                      defaultValue="flutter"
                      className="form-control select2 select2-danger"
                      data-dropdown-css-class="select2-danger"
                      style={{ width: "100%" }}
                    >
                      <option value="flutter">flutter</option>
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
                <div className="col-md-100">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title"> Course Material </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th style={{ width: "10px" }}>Date</th>
                            <th> Course Material </th>

                            <th style={{ width: "40px" }}>Download</th>
                            <th style={{ width: "40px" }}>edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1/1/2020.</td>
                            <td>
                              Update softwareUpdate softwareUpdate
                              softwareUpdate softwareUpdate software
                            </td>

                            <td className="project-actions text-right">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-download"></i>
                                Download
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
                            <td>5/5/2005</td>
                            <td>
                              Clean databaseCron job runningCron job runningCron
                              job runningCron job running
                            </td>

                            <td className="project-actions text-right">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-download"></i>
                                Download
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
                            <td>3/2/2020</td>
                            <td>
                              Cron job runningCron job runningCron job
                              runningCron job running
                            </td>

                            <td className="project-actions text-right">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-download"></i>
                                Download
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
                            <td>4/4/2020.</td>
                            <td>
                              Fix and squish bugsCron job runningCron job
                              runningCron job running
                            </td>

                            <td className="project-actions text-right">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-download"></i>
                                Download
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
                    </div>{" "}
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}

            {/* SELECT2 EXAMPLE */}
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
    );
  }
}
