import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import RegisterCoursesBody from './RegisterCoursesBody'
import Footer from '../../layout/Footer'

const RegisterCourses = ()=>(
    <div>
        <NavSideBar>
            <RegisterCoursesBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default RegisterCourses;