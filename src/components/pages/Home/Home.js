import React, { Component } from 'react'
import NavSideBar from '../../layout/NavSideBar'
import HomeBody from './HomeBody'
import Footer from '../../layout/Footer'

const Home = ()=>(
    <div>
        <NavSideBar all={true}>
            <HomeBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Home;