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
                    <div className="service-card-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {services.map((service, index) => (
                            <div key={service.id} style={{
                                display: 'flex',
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                overflow: 'hidden',
                                marginBottom: '60px'
                            }}>
                                <div style={{ flex: 1, height: '500px' }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1, padding: '60px' }}>
                                    <h2 style={{ marginBottom: '25px', color: 'var(--color-primary)', fontSize: '2.5rem' }}>{service.title}</h2>
                                    <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>{service.description}</p>
                                    <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
                                        <li style={{ marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.05rem' }}>
                                            <CheckCircle size={20} color="var(--color-primary)" /> {service.title === "Corporate Events" ? "Brand-Aligned Execution" : "Custom Thematic Decor"}
                                        </li>
                                        <li style={{ marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.05rem' }}>
                                            <CheckCircle size={20} color="var(--color-primary)" /> {service.title === "Corporate Events" ? "Seamless Logistics" : "Vendor & Guest Management"}
                                        </li>
                                        <li style={{ marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.05rem' }}>
                                            <CheckCircle size={20} color="var(--color-primary)" /> {service.title === "Corporate Events" ? "Technology & AV Support" : "On-Day Coordination"}
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>Start Planning</Link>
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
