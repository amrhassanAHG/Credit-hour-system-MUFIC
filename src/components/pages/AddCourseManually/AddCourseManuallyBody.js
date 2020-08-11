import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userService from "../../../services/user.service";

export default class AddCourseManuallyBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],

      code: "",
      nameEnglish: "",
      nameArabic: "",
      hours: 0,
      lecHours: 0.0,
      labHours: 0.0,
      description: "",
      force: 1,
      program: 1,
      preCourse: "none",
    };
  }

  componentDidMount() {
    userService.getData("courses").then(
      (response) => {
        const coursesData = response.data.courses;
        this.setState({
          courses: coursesData,
        });
      },
      (error) => {
        this.setState({
          courses: [],
        });
      }
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const course = {
      code: this.state.code,
      nameEnglish: this.state.nameEnglish,
      nameArabic: this.state.nameArabic,
      hours: this.state.hours,
      lecHours: this.state.lecHours,
      labHours: this.state.labHours,
      description: this.state.description,
      force: this.state.force,
      program: this.state.program,
      preCourse: this.state.preCourse === "none" ? null : this.state.preCourse,
    };

    userService.sendData("courses", course);

    this.setState({
      code: "",
      nameEnglish: "",
      nameArabic: "",
      hours: 0,
      lecHours: 0.0,
      labHours: 0.0,
      description: "",
      force: 1,
      program: 1,
      preCourse: "none",
    });
    window.location.reload();
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Add course</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/" exact={true}>
                      Home
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <NavLink to="/admin-courses">
                      Courses
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item active">Add course</li>
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
              <form className="form" role="form" onSubmit={this.onSubmit}>
                <div className="col">
                  <div className="form-group ">
                    <label htmlFor="code">Course code</label>
                    <input
                      value={this.state.code}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ code: newValue });
                      }}
                      type="text"
                      className="form-control"
                      id="code"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label htmlFor="englishName">English Name</label>
                    <input
                      value={this.state.nameEnglish}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ nameEnglish: newValue });
                      }}
                      type="text"
                      className="form-control"
                      id="englishName"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label htmlFor="arabicName">Arabic Name</label>
                    <input
                      value={this.state.nameArabic}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ nameArabic: newValue });
                      }}
                      type="text"
                      className="form-control"
                      id="arabicName"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label htmlFor="hours">Hours</label>
                    <input
                      value={this.state.hours}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ hours: newValue });
                      }}
                      type="number"
                      className="form-control"
                      id="hours"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label htmlFor="lecHours">Lec Hours</label>
                    <input
                      value={this.state.lecHours}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ lecHours: newValue });
                      }}
                      type="number"
                      className="form-control"
                      id="lecHours"
                    />
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label htmlFor="labHours">Lab Hours</label>
                    <input
                      value={this.state.labHours}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ labHours: newValue });
                      }}
                      type="number"
                      className="form-control"
                      id="labHours"
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="program">program Id</label>
                    <input
                      value={this.state.program}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ program: newValue });
                      }}
                      type="number"
                      className="form-control"
                      id="program"
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Pre Course</label>
                    <select
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ preCourse: newValue });
                      }}
                      style={{ width: "100%" }}
                      value={this.state.preCourse}
                    >
                      <option value="none">No pre course</option>
                      {this.state.courses.map((course) => (
                        <option key={course.code} value={course.code}>
                          {course.nameEnglish}
                        </option>
                      ))}
                    </select>
                  </div>
                  <hr />
                  <div className="form-group ">
                    <label>Description</label>
                    <textarea
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ description: newValue });
                      }}
                      rows={3}
                      className="form-control"
                      placeholder="Enter a description ..."
                      value={this.state.description}
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
