import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import PaymentsBody from './PaymentsBody'
import Footer from '../../layout/Footer'

const Payments = ()=>(
    <div>
        <NavSideBar>
            <PaymentsBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Payments;