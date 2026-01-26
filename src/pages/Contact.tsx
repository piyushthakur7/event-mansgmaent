import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        location: '',
        budget: '',
        guests: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send to backend or email service
        alert(`Thank you ${formData.name}! We will contact you shortly.`);
        console.log(formData);
    };

    return (
        <>
            <div style={{ backgroundColor: 'var(--color-primary)', padding: '100px 0 60px', textAlign: 'center', color: '#fff' }}>
                <h1 style={{ color: '#fff' }}>Contact Us</h1>
                <p>Start planning your dream event today</p>
            </div>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

                    {/* Contact Info */}
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
                        <p style={{ marginBottom: '2rem', color: '#666' }}>
                            We'd love to hear from you. Fill out the form or reach us directly via phone or email.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                                    <Phone size={24} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0 }}>Phone</h4>
                                    <p style={{ color: '#666' }}>{contactInfo.phone}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                                    <Mail size={24} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0 }}>Email</h4>
                                    <p style={{ color: '#666' }}>{contactInfo.email}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                                    <MapPin size={24} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0 }}>Office</h4>
                                    <p style={{ color: '#666' }}>{contactInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ marginBottom: '20px' }}>Inquiry Form</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                                    <input required name="name" type="text" placeholder="Your Name" onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Phone</label>
                                    <input required name="phone" type="tel" placeholder="Your Phone" onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                                <input required name="email" type="email" placeholder="Your Email" onChange={handleChange} style={inputStyle} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Event Type</label>
                                    <select name="eventType" onChange={handleChange} style={inputStyle}>
                                        <option value="">Select Type</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Corporate">Corporate</option>
                                        <option value="Social">Social Gathering</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Event Date</label>
                                    <input name="date" type="date" onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Est. Budget</label>
                                    <input name="budget" type="text" placeholder="e.g. 5 Lakhs" onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>No. of Guests</label>
                                    <input name="guests" type="number" placeholder="e.g. 200" onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Location Preference</label>
                                <input name="location" type="text" placeholder="City or Venue" onChange={handleChange} style={inputStyle} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', fontWeight: 500 }}>Message / Requirements</label>
                                <textarea name="message" rows={4} placeholder="Tell us more about your event..." onChange={handleChange} style={{ ...inputStyle, fontFamily: 'inherit' }}></textarea>
                            </div>

                            <button type="submit" className="btn" style={{ width: '100%' }}>Send Inquiry</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
};

export default Contact;
