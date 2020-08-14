import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const TabelItem = ({id, voucher, price, term, date}) => (
<tr>
  <td>{id}</td>
  <td>{voucher}</td>
  <td>{price}</td>
  <td>{term}</td>
  <td>{date}</td>
</tr>
)

const TabelBody = ({ list }) => {
  return list.map(({ id, voucher, price, term, date }) => {
     return <TabelItem id={id} voucher={voucher} price={price} term={term} date={date} />
  });
}

export default class PaymentsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
       students: [
         {
           name: 'mahmoud Tarek',
           Term: 'First'
         },
         {
           name: 'samy mohmed',
           Term: ''
         },
         {
           name: 'amr samy',
           Term: ''
         }
       ],
       studentName:'',
       Term: '',
       totalHour: 0,
       totalPrice: 0,
       voucher: 0,
       list: [
         {
           id: 1,
           voucher: 18736376733,
           price: 0,
           term: 'First',
           date: new Date().toDateString()
         }
       ],
       studentTotalPrice: 0
    };
  }

  searchByNameAndTerm = (e) => {
    console.log(this.state);
    //use this filter after you get request 
    // const isFound = this.state.students.filter((student) => {
    //    return student.name == this.state.studentName && student.Term == this.state.Term;
    // });

    //for testing
    let isFound = [""];


    //rest of logic
    if(isFound.length > 0){
      //send request to get total hour and total price for this student
      console.log('found');
      this.setState(() => {
        return {
          totalHour: parseInt(Math.random() * 10 + 120),
          totalPrice: parseInt(Math.random() * 100 + 300)
        }
      });
    } else {
      this.setState(() => {
        return {
          totalHour: 0,
          totalPrice: 0
        }
      });
    }
  }

  confirmPayment = (e) => {
    e.preventDefault();
    const getSelectId = (name) => {
       return document.getElementById(name + "-item"); 
    }

    let isValid = true ;

    const list = ["first", "second", "third"];
    for(let i = 0; i < list.length; i++){
        let element = getSelectId(list[i]);
        if(element.value === "none" || !element.value){
           element.classList.add("is-invalid");
           isValid = false ;
        } else {
          element.classList.remove("is-invalid");
        }
    }

    if(!isValid) return;
    //rest send requests

    this.setState((prevState) => {
       return {
         list: prevState.list.concat({
            id:  parseInt(Math.random() * 100),
            voucher: this.state.voucher,
            price: this.state.totalPrice,
            term: this.state.Term,
            date: new Date().toDateString()
         }),
         studentTotalPrice: prevState.studentTotalPrice + this.state.totalPrice
       }
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Payments</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Payments</li>
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
              <form onSubmit={this.confirmPayment}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="form-group">
                        <select className="form-control" 
                        id="first-item"
                        onChange={(e) => {
                           const newValue = e.target.value;
                           this.setState(() => {
                             return {
                               studentName: newValue
                             }
                           }); 
                        }}
                        >
                          <option value='none'>-- Select Student --</option>
                          {
                            this.state.students.map(({ name }) => <option>{name}</option>)
                          }
                        </select>
                      </div>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Total Hour</th>
                            <th>{this.state.totalHour}</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-sm-3">
                      {/* select */}
                      <div className="form-group">
                       <select className="form-control" 
                        id="second-item"
                        onChange={(e) => {
                           const newValue = e.target.value;
                           this.setState(() => {
                             return {
                               Term: newValue
                             }
                           }); 
                        }}
                        >
                          <option value="none">-- Select Term --</option>
                          <option>First</option>
                          <option>Second</option>
                          <option>Summer</option>
                        </select>
                      </div>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Total price</th>
                            <th>{this.state.totalPrice}</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                    <div className="center">
                      <button
                        style={{ width: 150 }}
                        type="button"
                        onClick={ this.searchByNameAndTerm }
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
                        onChange={(e) => {
                          const newValue = e.target.value;
                          this.setState(() => {
                            return {
                              voucher: newValue
                            }
                          }); 
                        }}
                        id="third-item"
                        type="input"
                        className="form-control"
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
                        <TabelBody list={this.state.list}/>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>total</th>
                        <th> {this.state.studentTotalPrice} </th>
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
