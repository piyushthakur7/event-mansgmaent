import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyName, navLinks } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="w-full bg-white text-gray-800"
            style={{
                backgroundColor: '#fff',
                color: 'var(--color-text)',
                borderBottom: '1px solid #f0f0f0',
                paddingTop: '20px',
                position: 'relative',
                zIndex: 50
            }}
        >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Top Section: Title/Logo */}
                <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative', width: '100%' }}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <div>
                            <h1 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                margin: 0,
                                fontWeight: 400,
                                letterSpacing: '1px',
                                color: 'var(--color-text)'
                            }}>
                                {companyName}
                            </h1>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1rem',
                                color: '#666',
                                marginTop: '5px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}>
                                by Event Experts
                            </p>
                        </div>

                        {/* Logo on the right for desktop */}
                        <div className="desktop-logo" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                            <img src="/assets/logo.png" alt="Logo" style={{ height: '80px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Navigation */}
                <div className="desktop-menu" style={{
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                    padding: '15px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px'
                }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: 'var(--color-text)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.1rem',
                                letterSpacing: '0.5px',
                                transition: 'color 0.3s',
                                color: isActive ? 'var(--color-primary)' : 'inherit',
                                borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent'
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle (Absolute Top Right) */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer'
                    }}
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
                        style={{
                            backgroundColor: 'white',
                            overflow: 'hidden',
                            borderTop: '1px solid #eee'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center', gap: '20px' }}>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{ textDecoration: 'none', color: 'var(--color-text)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .desktop-logo { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
