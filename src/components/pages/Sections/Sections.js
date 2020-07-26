import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import SectionsBody from './SectionsBody'
import Footer from '../../layout/Footer'

const Sections = ()=>(
    <div>
        <NavSideBar>
            <SectionsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Sections;