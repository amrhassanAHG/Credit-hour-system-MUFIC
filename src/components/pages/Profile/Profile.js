import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import ProfileBody from './ProfileBody'
import Footer from '../../layout/Footer'

const Profile = ()=>(
    <div>
        <NavSideBar>
            <ProfileBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default Profile;