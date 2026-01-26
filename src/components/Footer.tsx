import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { companyName, contactInfo, navLinks } from '../data';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', paddingTop: '60px', paddingBottom: '30px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>

                {/* Brand */}
                <div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '20px', color: 'var(--color-primary)' }}>{companyName}</h2>
                    <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '20px' }}>
                        Designing timeless weddings and exceptional events across India. We turn your dreams into reality with elegance and precision.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="#" style={{ color: '#fff' }}><Instagram size={20} /></a>
                        <a href="#" style={{ color: '#fff' }}><Facebook size={20} /></a>
                        <a href="#" style={{ color: '#fff' }}><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '5px' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {navLinks.map(link => (
                            <li key={link.name} style={{ marginBottom: '10px' }}>
                                <Link to={link.path} style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = '#aaa'}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '5px' }}>Get in Touch</h3>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#aaa' }}>
                            <MapPin size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                            <span>{contactInfo.address}</span>
                        </li>
                        <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center', color: '#aaa' }}>
                            <Phone size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                            <span>{contactInfo.phone}</span>
                        </li>
                        <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center', color: '#aaa' }}>
                            <Mail size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                            <span>{contactInfo.email}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #333', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
