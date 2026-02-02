import React from 'react';
import { services } from '../data';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    return (
        <>
            <div className="page-header">
                <h1>Our Services</h1>
                <p>Comprehensive Event Solutions</p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="service-card-wrapper">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="img-frame" style={{ flex: 1, minWidth: '300px', height: '400px' }}>
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-content">
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
