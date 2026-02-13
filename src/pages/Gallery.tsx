import React, { useState } from 'react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type Album = {
    id: string;
    title: string;
    cover: string;
    count: number;
    images: string[];
};

const albums: Album[] = [
    {
        id: 'trade-fair',
        title: 'India International Trade Fair',
        cover: '/gallery/india_trade/trade_1.png',
        count: 8,
        images: Array.from({ length: 8 }, (_, i) => `/gallery/india_trade/trade_${i + 1}.png`)
    },
    {
        id: 'armed-forces',
        title: 'Armed Forces Flag Day Event 2025',
        cover: '/gallery/image_1.jpg',
        count: 58,
        images: Array.from({ length: 58 }, (_, i) => `/gallery/image_${i + 1}.jpg`)
    }
];

const Gallery: React.FC = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="page-header">
                <h1>Our Portfolio</h1>
                <p>A glimpse into our magical events</p>
            </div>

            <section className="section">
                <div className="container">

                    {!selectedAlbum ? (
                        // Album Grid View
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                            {albums.map((album) => (
                                <motion.div
                                    key={album.id}
                                    whileHover={{ y: -5 }}
                                    onClick={() => setSelectedAlbum(album)}
                                    style={{
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={album.cover}
                                            alt={album.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        />
                                        <div style={{
                                            position: 'absolute', bottom: '10px', right: '10px',
                                            backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff',
                                            padding: '5px 10px', borderRadius: '20px',
                                            display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem'
                                        }}>
                                            <ImageIcon size={14} /> {album.count} Photos
                                        </div>
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#333' }}>{album.title}</h3>
                                        <p style={{ color: '#888', fontSize: '0.9rem' }}>View Album</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        // Single Album View
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <button
                                onClick={() => setSelectedAlbum(null)}
                                className="btn"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    marginBottom: '30px', padding: '10px 20px', fontSize: '0.9rem'
                                }}
                            >
                                <ArrowLeft size={16} /> Back to Albums
                            </button>

                            <h2 style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                                {selectedAlbum.title}
                            </h2>

                            <div className="gallery-grid" style={{ columns: '3 300px', gap: '20px' }}>
                                {selectedAlbum.images.map((src, i) => (
                                    <div
                                        key={i}
                                        style={{ breakInside: 'avoid', marginBottom: '20px', cursor: 'pointer', overflow: 'hidden', borderRadius: '8px' }}
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            src={src}
                                            alt="Gallery"
                                            style={{ width: '100%', display: 'block' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '20px'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Full View" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }} />
                    <button
                        style={{
                            position: 'absolute', top: '30px', right: '30px',
                            background: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer'
                        }}
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    );
};

export default Gallery;
