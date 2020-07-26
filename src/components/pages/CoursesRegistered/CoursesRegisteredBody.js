import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CoursesRegisteredBody extends Component {
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
                <h1 className="m-0 text-dark">Courses info.</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item">Courses</li>
                  <li className="breadcrumb-item active">information</li>
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
                <h3 className="card-title">Courses Info</h3>
              </div>
              <form className="form" role="form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-2">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control">
                          <option>-- Select Level --</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control">
                          <option value="none">-- Select Department --</option>
                          <option>All</option>
                          <option>CS</option>
                          <option>IS</option>
                          <option>IT</option>
                          <option>or</option>
                          <option>BIO</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modal-default"
                      >
                        Show
                      </button>
                    </div>
                  </div>
                  {/* /.row */}
                  <hr />
                  <h1> Course </h1>
                  <div className="row ">
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            Java
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            299
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            C++
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            230
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            Soft
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            2300
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            assemply
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            2300
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            compiler
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            2300
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            manegment
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            2000
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            English
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            20{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.row */}
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Rigesterd</h3>
                      {/* /.form-group */}
                      {/* /.col */}
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>dep</th>
                            <th>sec</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col-md-6">
                      <h3>UN Rigesterd</h3>
                      {/* /.form-group */}
                      {/* /.col */}
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>dep</th>
                            <th>sec</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td>smsm smsm </td>
                            <td>cs</td>
                            <td>2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /.row */}
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
