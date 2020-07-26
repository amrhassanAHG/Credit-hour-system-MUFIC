import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class GuidesBody extends Component {
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
                                <h1 className="m-0 text-dark">Student Sections</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/dashboard">dashboard</NavLink></li>
                                    <li className="breadcrumb-item active">student sections</li>
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
                                <h3 className="card-title">Student Select</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>-- Select Level --</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option value="none">-- Select Department --</option>
                                                    <option>CS</option>
                                                    <option>IS</option>
                                                    <option>IT</option>
                                                    <option>or</option>
                                                    <option>BIO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="center">
                                            <button style={{ width: '100px' }} type="submit" className="btn btn-primary">Show</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <table className="table table-bordered col-sm-6">
                                        <thead>
                                            <tr>
                                                <th>section</th>
                                                <th>Guide</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <select className="custom-select">
                                                        <option>doctor 1</option>
                                                        <option>doctor 2</option>
                                                        <option>doctor 3</option>
                                                        <option>doctor 4</option>
                                                        <option>doctor 5</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <select className="custom-select">
                                                        <option>doctor 1</option>
                                                        <option>doctor 2</option>
                                                        <option>doctor 3</option>
                                                        <option>doctor 4</option>
                                                        <option>doctor 5</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <select className="custom-select">
                                                        <option>doctor 1</option>
                                                        <option>doctor 2</option>
                                                        <option>doctor 3</option>
                                                        <option>doctor 4</option>
                                                        <option>doctor 5</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
        )
    }
}
