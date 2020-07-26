import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TermsBody extends Component {
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
                <h1 className="m-0 text-dark">Terms</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/" exact={true}>
                      Home
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item">Terms</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        <div className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">All Terms</h3>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <div className="  float-right">
                    <NavLink to="/add-term">
                      <button
                        style={{ width: 100, marginBottom: 10 }}
                        className="btn btn-success "
                      >
                        New Term
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Arabic Name</th>
                        <th>English name</th>
                        <th>Start Date </th>
                        <th>End Date</th>
                        <th>option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>الترم الاول</td>
                        <td>Frist Term</td>
                        <td>2/2/2020</td>
                        <td>5/5/2020</td>
                        <td>
                          <div className="row- center  ">
                            <button
                              style={{ marginRight: 10 }}
                              type=" submit"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                            <button
                              style={{ marginRight: 10 }}
                              type="submit"
                              className="btn btn-success"
                            >
                              Clone
                            </button>
                            <button type="submit" className="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>الترم الاول</td>
                        <td> Frist Term </td>
                        <td>2/2/2020</td>
                        <td> 5/5/2020</td>
                        <td>
                          <div className="row- center  ">
                            <button
                              style={{ marginRight: 10 }}
                              type=" submit"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                            <button
                              style={{ marginRight: 10 }}
                              type="submit"
                              className="btn btn-success"
                            >
                              Clone
                            </button>
                            <button type="submit" className="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>الترم الاول</td>
                        <td> Frist Term </td>
                        <td>2/2/2020</td>
                        <td> 5/5/2020</td>
                        <td>
                          <div className="row- center  ">
                            <button
                              style={{ marginRight: 10 }}
                              type=" submit"
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                            <button
                              style={{ marginRight: 10 }}
                              type="submit"
                              className="btn btn-success"
                            >
                              Clone
                            </button>
                            <button type="submit" className="btn btn-danger">
                              Delete
                            </button>
                          </div>
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
                        «
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
                        »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
        {/* /.content */}
      </div>
    );
  }
}