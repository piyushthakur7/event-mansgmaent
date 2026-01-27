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
                            <div key={i} style={{ backgroundColor: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderRadius: '0', overflow: 'hidden' }}>
                                <div className="img-frame" style={{ height: '250px' }}>
                                    <img
                                        src={dest.image}
                                        alt={dest.category}
                                    />
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ marginBottom: '10px' }}>{dest.category}</h3>
                                    <p style={{ color: '#666', marginBottom: '20px' }}>{dest.description}</p>
                                    <Link to="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                        Plan a {dest.category} Wedding &rarr;
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
