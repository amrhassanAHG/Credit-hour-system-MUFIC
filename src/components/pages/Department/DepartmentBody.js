import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class DepartmentBody extends Component {
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
                                <h3 className="card-title">Courses Info</h3>
                            </div>
                            <div className="card-body">
                                <div className="col-md-6">
                                    {/* /.form-group */}
                                    {/* /.col */}
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>short cut</th>
                                                <th>Department</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>number 1 </td>
                                                <td>cs </td>
                                                <td>
                                                    <div>
                                                        {/* select */}
                                                        <div className="form-group">

                                                            <select className="form-control">
                                                                <option>-- Select dep --</option>
                                                                <option>computer scince</option>
                                                                <option>information technology</option>
                                                                <option>infomation system</option>
                                                                <option>organization </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>number 1 </td>
                                                <td>cs </td>
                                                <td>
                                                    <div>
                                                        {/* select */}
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option>-- Select dep --</option>
                                                                <option>computer scince</option>
                                                                <option>information technology</option>
                                                                <option>infomation system</option>
                                                                <option>organization </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>number 1 </td>
                                                <td>cs </td>
                                                <td>
                                                    <div>
                                                        {/* select */}
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option>-- Select dep --</option>
                                                                <option>computer scince</option>
                                                                <option>information technology</option>
                                                                <option>infomation system</option>
                                                                <option>organization </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>number 1 </td>
                                                <td>cs </td>
                                                <td>
                                                    <div>
                                                        {/* select */}
                                                        <div className="form-group">

                                                            <select className="form-control">
                                                                <option>-- Select dep --</option>
                                                                <option>computer scince</option>
                                                                <option>information technology</option>
                                                                <option>infomation system</option>
                                                                <option>organization </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>
                                                    <div> <button type="button" className="btn btn-primary" data-toggle="modal"
                                                        data-target="#modal-default">Save</button></div>
                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}
