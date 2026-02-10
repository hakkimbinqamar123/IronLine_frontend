import React from 'react'
import logo from '../assets/Images/logo.webp'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `hover:text-[#0F2A44] pb-1 border-b-2 transition
        ${isActive ? 'border-[#0F2A44] text-[#0F2A44]' : 'border-transparent'}`;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/">
                            <img src={logo} alt="Iron Line" className="h-14 w-auto" />
                        </NavLink>
                    </div>

                    {/* Nav Links */}
                    <nav className="hidden md:flex space-x-6 text-sm font-medium">
                        <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
                        <NavLink to="/operations" className={linkClass}>Operations</NavLink>
                        <NavLink to="/services" className={linkClass}>Services</NavLink>
                        <NavLink to="/subsidiary" className={linkClass}>Subsidiary</NavLink>
                        <NavLink to="/news" className={linkClass}>News and Media</NavLink>
                    </nav>

                    {/* CTA */}
                    <NavLink
                        to="/contacts"
                        className="bg-[#173E73] hover:bg-white hover:text-[#0F2A44]
                                   px-4 py-2 rounded-md text-white text-sm font-medium transition"
                    >
                        Get in Touch
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
