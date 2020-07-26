import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import DepartmentBody from './DepartmentBody'
import Footer from '../../layout/Footer'

const Department = ()=>(
    <div>
        <NavSideBar>
            <DepartmentBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Department;