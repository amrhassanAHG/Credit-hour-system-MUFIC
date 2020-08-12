import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import validator from 'validator';
import userService from "../../../services/user.service";

export default class AddProgramManuallyBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArabic: "",
      hours: 0,
      underRequirement: 0
    };
  }

  componentDidMount() {
  //   userService.getData("programs").then(
  //     (response) => {
  //       // const programsData = response.data.programs;
  //     },
  //     (error) => {

  //     }
  //   );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const el = document.getElementsByName("addProgram-item");
    let isValid = true ;

    const elHours = document.getElementsByName("addProgram-item-hourse");
    
    const isHours = /^[0-9]+$/;
    
    for(let i = 0 ; i < elHours.length; i++){
      const isMatch = isHours.test(elHours[i].value);
      if(!isMatch) {
        elHours[i].classList.add('is-invalid');
        isValid = false ;
      } else elHours[i].classList.remove('is-invalid');
    }


    for(let i = 0 ; i < el.length; i++){
       if(validator.isEmpty(el[i].value) || el[i].classList.contains('is-invalid')){
         el[i].classList.add('is-invalid');
         isValid = false ;
       } else el[i].classList.remove('is-invalid');
    }

    if(isValid === false) return;

    let program = {
      nameArabic: this.state.nameArabic,
      hours: this.state.hours,
    };

    if(this.state.underRequirement >= 1){
      program["underRequirement"] = this.state.underRequirement;
    }

    const resetForm = () => {
      this.setState({
        nameArabic: "",
        hours: 0,
        underRequirement: 0
      });
      window.location.reload();
    }

    userService.sendData("programs", program).then(() => {
      resetForm();
    }).catch(() => {
      resetForm();
    })
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Add program</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <NavLink to="/" exact={true}>
                      Home
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <NavLink to="/admin-courses">
                      Courses
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item active">Add program</li>
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
                <h3 className="card-title  ">Add Program</h3>
              </div>
              <div className='card-body'>
                 <form className="form" role="form" onSubmit={this.onSubmit}>
                  <div className='row'>
                  <div className="form-group col-6">
                    <label htmlFor="arabicName">Arabic Name</label>
                    <input
                      name='addProgram-item'
                      value={this.state.nameArabic}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const isArabic = /^[\u0600-\u06FF]+[(\u0600-\u06FF)|(\s)]*$/;
                        const isMatch = isArabic.test(newValue);
                        if(!isMatch) {
                          e.target.classList.add('is-invalid');
                          
                        } else {
                          e.target.classList.add('is-valid');
                          e.target.classList.remove('is-invalid');
                        }
                        this.setState({ nameArabic: newValue });
                      }}
                      type="text"
                      className="form-control"
                      id="arabicName"
                    />
                      <div class="invalid-feedback">
                        please enter arabic letters only and it should start with letter not spaces
                      </div>
                  </div>
                  </div>
                  <div className='row'>
                  <div className="form-group col">
                    <label htmlFor="hours">Hours</label>
                    <input
                      name='addProgram-item-hourse'
                      value={this.state.hours}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const isHours = /^[0-9]+$/;
                        const isMatch = isHours.test(newValue);
                        if(!isMatch) {
                          e.target.classList.add('is-invalid');
                          
                        } else {
                          e.target.classList.add('is-valid');
                          e.target.classList.remove('is-invalid');  
                        }
                        this.setState({ hours: newValue });
                      }}
                      type="number"
                      className="form-control"
                      id="hours"
                    />
                    <div class="invalid-feedback">
                      please enter a number greater than to equal 0
                    </div>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="underRequirement">underRequirement</label>
                    <input
                      name='addProgram-item-hourse'
                      value={this.state.underRequirement}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const isUnderRequirement = /^[0-9]+$/;
                        const isMatch = isUnderRequirement.test(newValue);
                        if(!isMatch) {
                          e.target.classList.add('is-invalid');
                          
                        } else {
                          e.target.classList.add('is-valid');
                          e.target.classList.remove('is-invalid');  
                        }
                        this.setState({ underRequirement: newValue });
                      }}
                      type="number"
                      className="form-control"
                      id="underRequirement"
                    />
                    <div class="invalid-feedback">
                      please enter a number greater than or equal to 0
                    </div>
                  </div>
                  
                  </div>
                  <hr />
                <div className="card-footer float-right">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
                {/* /.modal-content */}
              </form>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
