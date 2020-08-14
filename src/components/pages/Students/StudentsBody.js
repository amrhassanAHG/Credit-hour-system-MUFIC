import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userService from "../../../services/user.service";
import Pagination from "react-js-pagination";

export default class StudentsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filteredStudents: [],
      subStudents: [],
      activePage: 1,
    };
  }

  componentDidMount() {
    userService.getData("students").then(
      (response) => {
        const studentsData = response.data.students;
        this.setState({
          students: studentsData,
          filteredStudents: studentsData,
        });

        const newSubStudents = studentsData.slice(
          0,
          Math.min(studentsData.length, 5)
        );
        this.setState({
          subStudents: newSubStudents,
        });
      },
      (error) => {
        this.setState({ students: [], filteredStudents: [] });
      }
    );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
    const start = (pageNumber - 1) * 5;
    const len = this.state.filteredStudents.length;

    const newSubStudents = this.state.filteredStudents.slice(
      start,
      Math.min(len, start + 5)
    );
    this.setState({
      subStudents: newSubStudents,
    });
  };

  showFilteredStudents = (e) => {
    e.preventDefault();
    const newValue = document.getElementById("filterNames").value;
    if (newValue === "") {
      this.setState({ filteredStudents: this.state.students });
    } else {
      const newFilteredStudents = this.state.students.filter(
        (student) =>
          student.nameArabic.includes(newValue) ||
          student.nameEnglish.includes(newValue)
      );

      this.setState({ filteredStudents: newFilteredStudents });
    }

    setTimeout(() => {
      this.handlePageChange(1);
    }, 50);
  };

  onDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const newStudents = this.state.students.filter(student=>student.id!=id)
    this.setState({
      students : newStudents,
      subStudents: newStudents,
      filteredStudents: newStudents,
    });

    userService.removeData(`students/${id}`).then(
      (respons) => {alert("Student deleted successfully")},
      (error) => {alert("Student deleted successfully")}
    );
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Students</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">Studenst list</li>
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
            <div className="card card-primary ">
              <div className="card-header">
                <h3 className="card-title">Students</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <form className="form" role="form">
                  <div className="row">
                    <div className="col-sm-9">
                      {/* select */}
                      <div className="form-group">
                        <input
                          placeholder="search by name"
                          id="filterNames"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="center">
                      <button
                        onClick={this.showFilteredStudents}
                        style={{ width: "100px" }}
                        className="btn btn-primary"
                      >
                        Show
                      </button>
                    </div>
                  </div>
                </form>
                <table
                  id="example2"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>National ID</th>
                      <th>Email</th>
                      <th>Nationality</th>
                      <th>Gender</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.subStudents.map((student) => (
                      <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.nameArabic}</td>
                        <td>{student.nationalId}</td>
                        <td>{student.email}</td>
                        <td>{student.nationality}</td>
                        <td>{student.gender}</td>
                        <td className="project-actions text-center">
                          <button
                            onClick={this.onDelete}
                            className="btn btn-danger btn-sm"
                            id={student.id.toString()}
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
              {/* /.card-footer */}
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.filteredStudents.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </ul>
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
