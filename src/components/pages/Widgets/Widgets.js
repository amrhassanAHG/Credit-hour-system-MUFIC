import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import WidgetsBody from './WidgetsBody'
import Footer from '../../layout/Footer'

const Widgets = ()=>(
    <div>
        <NavSideBar>
            <WidgetsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Widgets;