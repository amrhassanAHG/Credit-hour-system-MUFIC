import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class MaterialsBody extends Component {
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
                                    <li className="breadcrumb-item "><NavLink to="/">Home</NavLink></li>
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


                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>select Your matirail</label>
                                            <select defaultValue="Albama" className="form-control select2 select2-danger"
                                                data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
                                                <option value="Alabama">Alabama</option>
                                                <option value="Alaska">Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>

                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}


                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title"> Course Material </h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th style={{width: '10px'}}>Date</th>
                                                        <th> Course Material </th>

                                                        <th style={{width: '40px'}}>Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1/1/2020.</td>
                                                        <td>Update softwareUpdate softwareUpdate softwareUpdate softwareUpdate software</td>

                                                        <td> <button type="submit" className="badge bg-success">Download</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5/5/2005</td>
                                                        <td>Clean databaseCron job runningCron job runningCron job runningCron job running</td>

                                                        <td> <button type="submit" className="badge bg-success">Download</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3/2/2020</td>
                                                        <td>Cron job runningCron job runningCron job runningCron job running</td>

                                                        <td> <button type="submit" className="badge bg-success">Download</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4/4/2020.</td>
                                                        <td>Fix and squish bugsCron job runningCron job runningCron job running</td>

                                                        <td> <button type="submit" className="badge bg-success">Download</button></td>
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
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}