import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AddStudentManualBody extends Component {
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
                                <h1 className="m-0 text-dark">Courses info.</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item "><NavLink to="/" exact={true}>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to="/add-student">Add student</NavLink></li>
                                    <li className="breadcrumb-item active">add student manually</li>
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
                                <h3 className="card-title">Add student manually</h3>
                            </div>
                            {/* form start */}
                            <form role="form">
                                <div className="card-body">
                                    <div className="row">
                                        {/*################################*/}
                                        <div className="col-md-6">
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1"
                                                    placeholder="Enter email" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            {/*Form element*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                        </div>
                                        {/*################################*/}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1"
                                                    placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </div>
                                        </div>
                                        {/*################################*/}
                                    </div>
                                </div>
                                {/* /.card-body */}

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}