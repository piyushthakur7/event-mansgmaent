import React from 'react';
import { services } from '../data';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    return (
        <>
            <div style={{ backgroundColor: 'var(--color-secondary)', padding: '120px 0 60px', textAlign: 'center' }}>
                <h1 className="text-primary">Our Services</h1>
                <p>Comprehensive Event Solutions</p>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {services.map((service, index) => (
                            <div key={service.id} style={{
                                display: 'flex',
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                gap: '50px',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Placeholder for service image */}
                                    <div style={{ width: '100%', height: '300px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: '#aaa' }}>Service Image</span>
                                    </div>
                                </div>
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h2 style={{ marginBottom: '20px', color: 'var(--color-primary)' }}>{service.title}</h2>
                                    <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#555' }}>{service.description}</p>
                                    <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={16} color="var(--color-primary)" /> Detail Oriented Planning</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={16} color="var(--color-primary)" /> Vendor Coordination</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={16} color="var(--color-primary)" /> On-site Management</li>
                                    </ul>
                                    <Link to="/contact" className="btn btn-outline">Inquire Now</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
