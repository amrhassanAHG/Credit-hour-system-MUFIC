import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = ()=>{ 
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark" >Course Excuse</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item "><NavLink to="/" exact={true}>Home</NavLink></li>
                                    <li className="breadcrumb-item">Course</li>
                                    <li className="breadcrumb-item active">Excuse</li>
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
                                <h3 className="card-title">Materials</h3>
                            </div>
                            <form role="form" >
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>select Your materail</label>
                                                <select defaultValue="Albama" className="form-control select2 select2-danger"
                                                    data-dropdown-css-class="select2-danger" style={{ width: '100%' }}>
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
                                            <div className="card-body pad">
                                                <div className="mb-3">
                                                    <textarea className="textarea" placeholder="Place some text here"
                                                        style={{width: '100%', height: '200px', fontSize: '14px', lineHeight: '18px', border: '1px solid #dddddd', padding: '10px'}}></textarea>
                                                </div>
                                                <div className="form-group">
                                                    {/* <label for="customFile">Custom File</label> */}
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="customFile" />
                                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer clearfix">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card */}
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
