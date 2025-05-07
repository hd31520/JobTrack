import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const Root = () => {
    return (
        <div className='mx-auto md:px-5 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;