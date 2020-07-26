import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class AdminCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      programs: [],
    };
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:8080/api/courses", {});
    if (response) {
      const data = await response.json();
      this.setState({ courses: data._embedded.courses });
    }

    response = await fetch("http://localhost:8080/api/programs", {});
    if (response) {
      const data = await response.json();
      this.setState({ programs: data._embedded.programs });
    }

    let finalIdx = this.state.courses.length - 1;
    let newCourses = [];
    this.state.courses.forEach((course, idx) => {
      fetch(course._links.program.href, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          newCourses.push({
            ...course,
            programName: data.nameEnglish,
          });

          if (idx == finalIdx) {
            this.setState(() => ({ courses: newCourses }));
          }
        })
        .catch((error) => {
          newCourses.push({
            ...course,
            programName: "",
          });

          if (idx == finalIdx) {
            this.setState(() => ({ courses: newCourses }));
          }
        });
    });

    newCourses = [];
    this.state.courses.forEach((course, idx) => {
      fetch(course._links.preCourse.href, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          newCourses.push({
            ...course,
            preCourseName: data.nameEnglish,
          });

          if (idx == finalIdx) {
            this.setState(() => ({ courses: newCourses }));
          }
        })
        .catch((error) => {
          newCourses.push({
            ...course,
            preCourseName: "",
          });

          if (idx == finalIdx) {
            this.setState(() => ({ courses: newCourses }));
          }
        });
    });

    newCourses = [];
    this.state.courses.forEach((course, idx) => {
      fetch(course._links.departments.href, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          newCourses.push({
            ...course,
            departmentsName: data.nameEnglish,
          });

          if (idx == finalIdx) {
            this.setState(() => ({ courses: newCourses }));
          }
        })
        .catch((error) => {
          newCourses.push({
            ...course,
            departmentsName: "",
          });

          if (idx == finalIdx) {
            this.setState(() => ({ courses: newCourses }));
          }
        });
    });

    finalIdx = this.state.programs.length - 1;
    let newPrograms = [];
    this.state.programs.forEach((program, idx) => {
      fetch(program._links.underRequirement.href, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          newPrograms.push({
            ...program,
            underRequirement: data.nameEnglish,
          });

          if (idx == finalIdx) {
            this.setState(() => ({ programs: newPrograms }));
          }
        })
        .catch((error) => {
          newPrograms.push({
            ...program,
            underRequirement: "",
          });

          if (idx == finalIdx) {
            this.setState(() => ({ programs: newPrograms }));
          }
        });
    });
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
                    <a href="#">Home</a>
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
                        New
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
                        {this.state.programs.map((program, idx) => (
                          <tr key={program.nameEnglish}>
                            <td>{idx +1}</td>
                            <td>{program.nameArabic}</td>
                            <td>{program.hours}</td>
                            <td>{program.underRequirement}</td>
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
                                  type="submit"
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
                  </div>{" "}
                </div>{" "}
              </div>{" "}
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
                  <table className="table table-bordered">
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
                        <th>Department</th>
                        <th>option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.courses.map((course) => (
                        <tr key={course.nameEnglish}>
                          <td>code</td>
                          <td>{course.nameArabic}</td>
                          <td>{course.nameEnglish}</td>
                          <td>{course.hours}</td>
                          <td>{course.lecHours}</td>
                          <td>{course.labHours}</td>
                          <td>{course.programName}</td>
                          <td>{course.preCourseName}</td>
                          <td>{course.departmentsName}</td>
                          <td>
                            <div className="row- center  ">
                              <button
                                style={{ marginRight: 10 }}
                                type=" submit"
                                className="btn btn-primary"
                              >
                                Edit
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
