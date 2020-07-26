import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import ViewExcusesBody from './ViewExcusesBody'
import Footer from '../../layout/Footer'

const ViewExcuses = ()=>(
    <div>
        <NavSideBar>
            <ViewExcusesBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default ViewExcuses;