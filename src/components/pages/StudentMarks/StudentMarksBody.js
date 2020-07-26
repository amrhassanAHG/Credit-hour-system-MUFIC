import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class StudentMarks extends Component {
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
                                <h1 className="m-0 text-dark">Student Status</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item "><NavLink to="/" exact={true}>Home</NavLink></li>
                                    <li className="breadcrumb-item">Courses</li>
                                    <li className="breadcrumb-item active">information</li>
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
                                <h3 className="card-title">Students Status</h3>
                            </div>
                            <form role="form">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">

                                                <select className="form-control">
                                                    <option>software</option>
                                                    <option>computer language</option>
                                                    <option>math</option>
                                                    <option>DS</option>
                                                    <option>GIS</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">

                                                <select className="form-control">
                                                    <option>cs</option>
                                                    <option>is</option>
                                                    <option>it</option>
                                                    <option>or</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">

                                                <select className="form-control">
                                                    <option>sec 1 </option>
                                                    <option>sec 2</option>
                                                    <option>sec 3</option>
                                                    <option>sec 4</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="center">
                                            <button type="submit" className="btn btn-primary">Show</button>
                                        </div>
                                        <div className="center">
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </div>

                                    </div>
                                    {/* /.card-body */}


                                    <div className="col-md-100">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Grades</h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Student id</th>
                                                            <th>Student name</th>
                                                            <th>year work</th>
                                                            <th>Mid exam</th>
                                                            <th>written exam</th>
                                                            <th>Total</th>
                                                            <th>absent Lec</th>
                                                            <th>absent Lab</th>
                                                            <th>Total absent</th>
                                                            <th>tips</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>213213123</td>
                                                            <td> Mohamed Osama elshwaikh </td>
                                                            <td>
                                                                <input id="year word" className="form-control" />
                                                            </td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>213213123</td>
                                                            <td> Mustafa Khaled</td>
                                                            <td>
                                                                <input id="year word" className="form-control" />
                                                            </td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>213213123</td>
                                                            <td> amr magdy</td>
                                                            <td>
                                                                <input id="year word" className="form-control" />
                                                            </td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>213213123</td>
                                                            <td> amr hassan </td>
                                                            <td>
                                                                <input id="year word" className="form-control" />
                                                            </td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>213213123</td>
                                                            <td> z8 w welo </td>
                                                            <td>
                                                                <input id="year word" className="form-control" />
                                                            </td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><input id="year word" className="form-control" type="number" /></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><input id="year word" className="form-control" /></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer clearfix">
                                                <ul className="pagination pagination-sm m-0 float-right">
                                                    <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.card */}
                            </form>
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}