import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AddProgramManuallyBody from './AddProgramManuallyBody'
import Footer from '../../layout/Footer'

const AddCourseManually = ()=>(
    <div>
        <NavSideBar>
            <AddProgramManuallyBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default AddCourseManually;