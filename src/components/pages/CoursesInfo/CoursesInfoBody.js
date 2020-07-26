import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CoursesInfoBody extends Component {
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
                                    <li className="breadcrumb-item"><NavLink to="/courses">Courses</NavLink></li>
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
                                <h3 className="card-title">
                                    java
                                </h3>
                            </div>
                            <div className="card-body">
                                <blockquote>
                                    <h3>ec244 </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.</p>
                                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        )
    }
}