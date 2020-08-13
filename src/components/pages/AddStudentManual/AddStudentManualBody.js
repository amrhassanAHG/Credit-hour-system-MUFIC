import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userService from "../../../services/user.service";

export default class AddStudentManualBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEnglish: null,
      nameArabic: null,
      nationality: null,
      gender: null,
      religion: null,
      nationalId: null,
      guardianName: null,
      email: null,
      secSchool: null,
      preQualfication: null,
      degrees: null,
      guide: null,
      department: null,
      city: null,
      dob: null,
      guardianJob: null,
      quilificationYear: null,
    };
  }

  onSendData = (e) => {
    e.preventDefault();

    const student = {
      nameEnglish: this.state.nameEnglish,
      nameArabic: this.state.nameArabic,
      nationality: this.state.nationality,
      gender: this.state.gender,
      religion: this.state.religion,
      nationalId: this.state.nationalId,
      guardianName: this.state.guardianName,
      email: this.state.email,
      secSchool: this.state.secSchool,
      preQualfication: this.state.preQualfication,
      degrees: this.state.degrees,
      guide: this.state.guide,
      department: this.state.department,
      city: this.state.city,
      dob: this.state.dob,
      guardianJob: this.state.guardianJob,
      quilificationYear: this.state.qualificationYear,
    };
    
    userService.sendData("students", student).then(
      (response) => {alert('data sent successfully')},
      (error) => { console.log(error); alert("can't send data")}
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
                <h1 className="m-0 text-dark">Add student manually</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="/add-student">Add student</NavLink>
                  </li>
                  <li className="breadcrumb-item active">
                    add student manually
                  </li>
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
                <h3 className="card-title">Add student manually</h3>
              </div>
              {/* form start */}
              <form role="form" onSubmit={this.onSendData}>
                <div className="card-body">
                  <div className="row">
                    {/*################################*/}
                    <div className="col-md-6">
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="nameEnglish">English name</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ nameEnglish: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="nameEnglish"
                          placeholder="English name"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="nationality">Nationality</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ nationality: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="nationality"
                          placeholder="Nationality"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="religion">Religion</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ religion: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="religion"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="guardianName">Guardian name</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ guardianName: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="guardianName"
                          placeholder="Guardian name"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="secSchool">Secondary school</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ secSchool: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="secSchool"
                          placeholder="Secondary school"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="degrees">Degrees</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ degrees: newvalue });
                          }}
                          type="text"
                          className="form-control"
                          id="degrees"
                          placeholder="Degrees"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ department: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="department"
                          placeholder="Department"
                        />
                      </div>
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="dob">Date of birth</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ dob: newvalue });
                          }}
                          required
                          type="date"
                          className="form-control"
                          id="dob"
                          placeholder="Date of birth"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="qualificationYear">
                          Qualification year
                        </label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ qualificationYear: newvalue });
                          }}
                          required
                          type="number"
                          className="form-control"
                          id="qualificationYear"
                          placeholder="Qualification year"
                        />
                      </div>
                    </div>
                    {/*################################*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nameArabic">Arabic name</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ nameArabic: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="nameArabic"
                          placeholder="Arabic name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ gender: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="gender"
                          placeholder="Gender"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="nationalId">National Id</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ nationalId: newvalue });
                          }}
                          required
                          type="number"
                          className="form-control"
                          id="nationalId"
                          placeholder="National Id"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ email: newvalue });
                          }}
                          required
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="preQualification">
                          Pre qualification
                        </label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ preQualfication: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="preQualification"
                          placeholder="Pre qualification"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="guide">Guide</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ guide: newvalue });
                          }}
                          type="text"
                          className="form-control"
                          id="guide"
                          placeholder="Guide"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ city: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="guardianJob">Guardian job</label>
                        <input
                          onChange={(e) => {
                            const newvalue = e.target.value;
                            this.setState({ guardianJob: newvalue });
                          }}
                          required
                          type="text"
                          className="form-control"
                          id="guardianJob"
                          placeholder="Guardian job"
                        />
                      </div>
                    </div>
                    {/*################################*/}
                  </div>
                </div>
                {/* /.card-body */}

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
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
