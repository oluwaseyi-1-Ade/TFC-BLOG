import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar';
// import { useEffect } from 'react';
// import { useDarkMode } from '../context/DarkModeContext';



const Layout = () => {

    return (
        <div className={`min-h-screen w-full mx-auto flex flex-col`}>
            <Navbar />

            <div className="flex-grow mt-[120px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;