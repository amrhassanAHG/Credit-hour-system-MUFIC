import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { serverURL } from "../../../staticData";
import userService from "../../../services/user.service";
import Pagination from "react-js-pagination";

export default class AdminCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      subCourses: [],
      programs: [],
      subPrograms: [],
      activePage: 1,
      programActivePage: 1,
    };
  }

  componentDidMount() {
    userService.getData("courses").then(
      (response) => {
        const coursesData = response.data.courses;
        this.setState({
          courses: coursesData,
        });

        const newSubCourses = coursesData.slice(
          0,
          Math.min(coursesData.length, 5)
        );
        this.setState({
          subCourses: newSubCourses,
        });
      },
      (error) => {
        this.setState({
          courses: [],
        });
      }
    );

    userService.getData("programs").then(
      (response) => {
        const programsData = response.data.programs;
        this.setState({
          programs: programsData,
        });

        const newSubPrograms = programsData.slice(
          0,
          Math.min(programsData.length, 5)
        );
        this.setState({
          subPrograms: newSubPrograms,
        });
      },
      (error) => {
        this.setState({
          programs: [],
        });
      }
    );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
    const start = (pageNumber - 1) * 5;
    const len = this.state.courses.length;

    const newSubCourses = this.state.courses.slice(
      start,
      Math.min(len, start + 5)
    );
    this.setState({
      subCourses: newSubCourses,
    });
  };

  handleProgramPageChange = (pageNumber) => {
    this.setState({ programActivePage: pageNumber });
    const start = (pageNumber - 1) * 5;
    const len = this.state.programs.length;

    const newSubPrograms = this.state.programs.slice(
      start,
      Math.min(len, start + 5)
    );
    this.setState({
      subPrograms: newSubPrograms,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Courses</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Courses</li>
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
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Programs</h3>
                </div>
                <div className="card-body ">
                  <div className="form-group">
                    <div className="  float-right">
                      <button
                        style={{ width: 100, marginBottom: 10 }}
                        type="submit"
                        className="btn btn-success "
                      >
                        <Link to="/add-program-manually" className="text-light">
                          New
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Arabic Name</th>
                          <th>Hours </th>
                          <th>Under Requirment</th>
                          <th>option</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.subPrograms.map((program) => (
                          <tr key={program.id}>
                            <th scope="col">{program.id}</th>
                            <td>{program.nameArabic}</td>
                            <td>{program.hours}</td>
                            <td>{program.underRequirement}</td>
                            <td>
                              <div className="row- center  ">
                                <button
                                  onClick={(e) => {
                                    const newPrograms = this.state.programs.filter(
                                      (prog) => prog.id != program.id
                                    );
                                    this.setState({ programs: newPrograms });
                                    setTimeout(() => {
                                      this.handleProgramPageChange(1);
                                      alert("Program Deleted successfully");
                                    }, 0.1);
                                  }}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </div>
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
                        activePage={this.state.programActivePage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.state.programs.length}
                        pageRangeDisplayed={5}
                        onChange={this.handleProgramPageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">ALL Courses</h3>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <div className="  float-right">
                    <NavLink to="/add-course-manually">
                      <button
                        style={{ width: 150, marginBottom: 10 }}
                        type="submit"
                        className="btn btn-success "
                      >
                        Add Course
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-12">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>code</th>
                        <th>Arabic Name</th>
                        <th>English name</th>
                        <th>hours </th>
                        <th>Lec H</th>
                        <th>Lab H</th>
                        <th>Program name</th>
                        <th>PreCourse Code</th>
                        <th>option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.subCourses.map((course) => (
                        <tr key={course.code}>
                          <th scope="col">{course.code}</th>
                          <td>{course.nameArabic}</td>
                          <td>{course.nameEnglish}</td>
                          <td>{course.hours}</td>
                          <td>{course.lecHours}</td>
                          <td>{course.labHours}</td>
                          <td>{course.program}</td>
                          <td>{course.preCourse}</td>
                          <td>
                            <div className="row- center  ">
                              <button
                                onClick={(e) => {
                                  const newCourses = this.state.courses.filter(
                                    (crs) => crs.code != course.code
                                  );
                                  this.setState({ courses: newCourses });
                                  setTimeout(() => {
                                    this.handlePageChange(1);
                                    alert("Course Deleted successfully");
                                  }, 0.1);
                                }}
                                className="btn btn-danger"
                              >
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
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={5}
                      totalItemsCount={this.state.courses.length}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </ul>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
