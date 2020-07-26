import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AdminCoursesBody from './AdminCoursesBody'
import Footer from '../../layout/Footer'
  
const AdminCourses = (props)=>(
    <div>
        <NavSideBar>
            <AdminCoursesBody history={props.history}/>
        </NavSideBar>
        <Footer />
    </div>
);

export default AdminCourses;