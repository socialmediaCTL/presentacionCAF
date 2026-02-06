import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slidesData, narratorScripts } from './data/slidesData';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import VideoModal from './components/VideoModal';
import ScriptPanel from './components/ScriptPanel';
import SlideIndicators from './components/SlideIndicators';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showScript, setShowScript] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'f' || e.key === 'F') toggleFullscreen();
            if (e.key === 's' || e.key === 'S') setShowScript(prev => !prev);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide < slidesData.length - 1) setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div className="relative w-full h-screen bg-brand-black overflow-hidden font-sans">
            <Toolbar
                isFullscreen={isFullscreen}
                onToggleFullscreen={toggleFullscreen}
                showScript={showScript}
                onToggleScript={() => setShowScript(!showScript)}
            />

            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    <Slide
                        key={currentSlide}
                        data={slidesData[currentSlide]}
                        active={true}
                        onOpenVideo={() => setIsVideoModalOpen(true)}
                    />
                </AnimatePresence>
            </div>

            <ScriptPanel isVisible={showScript} text={narratorScripts[currentSlide]} />

            <Navigation
                current={currentSlide}
                total={slidesData.length}
                onPrev={prevSlide}
                onNext={nextSlide}
            />

            <SlideIndicators
                slides={slidesData}
                currentSlide={currentSlide}
                onSlideChange={setCurrentSlide}
            />

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                videoId="7A_c0vHq8mU"
            />

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-yellow rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-brand-yellow rounded-full blur-[120px]"
                />

                {/* Animated Curves (SVG inspired from legacy) */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0 50 Q 25 25, 50 50 T 100 50"
                        stroke="#FFC300"
                        strokeWidth="0.1"
                        fill="none"
                        animate={{ d: ["M0 50 Q 25 30, 50 50 T 100 50", "M0 50 Q 25 70, 50 50 T 100 50", "M0 50 Q 25 30, 50 50 T 100 50"] }}
                        transition={{ duration: 20, repeat: Infinity }}
                    />
                </svg>
            </div>
        </div>
    );
}

export default App;
