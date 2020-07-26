import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import CoursesBody from './CoursesBody'
import Footer from '../../layout/Footer'

const Courses = ()=>(
    <div>
        <NavSideBar>
            <CoursesBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Courses;