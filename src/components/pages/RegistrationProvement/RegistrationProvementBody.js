import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class RegisterationProvementBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        {/* Main content */}
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Proof of registration in the college</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form role="form">
            <div className="card-body">
              <div className="col-md-12">
                {/* general form elements */}
                {/* /.card-header */}
                {/* form start */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1"> Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">TO</label>
                    <input
                      className="form-control"
                      id="hint"
                      placeholder="TO"
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control">
                          <option>الفرقه الاولي</option>
                          <option>الفرقه الثانيه</option>
                          <option>الفرقه الثالثه</option>
                          <option>الفرقه الرابعه</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-3  ">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control">
                          <option>عام </option>
                          <option>هلوم حاسب</option>
                          <option>نظم معلومات</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="input">
                        <select className="form-control">
                          <option>2019/2020</option>
                          <option>2020/2021</option>
                          <option>2021/2022</option>
                          <option>2022/2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <NavLink to="/provement">
                    <button className="btn btn-success">GO</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </form>
          {/* /.card-body */}
        </div>
      </div>
    );
  }
}
