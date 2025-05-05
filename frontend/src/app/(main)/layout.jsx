import React from 'react'
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
    return (
        <>
            <Toaster/>
            <Navbar />
            {children}
        </>
    )
}

export default Layout;