import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScriptPanel = ({ isVisible, text }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40"
                >
                    <div className="bg-brand-black/90 backdrop-blur-2xl border border-brand-yellow/30 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                            <span className="text-brand-yellow text-xs font-black uppercase tracking-[3px]">Narración Sugerida</span>
                        </div>
                        <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic opacity-90">
                            "{text}"
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScriptPanel;
