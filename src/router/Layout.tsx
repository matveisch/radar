import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Layout = () => {
    const [showOptions, setShowOptions] = useState(false);
    const wrapperRef = useRef<HTMLImageElement>(null);

    function handleClickOutside(e: { target: any }) {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    }

    return (
        <div onClick={handleClickOutside}>
            <Navbar
                setShowOptions={setShowOptions}
                showOptions={showOptions}
                wrapperRef={wrapperRef}
            />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
