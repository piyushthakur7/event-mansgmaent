import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <div className="page-header">
                <h1>About Us</h1>
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

            {/* Vision Section */}
            <section className="section" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="container">
                    <div className="editorial-grid">
                        <div className="img-frame" style={{ aspectRatio: '1/1' }}>
                            <img src="/gallery/image_12.jpg" alt="Our Vision" />
                        </div>
                        <div>
                            <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '15px', color: '#888' }}>Our Vision</span>
                            <h2 style={{ marginBottom: '25px' }}>Crafting Moments into Memories</h2>
                            <p style={{ marginBottom: '20px', color: '#666' }}>
                                At Tirupati Event Management, we see ourselves as more than just planners; we are architects of joy.
                                Our vision is to transform the chaotic process of event planning into a seamless, artistic journey for our clients.
                            </p>
                            <p style={{ color: '#666' }}>
                                We strive to set new benchmarks in the industry by combining traditional Indian hospitality with global standards of luxury and management.
                                Every event we touch is treated as a unique canvas, painted with the colors of your desires and our expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2>Why Choose Tirupati?</h2>
                        <p className="text-muted">The pillars that define our legacy</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div style={{ padding: '30px', border: '1px solid #eee', backgroundColor: '#fff' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Unmatched Attention to Detail</h3>
                            <p style={{ color: '#666' }}>
                                We believe that perfection lies in the details. From the precise shade of the table linens to the timing of the entry music,
                                nothing is left to chance. Our team meticulously plans every micro-moment of your event.
                            </p>
                        </div>
                        <div style={{ padding: '30px', border: '1px solid #eee', backgroundColor: '#fff' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Personalized Experience</h3>
                            <p style={{ color: '#666' }}>
                                No two weddings are alike, and neither are our plans. We take the time to understand your story, your tastes, and your dreams,
                                curating a bespoke experience that is authentically yours.
                            </p>
                        </div>
                        <div style={{ padding: '30px', border: '1px solid #eee', backgroundColor: '#fff' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Vendor Network</h3>
                            <p style={{ color: '#666' }}>
                                Over a decade, we have cultivated relationships with the finest florists, caterers, and decorators in the industry.
                                Our clients gain exclusive access to premium services and negotiated rates that others simply cannot match.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section" style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '30px' }}>Ready to Begin Your Journey?</h2>
                    <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Let us handle the logistics so you can focus on the celebration. Contact us today for a consultation.
                    </p>
                    <a href="/contact" className="btn" style={{ borderColor: '#fff', color: '#fff' }}>Get in Touch</a>
                </div>
            </section>
        </>
    );
};

export default About;
