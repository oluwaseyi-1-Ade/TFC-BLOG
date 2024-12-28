import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow mt-[120px]">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;