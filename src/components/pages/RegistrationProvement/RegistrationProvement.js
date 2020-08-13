import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import RegistrationProvementBody from './RegistrationProvementBody'
import Footer from '../../layout/Footer'

const RegisterationProvement = (props)=>(
    <div>
        <NavSideBar>
            <RegistrationProvementBody history={props.history} />
        </NavSideBar>
        <Footer />
    </div>
);

export default RegisterationProvement;