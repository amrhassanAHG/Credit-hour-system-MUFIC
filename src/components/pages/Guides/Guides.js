import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import GuidesBody from './GuidesBody'
import Footer from '../../layout/Footer'

const Guides = ()=>(
    <div>
        <NavSideBar>
            <GuidesBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Guides;