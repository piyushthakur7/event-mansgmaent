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
            <div className="page-header" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <h1 style={{ color: '#fff' }}>Contact Us</h1>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Start planning your dream event today</p>
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
                        <form onSubmit={handleSubmit}>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input required name="name" type="text" placeholder="Your Name" onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input required name="phone" type="tel" placeholder="Your Phone" onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input required name="email" type="email" placeholder="Your Email" onChange={handleChange} className="form-control" />
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Event Type</label>
                                    <select name="eventType" onChange={handleChange} className="form-select">
                                        <option value="">Select Type</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Corporate">Corporate</option>
                                        <option value="Social">Social Gathering</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Event Date</label>
                                    <input name="date" type="date" onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Est. Budget</label>
                                    <input name="budget" type="text" placeholder="e.g. 5 Lakhs" onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">No. of Guests</label>
                                    <input name="guests" type="number" placeholder="e.g. 200" onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Location Preference</label>
                                <input name="location" type="text" placeholder="City or Venue" onChange={handleChange} className="form-control" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message / Requirements</label>
                                <textarea name="message" rows={4} placeholder="Tell us more about your event..." onChange={handleChange} className="form-textarea"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
