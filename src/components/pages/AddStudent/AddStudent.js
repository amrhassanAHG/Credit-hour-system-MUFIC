import React from "react";
import NavSideBar from "../../layout/NavSideBar";
import AddStudentBody from "./AddStudentBody";
import Footer from "../../layout/Footer";

const AddStudent = () => (
  <div>
    <NavSideBar>
      <AddStudentBody />
    </NavSideBar>
    <Footer />
  </div>
);

export default AddStudent;
