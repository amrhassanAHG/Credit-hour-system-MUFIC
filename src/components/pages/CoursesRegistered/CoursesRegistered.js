import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import CoursesRegisteredBody from './CoursesRegisteredBody'
import Footer from '../../layout/Footer'

const CoursesRegistered = ()=>(
    <div>
        <NavSideBar>
            <CoursesRegisteredBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default CoursesRegistered;