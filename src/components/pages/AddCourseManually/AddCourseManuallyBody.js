import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";
import userService from "../../../services/user.service";

export default class AddCourseManuallyBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      programs:[],

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

    userService.getData("programs").then(
      (response) => {
        const programsData = response.data.programs;
        this.setState({
          programs: programsData,
        });
      },
      (error) => {
        this.setState({
          programs: [],
        });
      }
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const el = document.getElementsByName("addCourse-item");
    let isValid = true;

    const elHours = document.getElementsByName("addCourse-item-hourse");

    const isHours = /^[1-9][0-9]*$/;

    for (let i = 0; i < elHours.length; i++) {
      const isMatch = isHours.test(elHours[i].value);
      if (!isMatch) {
        elHours[i].classList.add("is-invalid");
        isValid = false;
      } else elHours[i].classList.remove("is-invalid");
    }

    for (let i = 0; i < el.length; i++) {
      if (
        validator.isEmpty(el[i].value) ||
        el[i].classList.contains("is-invalid")
      ) {
        el[i].classList.add("is-invalid");
        isValid = false;
      } else el[i].classList.remove("is-invalid");
    }

    if (isValid === false) return;

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

    userService.sendData("courses", course).then(response=>{
      alert('Data sent successfully');
      window.location.reload();
    },error=>{
      alert('Data sent successfully');
      window.location.reload();
    })
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
                  <li className="breadcrumb-item">
                    <NavLink to="/admin-courses">Courses</NavLink>
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
              <div className="card-body">
                <form className="form" role="form" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="code">Course code</label>
                      <input
                        name="addCourse-item"
                        value={this.state.code}
                        onChange={(e) => {
                          let newValue = e.target.value;
                          newValue = newValue.trim();
                          if (!validator.isAlphanumeric(newValue)) {
                            e.target.classList.add("is-invalid");
                          } else {
                            e.target.classList.add("is-valid");
                            e.target.classList.remove("is-invalid");
                          }
                          this.setState({ code: newValue });
                        }}
                        type="text"
                        className="form-control"
                        id="code"
                      />
                      <div class="invalid-feedback">
                        it should contains english letters and numbers only
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="englishName">English Name</label>
                      <input
                        name="addCourse-item"
                        value={this.state.nameEnglish}
                        onChange={(e) => {
                          const newValue = e.target.value.trim();
                          const isEnglish = /^[a-zA-Z]+$/;
                          const isMatch = isEnglish.test(newValue);
                          if (!isMatch) {
                            e.target.classList.add("is-invalid");
                          } else {
                            e.target.classList.add("is-valid");
                            e.target.classList.remove("is-invalid");
                          }
                          this.setState({ nameEnglish: newValue });
                        }}
                        type="text"
                        className="form-control"
                        id="englishName"
                      />
                      <div class="invalid-feedback">
                        please enter english letters only
                      </div>
                    </div>

                    <div className="form-group col-6">
                      <label htmlFor="arabicName">Arabic Name</label>
                      <input
                        name="addCourse-item"
                        value={this.state.nameArabic}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          const isArabic = /^[\u0600-\u06FF]+[(\u0600-\u06FF)|(\s)]*$/;
                          const isMatch = isArabic.test(newValue);
                          if (!isMatch) {
                            e.target.classList.add("is-invalid");
                          } else {
                            e.target.classList.add("is-valid");
                            e.target.classList.remove("is-invalid");
                          }
                          this.setState({ nameArabic: newValue });
                        }}
                        type="text"
                        className="form-control"
                        id="arabicName"
                      />
                      <div class="invalid-feedback">
                        please enter arabic letters only and it should start
                        with letter not spaces
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="hours">Hours</label>
                      <input
                        name="addCourse-item-hourse"
                        value={this.state.hours}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          const isHours = /^[1-9][0-9]*$/;
                          const isMatch = isHours.test(newValue);
                          if (!isMatch) {
                            e.target.classList.add("is-invalid");
                          } else {
                            e.target.classList.add("is-valid");
                            e.target.classList.remove("is-invalid");
                          }
                          this.setState({ hours: newValue });
                        }}
                        type="number"
                        className="form-control"
                        id="hours"
                      />
                      <div class="invalid-feedback">
                        please enter a number greater than 0
                      </div>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="lecHours">Lec Hours</label>
                      <input
                        name="addCourse-item-hourse"
                        value={this.state.lecHours}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          const isHours = /^[1-9][0-9]*$/;
                          const isMatch = isHours.test(newValue);
                          if (!isMatch) {
                            e.target.classList.add("is-invalid");
                          } else {
                            e.target.classList.add("is-valid");
                            e.target.classList.remove("is-invalid");
                          }
                          this.setState({ lecHours: newValue });
                        }}
                        type="number"
                        className="form-control"
                        id="lecHours"
                      />
                      <div class="invalid-feedback">
                        please enter a number greater than 0
                      </div>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="labHours">Lab Hours</label>
                      <input
                        name="addCourse-item-hourse"
                        value={this.state.labHours}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          const isHours = /^[1-9][0-9]*$/;
                          const isMatch = isHours.test(newValue);
                          if (!isMatch) {
                            e.target.classList.add("is-invalid");
                          } else {
                            e.target.classList.add("is-valid");
                            e.target.classList.remove("is-invalid");
                          }
                          this.setState({ labHours: newValue });
                        }}
                        type="number"
                        className="form-control"
                        id="labHours"
                      />
                      <div class="invalid-feedback">
                        please enter a number greater than 0
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label>program</label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          const newValue = e.target.value;
                          this.setState({ program: newValue });
                        }}
                        style={{ width: "100%" }}
                        value={this.state.program}
                      >
                        {this.state.programs.map((program) => (
                          <option key={program.id} value={program.id}>
                            {program.nameArabic}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col">
                      <label>Pre Course</label>
                      <select
                        className="form-control"
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
                            {course.nameArabic}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* add radio button for forced and  unforced*/}
                  <div className="form-group clearfix">
                    <label style={{ display: "block" }}>course type:</label>
                    <div
                      className="icheck-success d-inline"
                      style={{ marginRight: "5px" }}
                    >
                      <input
                        onClick={() => {
                          this.setState({ force: 1 });
                        }}
                        type="radio"
                        id="regularTerm"
                        name="r1"
                        defaultChecked
                      />
                      <label className="text-secondary" htmlFor="regularTerm">
                        Forced
                      </label>
                    </div>
                    <div className="icheck-success d-inline">
                      <input
                        onClick={() => {
                          this.setState({ force: 0 });
                        }}
                        type="radio"
                        id="summerTerm"
                        name="r1"
                      />
                      <label className="text-secondary" htmlFor="summerTerm">
                        Optional
                      </label>
                    </div>
                  </div>

                  <div className="form-group ">
                    <label>Description</label>
                    <textarea
                      name="addCourse-item"
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (validator.isEmpty(newValue)) {
                          e.target.classList.add("is-invalid");
                        } else {
                          e.target.classList.add("is-valid");
                          e.target.classList.remove("is-invalid");
                        }
                        this.setState({ description: newValue });
                      }}
                      rows={3}
                      className="form-control"
                      placeholder="Enter a description ..."
                      value={this.state.description}
                    />
                  </div>
                  <hr />
                  <div className="card-footer float-right">
                    <button type="submit" className="btn btn-primary">
                      Add
                    </button>
                  </div>
                  {/* /.modal-content */}
                </form>
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
