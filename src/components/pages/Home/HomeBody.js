import React, { Component } from 'react'
import placeHold from "../../../assets/150x100.png"
import cardOneImage from '../../../assets/avatar.png'
import { NavLink } from 'react-router-dom';

export default class HomeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Home</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active"><NavLink to="/" exact={true}>Home</NavLink></li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                        {/* Timelime example  */}
                        <div className="row">
                            <div className="timeline">

                                {/* timeline time label */}
                                <div className="time-label">
                                    <span className="bg-red">10 Feb. 2014</span>
                                </div>
                                {/* /.timeline-label */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-envelope bg-blue"></i>
                                    <div className="timeline-item">    
                                        <div className="card-tools float-sm-right">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i></button>
                                        </div>
                                        <span className="time"><i className="fas fa-clock"></i> 12:05</span>
                                        <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                        <div className="timeline-body" >
                                            <p>Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                            quora plaxo ideeli hulu weebly balihoo...</p>
                                            <img src={cardOneImage} alt="card one image"/>
                                        </div>
                                        <div className="timeline-footer">
                                            <a className="btn btn-primary btn-sm">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-user bg-green"></i>
                                    <div className="timeline-item">
                                        <span className="time"><i className="fas fa-clock"></i> 12:05</span>
                                        <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                        <div className="timeline-body">
                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                            quora plaxo ideeli hulu weebly balihoo...
                                        </div>
                                        <div className="timeline-footer">
                                            <a className="btn btn-primary btn-sm">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                <div className="time-label">
                                    <span className="bg-green">3 Jan. 2014</span>
                                </div>

                                {/* timeline item */}
                                <div>
                                    <i className="fa fa-camera bg-purple"></i>
                                    <div className="timeline-item">
                                        <span className="time"><i className="fas fa-clock"></i> 12:05</span>
                                        <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                        <div className="timeline-body">
                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                            quora plaxo ideeli hulu weebly balihoo...
                                            <hr />
                                            <img src={placeHold} alt="..." />
                                            <img src={placeHold} alt="..." />
                                            <img src={placeHold} alt="..." />
                                            <img src={placeHold} alt="..." />
                                            <img src={placeHold} alt="..." />
                                        </div>
                                        <div className="timeline-footer">
                                            <a className="btn btn-primary btn-sm">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* END timeline item */}

                                {/* timeline item */}
                                <div>
                                    <i className="fas fa-clock bg-gray"></i>
                                </div>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
        )
    }
}
