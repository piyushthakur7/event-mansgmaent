import React from 'react';
import { destinations } from '../data';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
    return (
        <>
            <div className="page-header">
                <h1>Featured Destinations</h1>
                <p>Curated locations for your perfect wedding</p>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {destinations.map((dest, i) => (
                            <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #f0f0f0', borderRadius: '0', overflow: 'hidden' }}>
                                <div className="img-frame" style={{ height: '400px' }}>
                                    <img
                                        src={dest.image}
                                        alt={dest.category}
                                    />
                                </div>
                                <div style={{ padding: '40px 30px', textAlign: 'center' }}>
                                    <h3 style={{ marginBottom: '15px', fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>{dest.category}</h3>
                                    <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>{dest.description}</p>
                                    <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-block', fontSize: '0.8rem', padding: '12px 30px' }}>
                                        Explore {dest.category}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Destinations;
