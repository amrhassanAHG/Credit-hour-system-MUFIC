import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import profileUserImage from "../../../assets/user1-128x128.jpg";

export default class ProfileBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  /*async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/students", {});
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }*/

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="/" exact={true}>
                      Home
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item active">User Profile</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Profile Image */}
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src={profileUserImage}
                        alt="User profile picture"
                      />
                    </div>

                    <h3 className="profile-username text-center">
                      Student name
                    </h3>

                    <p className="text-muted text-center">email@mufic.eg.com</p>

                    <ul className="list-group list-group-unbordered mb-3">
                      <li className="list-group-item">
                        <b>Academic year</b> <a className="float-right">4</a>
                      </li>
                      <li className="list-group-item">
                        <b>Section</b> <a className="float-right">12</a>
                      </li>
                      <li className="list-group-item">
                        <b>Student Department</b>{" "}
                        <a className="float-right">computer science</a>
                      </li>
                    </ul>

                    {/* <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a> */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}

                {/* About Me Box */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">About Me</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <strong>
                      <i className="fas fa-book mr-1"></i> Secondary School
                    </strong>
                    <p className="text-muted">
                      B.S. in Computer Science from the University of Tennessee
                      at Knoxville
                    </p>

                    <hr />

                    <strong>
                      <i className="fas fa-map-marker-alt mr-1"></i> Location
                    </strong>

                    <p className="text-muted">Malibu, California</p>

                    <hr />

                    <strong>
                      <i className="fas fa-phone-alt mr-1"></i> phone
                    </strong>
                    <p className="text-muted">+20-012-345-6789</p>
                    <hr />

                    <strong>
                      <i className="far fa-flag mr-1"></i>Nationality
                    </strong>

                    <p className="text-muted">Egyption</p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#data"
                          data-toggle="tab"
                        >
                          Basic Data
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#chpassword"
                          data-toggle="tab"
                        >
                          Change Password
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#chphoto"
                          data-toggle="tab"
                        >
                          change Photo
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="data">
                        {/* Personal data */}
                        <div className="card card-primary">
                          <div className="card-header">
                            <h3 className="card-title">Personal Data</h3>
                          </div>
                          <form className="form" role="form">
                            <div className="card-body">
                              <div className="form-group">
                                <label htmlFor="arabicName">Arabic Name</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="arabicName"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="englishName">
                                  English Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="englishName"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">Nationality</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">Gender</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">Religion</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">BirthDay</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">
                                  Nationality ID \ Passport No.
                                </label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                        {/*End Personal data*/}

                        {/* Personal data */}
                        <div className="card card-primary">
                          <div className="card-header">
                            <h3 className="card-title">Personal Data</h3>
                          </div>
                          <form className="form" role="form">
                            <div className="card-body">
                              <div className="form-group">
                                <label htmlFor="arabicName">Arabic Name</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="arabicName"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="englishName">
                                  English Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="englishName"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">Nationality</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">Gender</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">Religion</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">BirthDay</label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="nationality">
                                  Nationality ID \ Passport No.
                                </label>
                                <input
                                  type="text"
                                  className="form-control dis"
                                  id="nationality"
                                  disabled
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                        {/*End Personal data*/}
                      </div>
                      {/* /.tab-pane */}

                      <div className="tab-pane" id="chpassword">
                        <form className="form-horizontal">
                          <div className="form-group row">
                            <label
                              htmlFor="oldpassword"
                              className="col-sm-2 col-form-label"
                            >
                              Old Password
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="oldpassword"
                                placeholder="Old password"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputEmail"
                              className="col-sm-2 col-form-label"
                            >
                              New Password
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="newpassword"
                                placeholder="new Password"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="confirmpassword"
                              className="col-sm-2 col-form-label"
                            >
                              Confirm Password
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="confirmpassword"
                                placeholder="Confirm Passord"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <button type="submit" className="btn btn-danger">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* /.tab-pane */}

                      <div className="tab-pane" id="chphoto">
                        <form className="form-horizontal">
                          <div className="form-group">
                            {/* <label htmlFor="customFile">Custom File</label> */}
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="customFile"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFile"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <button type="submit" className="btn btn-danger">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.nav-tabs-custom */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}
