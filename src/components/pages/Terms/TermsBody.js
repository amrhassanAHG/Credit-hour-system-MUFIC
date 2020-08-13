import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TermsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms:[{
        nameArabic: 'الترم الاول',
        nameEnglish: 'First term',
        startDate: '1/10/2018',
        endDate: '15/1/2019'
      },{
        nameArabic: 'الترم التاني',
        nameEnglish: 'Second term',
        startDate: '23/2/2019',
        endDate: '10/6/2019'
      }]
    };
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
                        <th>options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.terms.map((term) => (
                        <tr key={term.id}>
                          <td>{term.nameArabic}</td>
                          <td>{term.nameEnglish}</td>
                          <td>{term.startDate}</td>
                          <td>{term.endDate}</td>
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
                      ))}
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
