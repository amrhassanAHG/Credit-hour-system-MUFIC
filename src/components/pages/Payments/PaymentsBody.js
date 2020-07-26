import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PaymentsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Payment</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">student sections</li>
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
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Payments</h3>
              </div>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control">
                          <option>-- Select Student --</option>
                          <option>smsm</option>
                          <option>3mr</option>
                          <option>Mostafa</option>
                        </select>
                      </div>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Total Hour</th>
                            <th>21</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control">
                          <option value="none">-- Select Term --</option>
                          <option>Frist</option>
                          <option>second</option>
                          <option>summer</option>
                        </select>
                      </div>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Total price</th>
                            <th>1500</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                    <div className="center">
                      <button
                        style={{ width: 150 }}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{ paddingTop: 20, paddingBottom: 20 }}
                    className="form-group row"
                  >
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      voucher number
                    </label>
                    <div className="col-sm-3">
                      <input
                        type="input"
                        className="form-control"
                        id="input "
                        placeholder="number"
                      />
                    </div>
                    <div className="col-sm-2">
                      <button
                        style={{ width: 100 }}
                        type="submit"
                        className="btn btn-success"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-bordered col-sm-6">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>voucher number</th>
                        <th>Total LE</th>
                        <th>Term</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1342542345436326</td>
                        <td>1400</td>
                        <td>Frist</td>
                        <td>1/1/2001</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>1342542345436326</td>
                        <td>1400</td>
                        <td>Frist</td>
                        <td>1/1/2001</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>1342542345436326</td>
                        <td>1400</td>
                        <td>Frist</td>
                        <td>1/1/2001</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>total</th>
                        <th> 4400 </th>
                        <th></th>
                        <th> </th>
                        <th />
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </form>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
    );
  }
}
