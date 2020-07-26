import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import StudentsBody from './StudentsBody'
import Footer from '../../layout/Footer'

const Students = ()=>(
    <div>
        <NavSideBar>
            <StudentsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Students;