import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CoursesRegisteredBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourses: [
        {
          nameEnglish: "java",
          numberOfStudents: 25,
        },
        {
          nameEnglish: "c++",
          numberOfStudents: 30,
        },
        {
          nameEnglish: "compiler",
          numberOfStudents: 15,
        },
        {
          nameEnglish: "management",
          numberOfStudents: 42,
        },
      ],
      subCourses:[],
      id: this.props.history.location.search.slice(4,),
    };
  }

  componentDidMount(){
    this.setState({
      subCourses: this.state.selectedCourses
    });
  }

  onLevelChange = e =>{
    
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Registered Courses</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item">Registered Courses</li>
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
                <h3 className="card-title">Regesterd Courses Info.</h3>
              </div>
              <form className="form" role="form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="level">Level :</label>
                        <select
                          id="level"
                          defaultValue="none"
                          className="form-control"
                          onChange={this.onLevelChange}
                        >
                          <option value="none">-- All levels --</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* /.row */}
                  <hr />
                  <h2> Courses </h2>
                  <div className="row ">
                    {this.state.subCourses.map((course) => (
                      <div key={course.nameEnglish} className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                          <div className="info-box-content">
                            <NavLink to={`/courses-registered?id=${5}`}>
                              <span className="info-box-text text-center text-muted">
                                {course.nameEnglish}
                              </span>
                              <span className="info-box-number text-center text-muted mb-0">
                                {course.numberOfStudents}
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
