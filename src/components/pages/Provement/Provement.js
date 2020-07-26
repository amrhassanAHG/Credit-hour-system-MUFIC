import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import ProvementBody from './ProvementBody'
import Footer from '../../layout/Footer'

const Provement = ()=>(
    <div>
        <NavSideBar>
            <ProvementBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Provement;