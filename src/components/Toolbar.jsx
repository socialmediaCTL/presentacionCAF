import React from 'react';
import { Maximize, Minimize, FileText } from 'lucide-react';

const Toolbar = ({ onToggleFullscreen, isFullscreen, onToggleScript, showScript }) => {
    return (
        <div className="absolute top-6 left-0 right-0 px-10 flex justify-between items-center z-50">
            <button
                onClick={onToggleFullscreen}
                className="flex items-center gap-2 px-6 py-2 bg-brand-yellow/10 hover:bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 rounded-full transition-all backdrop-blur-md uppercase font-black text-xs tracking-widest"
            >
                {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
                <span>{isFullscreen ? 'Salir' : 'Pantalla Completa'}</span>
            </button>

            <button
                onClick={onToggleScript}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all backdrop-blur-md uppercase font-black text-xs tracking-widest border ${showScript
                        ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                        : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                    }`}
            >
                <FileText size={14} />
                <span>Script</span>
            </button>
        </div>
    );
};

export default Toolbar;
