import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { services, destinations, testimonials } from '../data';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("/assets/hero_pexels.jpg") no-repeat center center/cover',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="container">
                    {/* Button only, pushed to bottom via absolute positioning in CSS or inline */}
                    <div style={{ position: 'absolute', bottom: '10%', left: 0, right: 0 }}>
                        <Link to="/contact" className="btn" style={{ borderColor: '#fff', color: '#fff' }}>
                            Plan Your Event
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section - Editorial Split */}
            <section className="section-padding">
                <div className="container">
                    <div className="editorial-grid">
                        <div>
                            <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '20px', color: '#888' }}>
                                Since 2010
                            </span>
                            <h2 style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                We Curate <span style={{ fontStyle: 'italic', fontFamily: 'serif' }}>Timeless</span> Celebrations
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                                Tirupati Event Management isn't just about logistics; it's about storytelling.
                                We believe that every wedding is a unique narrative waiting to be told.
                                From the intimate exchange of vows to the grandest of receptions, we orchestrate every detail with precision and grace.
                            </p>
                            <Link to="/about" style={{ borderBottom: '1px solid #000', paddingBottom: '2px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Read Our Story
                            </Link>
                        </div>
                        <div className="img-frame">
                            <img src="/assets/image2.png" alt="Decoration Detail" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services - Zig Zag Layout */}
            <section style={{ backgroundColor: '#F9F9F9', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: '#888' }}>Our Expertise</span>
                        <h2 style={{ marginTop: '10px' }}>Designed for You</h2>
                    </div>

                    {/* Service 1 */}
                    <div className="editorial-grid">
                        <div className="img-frame" style={{ height: '400px' }}>
                            {/* Using Unsplash for variety, fallback to local if needed */}
                            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" alt="Wedding Planning" style={{ height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <h3>Full Wedding Planning</h3>
                            <p style={{ color: '#666', marginBottom: '20px' }}>
                                A comprehensive service for couples who want a stress-free experience.
                                We handle venue selection, vendor management, design, and execution, ensuring you can simply enjoy your special moments.
                            </p>
                            <Link to="/services" className="btn">Discover More</Link>
                        </div>
                    </div>

                    {/* Service 2 - Reversed */}
                    <div className="editorial-grid reversed">
                        <div className="img-frame" style={{ height: '400px' }}>
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" alt="Destination Weddings" style={{ height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <h3>Destination Weddings</h3>
                            <p style={{ color: '#666', marginBottom: '20px' }}>
                                From the palaces of Rajasthan to the beaches of Goa. We specialize in logistical mastery for destination weddings,
                                managing travel, accommodation, and local experiences for your guests.
                            </p>
                            <Link to="/services" className="btn">View Destinations</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Destinations - Clean Grid */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px' }}>
                        <div>
                            <h2 style={{ margin: 0 }}>Destinations</h2>
                        </div>
                        <Link to="/destinations" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            See All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {destinations.slice(0, 3).map((dest, i) => (
                            <div key={i} className="img-frame" style={{ cursor: 'pointer' }}>
                                <div style={{ height: '400px', marginBottom: '20px', overflow: 'hidden' }}>
                                    <img
                                        src={dest.image}
                                        alt={dest.category}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{dest.category}</h3>
                                    <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>{dest.description.substring(0, 60)}...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Minimal */}
            <section className="section-padding" style={{ backgroundColor: '#1a1a1a', color: '#fff', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Star size={30} fill="#fff" color="#fff" style={{ margin: '0 auto 30px' }} />
                    <h2 style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '2.5rem', lineHeight: '1.4', marginBottom: '40px', color: '#fff' }}>
                        "The team went above and beyond. It wasn't just a wedding; it was a masterpiece of coordination and beauty."
                    </h2>
                    <div>
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Priya & Rahul</p>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>Married in Udaipur</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
