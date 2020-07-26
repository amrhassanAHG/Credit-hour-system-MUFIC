import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class UploadMaterialsBody extends Component {
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
                                                    <option>all</option>
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


                                    </div>
                                    {/* /.card-body */}



                                    {/* Main content */}
                                    <div className="card card-primary">
                                        {/* form start */}
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1"> Title</label>
                                                <input type="text" className="form-control" id="title"
                                                    placeholder="Enter title" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Discription</label>
                                                <textarea style={{ height: '100px' }} className="form-control" id="hint" placeholder="hint"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">File input</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        {/* /.card-body */}

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Upload</button>
                                        </div>
                                    </div>
                                    {/* /.card */}
                                </div>{/* /.container-fluid */}
                            </form>
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}