import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AddCourseManuallyBody from './AddCourseManuallyBody'
import Footer from '../../layout/Footer'

const AddCourseManually = ()=>(
    <div>
        <NavSideBar>
            <AddCourseManuallyBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default AddCourseManually;