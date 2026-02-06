import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoId }) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        console.log('🎬 VideoModal state changed:', { isOpen, videoId });
        if (isOpen) {
            console.log('✅ Modal is OPEN');
            console.log('📹 Video ID:', videoId);
            console.log('🔗 Full URL:', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`);
            setError(false);
            setLoading(true);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            console.log('❌ Modal is CLOSED');
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, videoId]);

    if (!isOpen) {
        console.log('🚫 Modal not rendering (isOpen = false)');
        return null;
    }

    console.log('🎨 Rendering VideoModal...');

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                onClick={() => {
                    console.log('🖱️ Background clicked - closing modal');
                    onClose();
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,195,0,0.2)]"
                    onClick={e => {
                        console.log('🖱️ Modal content clicked - preventing close');
                        e.stopPropagation();
                    }}
                >
                    <button
                        onClick={() => {
                            console.log('❌ Close button clicked');
                            onClose();
                        }}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-brand-yellow text-white hover:text-brand-black rounded-full transition-all"
                        aria-label="Cerrar video"
                    >
                        <X size={24} />
                    </button>

                    {/* Loading indicator */}
                    {loading && !error && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-5">
                            <div className="text-center space-y-4">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-brand-yellow mx-auto"></div>
                                <p className="text-white font-bold">Cargando video...</p>
                            </div>
                        </div>
                    )}

                    {error ? (
                        <div className="w-full h-full flex items-center justify-center text-white">
                            <div className="text-center space-y-4">
                                <p className="text-xl font-bold">❌ Error al cargar el video</p>
                                <p className="text-sm text-gray-400">Video ID: {videoId}</p>
                                <a
                                    href={`https://www.youtube.com/watch?v=${videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 bg-brand-yellow text-brand-black rounded-full font-bold hover:scale-105 transition-transform"
                                    onClick={() => console.log('🔗 Opening YouTube directly')}
                                >
                                    Ver en YouTube
                                </a>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                            onLoad={() => {
                                console.log('✅ Iframe loaded successfully');
                                setLoading(false);
                            }}
                            onError={(e) => {
                                console.error('❌ Iframe error:', e);
                                setError(true);
                                setLoading(false);
                            }}
                        ></iframe>
                    )}

                    {/* Debug info (remove in production) */}
                    <div className="absolute bottom-2 left-2 text-xs text-white/50 bg-black/50 px-2 py-1 rounded">
                        Video ID: {videoId} | Open: {isOpen ? 'YES' : 'NO'}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default VideoModal;
