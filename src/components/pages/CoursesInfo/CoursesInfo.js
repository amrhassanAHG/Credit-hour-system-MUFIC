import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import CoursesInfoBody from './CoursesInfoBody'
import Footer from '../../layout/Footer'

const CoursesInfo = ()=>(
    <div>
        <NavSideBar>
            <CoursesInfoBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default CoursesInfo;