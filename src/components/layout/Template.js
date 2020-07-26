import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

///////////////////////////////////////////////////////////////////////

import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import PageBody from './PageBody'
import Footer from '../../layout/Footer'

const Page = ()=>(
    <div>
        <NavSideBar>
            <PageBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Page;