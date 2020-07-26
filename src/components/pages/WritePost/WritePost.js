import React from 'react'
import NavSideBar from '../../layout/NavSideBar'
import WritePostBody from './WritePostBody'
import Footer from '../../layout/Footer'

const WritePost = ()=>(
    <div>
        <NavSideBar>
            <WritePostBody />
        </NavSideBar>
        <Footer />
    </div>
);

export default WritePost;