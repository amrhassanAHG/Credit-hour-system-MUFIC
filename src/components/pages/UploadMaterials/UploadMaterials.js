import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import UploadMaterialsBody from './UploadMaterialsBody'
import Footer from '../../layout/Footer'

const UploadMaterials = ()=>(
    <div>
        <NavSideBar>
            <UploadMaterialsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default UploadMaterials;