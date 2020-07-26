import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AddStudentSheetBody from './AddStudentSheetBody'
import Footer from '../../layout/Footer'

const AddStudentSheet = ()=>(
    <div>
        <NavSideBar>
            <AddStudentSheetBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default AddStudentSheet;