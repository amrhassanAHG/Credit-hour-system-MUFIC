import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class AddStudentManualBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = e => {
    e.preventDefault();
  }

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
              <form role="form" onSubmit={this.onSubmit}>
                <div className="card-body">
                  <div className="row">
                    {/*################################*/}
                    <div className="col-md-6">
                      {/*Form element*/}
                      <div className="form-group">
                        <label htmlFor="nameEnglish">English name</label>
                        <input
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
                          required
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
                          required
                          type="email"
                          className="form-control"
                          id="nameArabic"
                          placeholder="Arabic name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input
                          required
                          type="password"
                          className="form-control"
                          id="gender"
                          placeholder="Gender"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="nationalId">National Id</label>
                        <input
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
                          required
                          type="text"
                          className="form-control"
                          id="guide"
                          placeholder="Guide"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
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
