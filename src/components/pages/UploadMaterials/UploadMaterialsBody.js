import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userService from "../../../services/user.service";

export default class UploadMaterialsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      file: null,
    };
  }

  onFileChange = (e) => {
    const file = e.target.files[0];
    document.getElementById("labelForFile").innerHTML =file.name;
    this.setState({ file: file });
  };

  onLoadData = (e) => {
    e.preventDefault();
    const newMaterial = {
      title: this.state.title,
      description: this.state.description,
      file: this.state.file,
    }

    userService.sendData("materials", newMaterial).then(
      (response) => {
        alert("File uploaded successfully");
        window.location.reload();
      },
      (error) => {
        alert("File uploaded successfully");
        window.location.reload();
      }
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
                <h1 className="m-0 text-dark">Upload materials</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Upload materials</li>
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
                <h3 className="card-title">Upload Material</h3>
              </div>
              <form role="form">
                <div className="card-body">
                  {/* /.card-body */}

                  {/* Main content */}
                  <div className="card card-primary">
                    {/* form start */}
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1"> Title</label>
                        <input
                          value={this.state.title}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            this.setState({ title: newValue });
                          }}
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Enter title"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Discription
                        </label>
                        <textarea
                          value={this.state.description}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            this.setState({ description: newValue });
                          }}
                          style={{ height: "100px" }}
                          className="form-control"
                          id="hint"
                          placeholder="hint"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              onChange={this.onFileChange}
                              type="file"
                              className="custom-file-input"
                              id="fileInput"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="fileInput"
                              id="labelForFile"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}

                    <div className="card-footer">
                      <button
                        onClick={this.onLoadData}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
                {/* /.container-fluid */}
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
