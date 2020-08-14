import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import file1 from '../../../assets/diabetics.csv'
import file2 from '../../../assets/Gis.docx'
import file3 from '../../../assets/Task resolution .pdf'

export default class EditMaterialBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: [
        {
          date: "1/2/2020",
          description: "Diabetics dataset",
          link: file1,
        },
        {
          date: "7/3/2020",
          description: "GIS question bank",
          link: file2,
        },
        {
          date: "14/8/2020",
          description: "Resolution task",
          link: file3,
        },
      ],
    };
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Edit Materials</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Edit Materials</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <div className="content">
          {/* SELECT2 EXAMPLE */}
          <div className="card card-default">
            <div className="card-header">
              <div className="row">
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
                            <th style={{ width: "10px" }}>Date</th>
                            <th>Material description</th>

                            <th style={{ width: "40px" }}>Download</th>
                            <th style={{ width: "40px" }}>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.materials.map((material, index) => (
                            <tr key={index}>
                              <td>{material.date}</td>
                              <td>{material.description}</td>

                              <td className="project-actions text-right">
                                <a
                                  className="btn btn-primary btn-sm"
                                  href={material.link}
                                  download
                                >
                                  <i className="fas fa-download"></i>
                                  Download
                                </a>
                              </td>
                              <td className="project-actions text-right">
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={(e) => {
                                    const newMaterials = this.state.materials.filter(
                                      (mt) => material.link != mt.link
                                    );
                                    this.setState({ materials: newMaterials });
                                    setTimeout(() => {
                                      alert("material deleted successfully");
                                    }, 0.00001);
                                  }}
                                >
                                  <i className="fas fa-trash"></i>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}

            {/* SELECT2 EXAMPLE */}
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
    );
  }
}
