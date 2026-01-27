import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyName, navLinks } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">

                {/* Top Section: Title/Logo */}
                <div className="navbar-header">
                    <div>
                        <h1 className="brand-title">{companyName}</h1>
                        <p className="brand-subtitle">by Event Experts</p>
                    </div>

                    {/* Logo on the right for desktop */}
                    <div className="desktop-logo">
                        <img src="/assets/logo.png" alt="Logo" />
                    </div>
                </div>

                {/* Bottom Section: Navigation */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle (Absolute Top Right) */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-inner">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    style={{ fontSize: '1.2rem', padding: '10px 0' }}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
