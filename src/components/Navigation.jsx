import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ current, total, onPrev, onNext }) => {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-50">
            <button
                onClick={onPrev}
                disabled={current === 0}
                className="text-white hover:text-brand-yellow transition-colors disabled:opacity-20 disabled:cursor-not-allowed group p-2"
                aria-label="Anterior"
            >
                <ChevronLeft size={32} className="group-active:scale-95 transition-transform" />
            </button>

            <div className="flex flex-col items-center">
                <span className="text-white font-black text-xl tracking-widest leading-none">
                    {String(current + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-[2px] bg-brand-yellow/30 my-1 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-yellow transition-all duration-500"
                        style={{ width: `${((current + 1) / total) * 100}%` }}
                    />
                </div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">
                    Slide
                </span>
            </div>

            <button
                onClick={onNext}
                disabled={current === total - 1}
                className="text-white hover:text-brand-yellow transition-colors disabled:opacity-20 disabled:cursor-not-allowed group p-2"
                aria-label="Siguiente"
            >
                <ChevronRight size={32} className="group-active:scale-95 transition-transform" />
            </button>
        </div>
    );
};

export default Navigation;
