import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import validator from 'validator';
export default class WritePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
       title: '',
       imageLink: '',
       postBody: ''
    };
  }

  componentDidMount = () => {

  };

  submit = (e) => {
    e.preventDefault();
    let isValid = true ;
    const inputs = document.getElementsByClassName("writePost-item");
    for(let i = 0 ;  i < inputs.length; i++){
       if(validator.isEmpty(inputs[i].value)){
          isValid = false ;
          inputs[i].classList.add("is-invalid");
       } else inputs[i].classList.remove("is-invalid");
    }


    /*for testing*/
    // const postWrite = document.getElementsByClassName("note-editing-area")[0];
    // if(validator.isEmpty(postWrite.innerText)){
    //     isValid = false ;
    //     postWrite.classList.add("is-invalid");
    // } else postWrite.classList.remove("is-invalid");

    const postWrite = document.getElementsByClassName("note-editing-area")[0]
    this.setState((prev) => {
      return {
        ...prev,
        postBody: postWrite.innerHTML
      }
    });

    if(!isValid) return;

    //i used timeout cause the setState upove of adding postBody takes time 
    setTimeout(() => {
        //rest of work send requests
        console.log(this.state);
    }, 500)
  }

  uploadImage = (e) => {
    e.persist();
    if(!validator.isEmpty(e.target.value)) e.target.classList.remove("is-invalid");
    //  const image = document.getElementById("previewImage");
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    this.setState(() => {
      return {
        imageLink: imageUrl
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
                <h1 className="m-0 text-dark">Write post</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">Write post</li>
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
                <h3 className="card-title">Write Post</h3>
              </div>
              <form className="form form-group" role="form" onSubmit={this.submit}>
                <div className="card-body">
                  <div className="mb-3">
                    <div className='row'>
                       {/* this image is for testing */}
                       {/* <div className='col'>
                          <img src='' alt='preview' id="previewImage"/>
                       </div> */}
                       <div className='col'>
                          <input type='tel' className='form-control writePost-item' placeholder='Title' 
                          onChange={(e) => {
                            e.persist(); // for unknown reson
                            if(!validator.isEmpty(e.target.value)) e.target.classList.remove("is-invalid");
                            this.setState(() => {
                              return {
                                title: e.target.value
                              }
                            });
                          }}/>
                       </div>
                       <div className='col'>
                          <div class="custom-file">
                              <input 
                                  onChange = {this.uploadImage}
                                  type="file" 
                                  accept=".jpg, .jpeg, .png"
                                  className="custom-file-input  writePost-item" 
                                  id="inputGroupFile01" 
                                  alt=''
                              />
                              <label className="custom-file-label" htmlFor="inputGroupFile01">Choose image</label>
                          </div>  
                       </div>                     
                    </div>
                    <br />
                    <textarea
                      className="textarea"
                      placeholder="Place some text here"
                      style={{
                        width: "100%",
                        height: "200px",
                        fontSize: "14px",
                        lineHeight: "18px",
                        border: "1px solid #dddddd",
                        padding: "10px",
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
