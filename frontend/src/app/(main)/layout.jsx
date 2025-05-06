import React from 'react'
import Navbar from '../../components/Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
    return (
        <>
            <Toaster/>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout;