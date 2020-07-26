import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import ResultBody from './ResultBody'
import Footer from '../../layout/Footer'

const Result = ()=>(
    <div>
        <NavSideBar semester={true}>
            <ResultBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Result;