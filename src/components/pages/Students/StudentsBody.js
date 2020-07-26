import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class StudentsBody extends Component {
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
                                <h1 className="m-0 text-dark">Students</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item "><a href="#">DashBoard</a></li>
                                    <li className="breadcrumb-item">Studenst</li>
                                    <li className="breadcrumb-item active">list</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="card card-primary ">
                            <div className="card-header">
                                <h3 className="card-title">Students</h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <form className="form" role="form">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">

                                                <select className="form-control">
                                                    <option>-- Select Level --</option>
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
                                                    <option value="none">-- Select Department --</option>
                                                    <option>CS</option>
                                                    <option>IS</option>
                                                    <option>IT</option>
                                                    <option>or</option>
                                                    <option>BIO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            {/* select */}
                                            <div className="form-group">

                                                <select className="form-control">
                                                    <option value="none">-- Select section --</option>
                                                    <option>sec 1</option>
                                                    <option>sec 2</option>
                                                    <option>sec 3</option>
                                                    <option>sec 4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="center">
                                            <button style={{ width: '100px' }} type="submit" className="btn btn-primary">Show</button>
                                        </div>
                                    </div>
                                </form>
                                <table id="example2" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>national ID</th>
                                            <th>Email</th>
                                            <th>nationality</th>
                                            <th>Credit</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Name1</td>
                                            <td>1231233123123</td>
                                            <td>asdxasd012@gmail.com</td>
                                            <td>Egyption</td>
                                            <td>123954</td>
                                            <td className="project-actions text-center">
                                                <a className="btn btn-info btn-sm" href="#">
                                                    <i className="fas fa-pencil-alt"></i>
                                                    Edit
                                                </a>
                                                <a className="btn btn-danger btn-sm" href="#">
                                                    <i className="fas fa-trash"></i>
                                                    Disable
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Name1</td>
                                            <td>1231233123123</td>
                                            <td>asdxasd012@gmail.com</td>
                                            <td>Egyption</td>
                                            <td>123954</td>
                                            <td className="project-actions text-center">
                                                <a className="btn btn-info btn-sm" href="#">
                                                    <i className="fas fa-pencil-alt"></i>
                                                    Edit
                                                </a>
                                                <a className="btn btn-danger btn-sm" href="#">
                                                    <i className="fas fa-trash"></i>
                                                    Disable
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Name1</td>
                                            <td>1231233123123</td>
                                            <td>asdxasd012@gmail.com</td>
                                            <td>Egyption</td>
                                            <td>123954</td>
                                            <td className="project-actions text-center">
                                                <a className="btn btn-info btn-sm" href="#">
                                                    <i className="fas fa-pencil-alt"></i>
                                                    Edit
                                                </a>
                                                <a className="btn btn-danger btn-sm" href="#">
                                                    <i className="fas fa-trash"></i>
                                                    Disable
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>national ID</th>
                                            <th>Email</th>
                                            <th>nationality</th>
                                            <th>Credit</th>
                                            <th>Edit</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {/* /.card-body */}
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}