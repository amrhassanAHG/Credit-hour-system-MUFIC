import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import RegistrationProvementBody from './RegistrationProvementBody'
import Footer from '../../layout/Footer'

const RegisterationProvement = ()=>(
    <div>
        <NavSideBar>
            <RegistrationProvementBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default RegisterationProvement;