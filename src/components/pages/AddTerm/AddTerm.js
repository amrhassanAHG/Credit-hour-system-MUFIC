import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import AddTermBody from './AddTermBody'
import Footer from '../../layout/Footer'

const AddTerm = ()=>(
    <div>
        <NavSideBar>
            <AddTermBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default AddTerm;