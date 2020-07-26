import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import ExcuseBody from './ExcuseBody'
import Footer from '../../layout/Footer'

const Excuse = ()=>(
    <div>
        <NavSideBar>
            <ExcuseBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Excuse;