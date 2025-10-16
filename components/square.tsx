"use client";

type SquareProps = {
    value: string;
    onClick: () => void;
    highlight?: boolean;
    disabled: boolean
};

export default function Square({ value, onClick, highlight = false, disabled = false }: SquareProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        relative w-[70px] md:w-[90px] h-[70px] md:h-[90px] rounded-3xl font-black text-6xl
        transition-all duration-500 transform
        backdrop-blur-sm
        ${!value && !disabled ? 'hover:scale-110 hover:rotate-3 cursor-pointer' : 'cursor-default'}
        ${highlight
                    ? 'bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 shadow-[0_0_50px_rgba(251,191,36,0.8)] scale-110 animate-pulse'
                    : value
                        ? 'bg-gradient-to-br from-slate-700/90 to-slate-900/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                        : 'bg-gradient-to-br from-slate-700/50 to-slate-900/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.4)]'
                }
        ${value === 'X' ? 'text-cyan-400' : ''}
        ${value === 'O' ? 'text-pink-400' : ''}
        border-2 ${highlight ? 'border-yellow-300' : value ? 'border-slate-600/50' : 'border-slate-600/30 hover:border-indigo-500/60'}
      `}
        >
            <span className={`
        relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
        ${value ? 'animate-[zoomIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)]' : ''}
      `}>
                {value}
            </span>
            {!value && !disabled && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-40 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-500/30 blur-xl"></div>
                </div>
            )}
            {highlight && (
                <>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 animate-ping"></div>
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-yellow-400/30 to-orange-500/30 blur-xl"></div>
                </>
            )}
        </button>
    )
}