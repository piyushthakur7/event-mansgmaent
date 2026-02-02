import React, { useState } from 'react';

const galleryImages = Array.from({ length: 58 }, (_, i) => `/gallery/image_${i + 1}.jpg`);

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="page-header">
                <h1>Our Portfolio</h1>
                <p>A glimpse into our magical events</p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="gallery-grid" style={{ columns: '3 300px', gap: '20px' }}>
                        {galleryImages.map((src, i) => (
                            <div key={i} style={{ breakInside: 'avoid', marginBottom: '20px', cursor: 'pointer' }} onClick={() => setSelectedImage(src)}>
                                <img src={src} alt="Gallery" style={{ width: '100%', borderRadius: '4px', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '20px'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Full View" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
            )}
        </>
    );
};

export default Gallery;
