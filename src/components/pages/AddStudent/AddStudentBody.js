import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AddStudentBody extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Add student</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item "><NavLink to="/" exact={true}>Home</NavLink></li>
                                    <li className="breadcrumb-item">Add student</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Courses Info</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="small-box bg-success">
                                            <div className="inner">
                                                <h4>Add form Excel Sheet</h4>

                                                <p>Excel Sheet</p>
                                            </div>
                                            <NavLink to="/add-student-sheet" className="small-box-footer">
                                                Add <i className="fas fa-plus-circle"></i>
                                            </NavLink>
                                        </div>

                                    </div>
                                    <div className="col-md-6">

                                        {/* /.form-group */}
                                        {/* /.col */}
                                        <div className="small-box bg-warning">
                                            <div className="inner">
                                                <h4>Add Student </h4>

                                                <p>Manual</p>
                                            </div>
                                            <NavLink to="/add-student-manual" className="small-box-footer">
                                                Add <i className="fas fa-plus-circle"></i>
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}