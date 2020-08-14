import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ViewExcuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      execuses: [
        {
          date: "1/2/2020",
          studentName: "Mohamed osama el shwiakh",
          reason: "I was sick",
        },
        {
          date: "2/3/2020",
          studentName: "Amr Hassan Gad",
          reason: "I travelled abroad",
        },
        {
          date: "13/4/2020",
          studentName: "Mustafa khaled",
          reason: "My sister's mariage",
        },
      ],

      subExecuses: [
        {
          date: "1/2/2020",
          studentName: "Mohamed osama el shwiakh",
          reason: "I was sick",
        },
        {
          date: "2/3/2020",
          studentName: "Amr Hassan Gad",
          reason: "I travelled abroad",
        },
        {
          date: "13/4/2020",
          studentName: "Mustafa khaled",
          reason: "My sister's mariage",
        },
      ],
      searchValue: "",
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
                      <label htmlFor="searchExecuse">Serach by name :</label>
                      <input
                        id="searchExecuse"
                        value={this.state.searchValue}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          this.setState({ searchValue: newValue });
                          const newSubExecuses = this.state.execuses.filter(
                            (execuse) =>
                              newValue === "" ||
                              execuse.studentName
                                .toLowerCase()
                                .includes(newValue.toLowerCase())
                          );
                          this.setState({ subExecuses: newSubExecuses });
                        }}
                        className="form-control"
                      />
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
                              <th style={{ width: "100px" }}>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.subExecuses.map((execuse, index) => (
                              <tr key={index}>
                                <td>{execuse.date}</td>
                                <td>{execuse.studentName}</td>
                                <td>{execuse.reason}</td>

                                <td className="project-actions text-right">
                                  <button
                                    onClick={(e) => {
                                      const newExecuses = this.state.execuses.filter(
                                        (ex) =>
                                          execuse.studentName != ex.studentName
                                      );
                                      this.setState({
                                        execuses: newExecuses,
                                        subExecuses: newExecuses,
                                        searchValue: "",
                                      });
                                      setTimeout(() => {
                                        alert("execuse deleted successfully");
                                      }, 1);
                                    }}
                                    className="btn btn-danger btn-sm"
                                  >
                                    <i className="fas fa-trash"></i>
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
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
