import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class RegisterationProvementBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      to: "",
      level: "1",
      dep: "1",
      year: "",
    };
  }

  go = e=>{
    const {name, to, level, dep, year} = this.state
    this.props.history.push(`/provement?${name}?${to}?${level}?${dep}?${year}`)
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Registration provement</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active">
                    Registration provement
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
                    <label htmlFor="name">Student Name</label>
                    <input
                      value={this.state.name}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ name: newValue });
                      }}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="to">TO</label>
                    <input
                      value={this.state.to}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        this.setState({ to: newValue });
                      }}
                      className="form-control"
                      id="to"
                      placeholder="TO"
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="form-group">
                        <select
                          value={this.state.level}
                          className="form-control"
                          onChange={(e) => {
                            const newValue = e.target.value;
                            this.setState({ level: newValue });
                          }}
                        >
                          <option value="1">الفرقه الاولي</option>
                          <option value="2">الفرقه الثانيه</option>
                          <option value="3">الفرقه الثالثه</option>
                          <option value="4">الفرقه الرابعه</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-3  ">
                      {/* select */}
                      <div className="form-group">
                        <select
                          value={this.state.dep}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            this.setState({ dep: newValue });
                          }}
                          className="form-control"
                        >
                          <option value="1">عام</option>
                          <option value="2">علوم حاسب</option>
                          <option value="3">نظم معلومات</option>
                          <option value="4">تكنولوجيا المعلومات</option>
                          <option value="5">هندسه برمجيات</option>
                          <option value="6">المعلوماتية الحيوية</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="input">
                        <input
                          value={this.state.year}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            this.setState({ year: newValue });
                          }}
                          className="form-control"
                          placeholder="العام الجامعي"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button onClick={this.go} className="btn btn-success">GO</button>
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
