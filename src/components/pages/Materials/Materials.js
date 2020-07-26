import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import MaterialsBody from './MaterialsBody'
import Footer from '../../layout/Footer'

const Materials = ()=>(
    <div>
        <NavSideBar>
            <MaterialsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Materials;