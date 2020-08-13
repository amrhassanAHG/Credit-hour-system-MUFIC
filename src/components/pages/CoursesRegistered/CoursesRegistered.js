import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import CoursesRegisteredBody from './CoursesRegisteredBody'
import Footer from '../../layout/Footer'

const CoursesRegistered = (props)=>(
    <div>
        <NavSideBar>
            <CoursesRegisteredBody history={props.history}/>
        </NavSideBar>
        <Footer />
    </div>
);

export default CoursesRegistered;