import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ResultBody extends Component {
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
                                <h1 className="m-0 text-dark">Course Registeration</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item "><NavLink to="/" exact={true}>Home</NavLink></li>
                                    <li className="breadcrumb-item">Course</li>
                                    <li className="breadcrumb-item active">Register</li>
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
                                <h3 className="card-title">Hello</h3>
                            </div>
                            <form role="form">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {/* select */}
                                            <div className="form-group">

                                                <select className="form-control">
                                                    <option>2016</option>
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                    <option>2020</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card-body */}

                                    <div className="center">
                                        <button type="submit" className="btn btn-primary">show</button>
                                    </div>

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
                                                            <th>Course id</th>
                                                            <th>course name</th>
                                                            <th>year word</th>
                                                            <th>Mid exam</th>
                                                            <th>written exam</th>
                                                            <th>Total</th>
                                                            <th>absent Lec</th>
                                                            <th>absent Lab</th>
                                                            <th>Total absent</th>
                                                            <th>Point</th>
                                                            <th>GPA</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>111c3</td>
                                                            <td> software </td>
                                                            <td>
                                                                <span className="badge bg-success">30</span>
                                                            </td>
                                                            <td><span className="badge bg-danger">5</span></td>
                                                            <td><span className="badge bg-warning">60</span></td>
                                                            <td><span className="badge bg-success">95</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>111c3</td>
                                                            <td> software </td>
                                                            <td>
                                                                <span className="badge bg-success">30</span>
                                                            </td>
                                                            <td><span className="badge bg-danger">5</span></td>
                                                            <td><span className="badge bg-warning">60</span></td>
                                                            <td><span className="badge bg-success">95</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>111c3</td>
                                                            <td> software </td>
                                                            <td>
                                                                <span className="badge bg-success">30</span>
                                                            </td>
                                                            <td><span className="badge bg-danger">5</span></td>
                                                            <td><span className="badge bg-warning">60</span></td>
                                                            <td><span className="badge bg-success">95</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>111c3</td>
                                                            <td> software </td>
                                                            <td>
                                                                <span className="badge bg-success">30</span>
                                                            </td>
                                                            <td><span className="badge bg-danger">5</span></td>
                                                            <td><span className="badge bg-warning">60</span></td>
                                                            <td><span className="badge bg-success">95</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>111c3</td>
                                                            <td> software </td>
                                                            <td>
                                                                <span className="badge bg-success">30</span>
                                                            </td>
                                                            <td><span className="badge bg-danger">5</span></td>
                                                            <td><span className="badge bg-warning">60</span></td>
                                                            <td><span className="badge bg-success">95</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span style={{ fontSize: 'large' }} className="badge bg-success">A+</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>111c3</td>
                                                            <td> software </td>
                                                            <td>
                                                                <span className="badge bg-success">30</span>
                                                            </td>
                                                            <td><span className="badge bg-danger">5</span></td>
                                                            <td><span className="badge bg-warning">60</span></td>
                                                            <td><span className="badge bg-success">95</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">2</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
                                                            <td><span className="badge bg-warning">4</span></td>
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
                            </form>
                            {/* /.card */}
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}