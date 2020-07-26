import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import DashBoardBody from './DashBoardBody'
import Footer from '../../layout/Footer'

const DashBoard = ()=>(
    <div>
        <NavSideBar>
            <DashBoardBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default DashBoard;