import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlideIndicators = ({ slides, currentSlide, onSlideChange }) => {
    const [hoveredSlide, setHoveredSlide] = useState(null);

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className="relative"
                    onMouseEnter={() => setHoveredSlide(index)}
                    onMouseLeave={() => setHoveredSlide(null)}
                >
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onSlideChange(index)}
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${currentSlide === index
                                ? 'bg-brand-yellow border-brand-yellow text-brand-black scale-110'
                                : 'bg-transparent border-white/30 text-white/60 hover:border-brand-yellow hover:text-brand-yellow'
                            }`}
                    >
                        {index + 1}
                    </motion.button>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {hoveredSlide === index && (
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap"
                            >
                                <div className="bg-brand-black/95 backdrop-blur-md border border-brand-yellow/30 px-4 py-2 rounded-lg shadow-xl">
                                    <p className="text-white text-sm font-bold uppercase tracking-wide">
                                        {slide.title || slide.subtitle || `Slide ${index + 1}`}
                                        {slide.highlight && (
                                            <span className="text-brand-yellow ml-1">{slide.highlight}</span>
                                        )}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default SlideIndicators;
