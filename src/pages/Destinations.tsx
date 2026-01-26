import React from 'react';
import { destinations } from '../data';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
    return (
        <>
            <div style={{ backgroundColor: 'var(--color-secondary)', padding: '120px 0 60px', textAlign: 'center' }}>
                <h1 className="text-primary">Featured Destinations</h1>
                <p>Curated locations for your perfect wedding</p>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {destinations.map((dest, i) => (
                            <div key={i} style={{ backgroundColor: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                                <div style={{ height: '250px', overflow: 'hidden' }}>
                                    <img
                                        src={dest.image}
                                        alt={dest.category}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ marginBottom: '10px' }}>{dest.category}</h3>
                                    <p style={{ color: '#666', marginBottom: '20px' }}>{dest.description}</p>
                                    <Link to="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Plan a {dest.category} Wedding &rarr;</Link>
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
