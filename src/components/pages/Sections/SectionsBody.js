import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SectionsBody extends Component {
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
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Total number</th>
                                                        <th>150</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
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
                                            <button style={{width: '100px'}} type="submit" className="btn btn-primary">Show</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{paddingTop: '20px', paddingBottom: '20px'}} className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Number student per Section</label>
                                        <div className="col-sm-2">
                                            <input type="number" className="form-control" id="inputEmail3" placeholder="number" />
                                        </div>
                                        <div className="col-sm-2">
                                            <button style={{width: '100px'}} type="submit" className="btn btn-primary">divide</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <table className="table table-bordered col-sm-6">
                                        <thead>
                                            <tr>
                                                <th>section</th>
                                                <th>number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <input type="number" className="form-control" id="inputEmail3" placeholder="number" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <input type="number" className="form-control" id="inputEmail3" placeholder="number" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <input type="number" className="form-control" id="inputEmail3" placeholder="number" />
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>total section : 3</th>
                                                <th>remain student: 50</th>
                                            </tr>
                                        </tfoot>
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