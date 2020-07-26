import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Card from '../../layout/Card'

export default class RegisterCoursesBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          code: "CS50",
          name: "CPP",
          doctor: "Dr Hamdi",
        },
        {
          code: "CS60",
          name: "Java",
          doctor: "Dr Hamdi",
        },
        {
          code: "CS70",
          name: "TypeScript",
          doctor: "Dr Hamdi",
        },
        {
          code: "CS80",
          name: "Android",
          doctor: "Dr Hamdi",
        },
      ],
      choosenCourses: [],
    };
  }

  courseOnClick = (e) => {
    let choosenCourse = {};
    const newCourses = this.state.courses.filter((course) => {
      if (course.code === e.target.accessKey.toString()) {
        choosenCourse = course;
        return false;
      } else {
        return true;
      }
    });

    this.setState((prevState) => ({
      courses: newCourses,
      choosenCourses: prevState.choosenCourses.concat(choosenCourse),
    }));
  };

  choosenCourseOnClick = (e) => {
    let choosenCourse = {};
    const newCourses = this.state.choosenCourses.filter((course) => {
      if (course.code === e.target.accessKey.toString()) {
        choosenCourse = course;
        return false;
      } else {
        return true;
      }
    });

    this.setState((prevState) => ({
      choosenCourses: newCourses,
      courses: prevState.courses.concat(choosenCourse),
    }));
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Course Registeration</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item">Course</li>
                  <li className="breadcrumb-item active">Register</li>
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
                <h3 className="card-title">Registeration</h3>
              </div>
              <form className="form" role="form">
                <div className="card-body">
                  <div className="row">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Term</th>
                          <th>min hour</th>
                          <th>max hour</th>
                          <th>Selected</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2020/2021</td>
                          <td>2</td>
                          <td>9</td>
                          <td>18</td>
                          <td
                            className={
                              this.state.choosenCourses.length > 3
                                ? "bg-danger"
                                : "bg-success"
                            }
                          >
                            {this.state.choosenCourses.length}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    {/*choose courses*/}
                    <div className="row">
                      <div className="col-sm-6">
                        <Card header="Courses">
                          {this.state.courses.map((course) => (
                            <div key={course.code} onClick={this.courseOnClick}>
                              <p
                                accessKey={course.code}
                                style={{
                                  paddingBottom: "5px",
                                  borderBottom: "2px solid #ddd",
                                  cursor: "pointer",
                                }}
                              >
                                {course.code +
                                  " - " +
                                  course.name +
                                  " - " +
                                  course.doctor}
                              </p>
                            </div>
                          ))}
                        </Card>
                      </div>

                      <div className="col-sm-6">
                        <Card header="Selected">
                          {this.state.choosenCourses.map((course) => (
                            <div
                              key={course.code}
                              onClick={this.choosenCourseOnClick}
                            >
                              <p
                                accessKey={course.code}
                                style={{
                                  paddingBottom: "5px",
                                  borderBottom: "2px solid #ddd",
                                  cursor: "pointer",
                                }}
                              >
                                {course.code +
                                  " - " +
                                  course.name +
                                  " - " +
                                  course.doctor}
                              </p>
                            </div>
                          ))}
                        </Card>
                      </div>
                    </div>
                    {/*end of choose courses*/}

                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{ width: "5%" }}>#</th>
                          <th>1</th>
                          <th>2</th>
                          <th>3</th>
                          <th>4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SAT</td>
                          <td className="bg-danger"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>SUN</td>
                          <td></td>
                          <td></td>
                          <td className="bg-success"></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>MON</td>
                          <td></td>
                          <td className="bg-success"></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>TUES</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>WENS</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>THRS</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>FRI</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.row */}
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
                    save
                  </button>
                </div>
                {/* Model */}
                <div className="modal fade" id="modal-default">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Are u want to save</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="Password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="Password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
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
