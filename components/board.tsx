"use client";

import Square from "./square";

type BoardProps = {
    squares: string[];
    onClick: (i: number) => void;
    winningLine?: number[];
    disabled: boolean;
};

export default function Board({ squares, onClick, winningLine, disabled=false }: BoardProps) {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative grid grid-cols-3 gap-6 w-[300px] md:w-[380px] h-[320px] md:h-[380px] p-8 rounded-[3rem] bg-gradient-to-br from-slate-800/80 to-slate-950/80 shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-slate-700/50 backdrop-blur-xl">
                {squares.map((value, i) => (
                    <Square
                        key={i}
                        value={value}
                        onClick={() => onClick(i)}
                        highlight={winningLine?.includes(i) ?? false}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
}