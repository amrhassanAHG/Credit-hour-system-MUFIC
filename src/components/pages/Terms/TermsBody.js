import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TermsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [],
    };
  }

  componentDidMount(){
    const currentTerms = localStorage.getItem("terms");
    if (currentTerms) this.setState({ terms: JSON.parse(currentTerms) });
  }

  onTermDelete = (e) => {
    const id = e.target.id;
    const newTerms = this.state.terms.filter((term, idx)=>idx.toString()!=id)
    this.setState({terms : newTerms})

    setTimeout(()=>{
      localStorage.setItem('terms', this.state.terms);
      alert('Term deleted successfully');
    },1);
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Terms</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">Terms</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        <div className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">All Terms</h3>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <div className="  float-right">
                    <NavLink to="/add-term">
                      <button
                        style={{ width: 100, marginBottom: 10 }}
                        className="btn btn-success "
                      >
                        New Term
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Arabic Name</th>
                        <th>English name</th>
                        <th>Start Date </th>
                        <th>End Date</th>
                        <th>options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.terms.map((term, index) => (
                        <tr key={index}>
                          <td>{term.termArabicName}</td>
                          <td>{term.termEnglishName}</td>
                          <td>{term.termStartDate}</td>
                          <td>{term.termEndDate}</td>
                          <td>
                            <div className="row- center">
                              <button
                                id={index.toString()}
                                onClick={this.onTermDelete}
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
        {/* /.content */}
      </div>
    );
  }
}
