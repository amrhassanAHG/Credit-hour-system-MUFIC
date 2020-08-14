import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AddMarksBody from './AddMarksBody'
import Footer from '../../layout/Footer'

const AddMarks = ()=>(
    <div>
        <NavSideBar>
            <AddMarksBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default AddMarks;