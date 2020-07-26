import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AddStudentManualBody from './AddStudentManualBody'
import Footer from '../../layout/Footer'

const AddStudentManual = ()=>(
    <div>
        <NavSideBar>
            <AddStudentManualBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default AddStudentManual;