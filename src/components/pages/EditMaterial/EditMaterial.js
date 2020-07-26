import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import EditMaterialBody from './EditMaterialBody'
import Footer from '../../layout/Footer'

const EditMaterial = ()=>(
    <div>
        <NavSideBar>
            <EditMaterialBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default EditMaterial;