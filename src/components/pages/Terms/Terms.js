import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import TermsBody from './TermsBody'
import Footer from '../../layout/Footer'

const Terms = ()=>(
    <div>
        <NavSideBar>
            <TermsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Terms;