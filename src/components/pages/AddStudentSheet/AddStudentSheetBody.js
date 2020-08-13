import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import readXlsxFile from "read-excel-file";

export default class AddStudentSheetBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFileChange = (e)=>{
    console.log(e.target.value);
    readXlsxFile(e.target.files[0]).then((rows) => {
        console.log(rows);
    })
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Add student by sheet</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="/add-student" exact={true}>
                      Add student
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item">Add student by sheet</li>
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
                <h3 className="card-title">Courses Info</h3>
              </div>
              {/* form start */}
              <form role="form">
                <div className="card-body">
                  <div className="info-box">
                    <span className="info-box-icon bg-success">
                      <i className="far fa-copy"></i>
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">
                        Download this excel sheet format to populate student
                      </span>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File download</label>
                        <div className="input-group">
                          <span className="btn btn-primary" id="">
                            Download
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/*###################################*/}

                  <div className="info-box">
                    <span className="info-box-icon bg-warning">
                      <i className="far fa-copy"></i>
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">
                        upload excel sheet to insert students
                      </span>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="exampleInputFile"
                              onChange={this.onFileChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="exampleInputFile"
                            >
                              Choose file
                            </label>
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text" id="">
                              Upload
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.info-box-content */}
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
