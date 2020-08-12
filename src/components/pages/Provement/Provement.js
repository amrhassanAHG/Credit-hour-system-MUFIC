import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import ProvementBody from './ProvementBody'
import Footer from '../../layout/Footer'
import './Provement.css';

const Provement = (props)=>(
    <div>
        <NavSideBar>
            <ProvementBody history={props.history}/>
        </NavSideBar>
        <div className="noprint">
            <Footer />
        </div>
    </div>
);

export default Provement;