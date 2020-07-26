import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import StudentMarksBody from './StudentMarksBody'
import Footer from '../../layout/Footer'

const StudentMarks = ()=>(
    <div>
        <NavSideBar>
            <StudentMarksBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default StudentMarks;