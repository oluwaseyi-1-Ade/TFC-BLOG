import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';



const Layout = () => {

    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`${isDarkMode} min-h-screen w-full mx-auto flex flex-col`}>
            <Navbar />

            <div className="flex-grow mt-[120px]">
                <Outlet />
            </div>
            <p className='p-10 text-black bg-white dark: dark:text-white dark:bg-black'>hello World</p>
            <Footer />
        </div>
    );
};

export default Layout;