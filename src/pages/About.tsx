import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <div style={{ backgroundColor: 'var(--color-secondary)', padding: '120px 0 60px', textAlign: 'center' }}>
                <h1 className="text-primary">About Us</h1>
                <p>Our Story, Philosophy, and Team</p>
            </div>
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '20px' }}>Designing Dreams Since 2010</h2>
                        <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#555' }}>
                            Tirupati Event Management began with a simple passion: to bring families together and celebrate love in the most magnificent way possible.
                            Over the years, we have grown into one of India's most trusted event planning companies, known for our impeccable execution and personalized approach.
                        </p>
                        <p style={{ marginBottom: '40px', fontSize: '1.1rem', color: '#555' }}>
                            Our philosophy is simple: Listen, Plan, and Deliver. We believe that every event should be a reflection of the client's personality.
                            Whether it's a traditional wedding or a modern corporate gala, we infuse every detail with elegance and creativity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team/Credibility Section placeholder */}
            <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container text-center">
                    <h2>Our Team</h2>
                    <p className="text-muted" style={{ marginBottom: '40px' }}>Meet the experts behind your perfect event</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{ backgroundColor: '#fff', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#ddd', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                                <h4>Team Member {i}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#777' }}>Event Specialist</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
