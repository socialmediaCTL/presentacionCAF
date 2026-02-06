import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { logo } from '../data/slidesData';

const Slide = ({ data, active, onOpenVideo }) => {
    const { type, title, highlight, text, image, overlay, subtitle, targetValue, steps, url, videoBtn } = data;
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (active && type === 'counter') {
            let start = 0;
            const end = targetValue;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [active, type, targetValue]);

    if (!active) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Ken Burns */}
            {image && (
                <img
                    src={image}
                    alt={title || subtitle}
                    className="absolute inset-0 w-full h-full object-cover animate-ken-burns scale-110"
                />
            )}

            {/* Overlays */}
            {overlay === 'dark' && <div className="absolute inset-0 bg-black/60" />}
            {overlay === 'standard' && <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />}

            {/* Full Black for Slide 1 per legacy design */}
            {type === 'portada' && <div className="absolute inset-0 bg-black/40" />}

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 text-center landscape-sm:py-4">
                {type === 'portada' ? (
                    <div className="flex flex-col items-center gap-12 landscape-sm:gap-4">
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="relative landscape-sm:scale-75"
                        >
                            <img src={logo} alt="Logo" className="w-[180px] md:w-[240px] drop-shadow-2xl" />
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[48px] md:text-[72px] font-black text-brand-yellow/20 select-none tracking-tighter">
                                VOLT
                            </div>
                        </motion.div>

                        <div className="space-y-4 landscape-sm:space-y-1">
                            <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-tight landscape-sm:text-3xl">
                                {title} <br />
                                <span className="text-brand-yellow drop-shadow-[0_0_20px_rgba(255,195,0,0.4)]">{highlight}</span>
                            </h1>
                            <p className="text-sm md:text-xl font-black tracking-[4px] md:tracking-[8px] text-white/80 uppercase landscape-sm:text-xs">
                                {subtitle}
                            </p>
                        </div>

                        {videoBtn && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onOpenVideo}
                                className="group flex items-center gap-4 px-8 py-4 bg-brand-yellow text-brand-black rounded-full font-black text-sm md:text-base uppercase tracking-widest shadow-[0_0_30px_rgba(255,195,0,0.3)] transition-all landscape-sm:px-6 landscape-sm:py-2 landscape-sm:text-xs"
                            >
                                <div className="bg-brand-black text-brand-yellow rounded-full p-2 group-hover:scale-110 transition-transform">
                                    <Play size={18} fill="currentColor" />
                                </div>
                                <span>Ver Intro (Cantabria)</span>
                            </motion.button>
                        )}
                    </div>
                ) : type === 'counter' ? (
                    <div className="space-y-6 flex flex-col items-center landscape-sm:space-y-2">
                        <div className="relative">
                            <div className="text-[120px] md:text-[250px] font-black text-brand-yellow drop-shadow-[0_0_50px_rgba(255,195,0,0.3)] leading-none landscape-sm:text-[80px]">
                                {count}%
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[150px] md:text-[300px] font-black -z-10">
                                AUDIT
                            </div>
                        </div>
                        <div className="space-y-4 max-w-4xl landscape-sm:space-y-1">
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider landscape-sm:text-2xl">{subtitle}</h2>
                            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium italic landscape-sm:text-sm">{text}</p>
                        </div>
                    </div>
                ) : type === 'roadmap' ? (
                    <div className="space-y-12 landscape-sm:space-y-4">
                        <h1 className="text-4xl md:text-7xl font-black uppercase text-white shadow-black/50 drop-shadow-lg landscape-sm:text-3xl">
                            {title} <span className="text-brand-yellow">{highlight}</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto landscape-sm:flex landscape-sm:flex-row landscape-sm:justify-center landscape-sm:gap-2">
                            {steps?.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex flex-col items-center gap-4 bg-white/5 p-8 rounded-[32px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-2 group landscape-sm:p-3 landscape-sm:rounded-xl landscape-sm:gap-1 landscape-sm:flex-1"
                                >
                                    <div className="w-20 h-20 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center text-4xl font-black group-hover:rotate-12 transition-transform shadow-lg landscape-sm:w-10 landscape-sm:h-10 landscape-sm:text-xl">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-yellow uppercase tracking-tight landscape-sm:text-xs">{step.title}</h3>
                                    <p className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors uppercase leading-tight landscape-sm:hidden">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="pt-8 landscape-sm:pt-2">
                            <div className="text-2xl md:text-4xl font-black text-white/40 mb-6 font-mono tracking-tighter uppercase landscape-sm:text-lg landscape-sm:mb-2">{url}</div>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`https://${url}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-12 py-5 bg-brand-yellow text-brand-black text-xl font-black rounded-full shadow-[0_0_50px_rgba(255,195,0,0.2)] hover:shadow-[0_0_70px_rgba(255,195,0,0.4)] inline-block transition-all uppercase tracking-[4px] landscape-sm:px-6 landscape-sm:py-2 landscape-sm:text-xs"
                            >
                                Visitar Web
                            </motion.a>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8 max-w-5xl mx-auto landscape-sm:space-y-2">
                        <h1 className="text-5xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter landscape-sm:text-4xl">
                            {title && <span className="block text-white mb-2">{title}</span>}
                            <span className="text-brand-yellow drop-shadow-[0_0_30px_rgba(255,195,0,0.4)] landscape-sm:text-4xl">{highlight}</span>
                        </h1>
                        <div className="h-1 w-24 bg-brand-yellow mx-auto rounded-full landscape-sm:w-12" />
                        <p className="text-xl md:text-4xl font-black max-w-3xl mx-auto leading-tight text-white/90 uppercase tracking-tight landscape-sm:text-sm">
                            {text}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Slide;
