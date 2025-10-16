"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Particles from "./particles";
import GridBackground from './gridBackground';

export default function HomePage() {
    const [hoveredButton, setHoveredButton] = useState<'single' | 'multi' | null>(null);
    const [loading, setLoading] = useState(false);
    const [showDifficulty, setShowDifficulty] = useState(false);
    const [hoveredDifficulty, setHoveredDifficulty] = useState<string | null>(null);
    const router = useRouter();

    const handleSinglePlayer = () => {
        setShowDifficulty(true);
    };

    const handleMultiPlayer = () => {
        setLoading(true);
        setTimeout(() => {
            router.push("/multi-player");
        }, 800);
    };

    const handleSelectDifficulty = (mode: string) => {
        setLoading(true);
        setShowDifficulty(false);
        setTimeout(() => {
            router.push(`/single-player?mode=${mode}`);
        }, 800);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
            <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-120px) translateX(80px) rotate(180deg); 
            opacity: 0.4;
          }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

            <Particles />
            <GridBackground />

            {showDifficulty && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center z-50 animate-[fadeIn_0.3s_ease]">
                    <div className="relative max-w-lg w-full mx-4 animate-[zoomIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-pink-500/20 rounded-[3rem] blur-3xl animate-pulse"></div>

                        <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-8 rounded-[2.5rem] border-2 border-slate-700/50 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                            <div className="text-center mb-6">
                                <div className="inline-block mb-3 animate-[float_3s_ease-in-out_infinite]">
                                    <div className="text-5xl">🎯</div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2 tracking-tight">
                                    Choose Your Challenge
                                </h2>
                                <p className="text-indigo-300/80 text-base font-medium">
                                    Select difficulty level to begin
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 mb-6">
                                <button
                                    onClick={() => handleSelectDifficulty("easy")}
                                    onMouseEnter={() => setHoveredDifficulty("easy")}
                                    onMouseLeave={() => setHoveredDifficulty(null)}
                                    className="relative group overflow-hidden cursor-pointer rounded-2xl"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur-lg transition-all duration-300 ${hoveredDifficulty === "easy" ? "opacity-75 animate-pulse" : "opacity-50"
                                        }`}></div>

                                    <div className={`relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl px-6 py-4 border-2 transition-all duration-300 transform ${hoveredDifficulty === "easy"
                                        ? "border-green-300 scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                                        : "border-green-400/30"
                                        }`}>
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${hoveredDifficulty === "easy" ? "animate-[shimmer_1.5s_ease-in-out_infinite]" : ""
                                                }`}></div>
                                        </div>

                                        <div className="relative flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="text-left">
                                                    <div className="text-xl font-black text-white tracking-wide">Easy</div>
                                                    <div className="text-xs text-green-100 font-semibold opacity-90">Perfect for beginners</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                                                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleSelectDifficulty("normal")}
                                    onMouseEnter={() => setHoveredDifficulty("normal")}
                                    onMouseLeave={() => setHoveredDifficulty(null)}
                                    className="relative group overflow-hidden cursor-pointer rounded-2xl"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl blur-lg transition-all duration-300 ${hoveredDifficulty === "normal" ? "opacity-75 animate-pulse" : "opacity-50"
                                        }`}></div>

                                    <div className={`relative bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl px-6 py-4 border-2 transition-all duration-300 transform ${hoveredDifficulty === "normal"
                                        ? "border-yellow-300 scale-105 shadow-[0_0_30px_rgba(234,179,8,0.4)]"
                                        : "border-yellow-400/30"
                                        }`}>
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${hoveredDifficulty === "normal" ? "animate-[shimmer_1.5s_ease-in-out_infinite]" : ""
                                                }`}></div>
                                        </div>

                                        <div className="relative flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="text-left">
                                                    <div className="text-xl font-black text-white tracking-wide">Normal</div>
                                                    <div className="text-xs text-yellow-100 font-semibold opacity-90">Balanced challenge</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleSelectDifficulty("hard")}
                                    onMouseEnter={() => setHoveredDifficulty("hard")}
                                    onMouseLeave={() => setHoveredDifficulty(null)}
                                    className="relative group overflow-hidden cursor-pointer rounded-2xl"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r from-red-400 to-rose-600 rounded-2xl blur-lg transition-all duration-300 ${hoveredDifficulty === "hard" ? "opacity-75 animate-pulse" : "opacity-50"
                                        }`}></div>

                                    <div className={`relative bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl px-6 py-4 border-2 transition-all duration-300 transform ${hoveredDifficulty === "hard"
                                        ? "border-red-300 scale-105 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                                        : "border-red-400/30"
                                        }`}>
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${hoveredDifficulty === "hard" ? "animate-[shimmer_1.5s_ease-in-out_infinite]" : ""
                                                }`}></div>
                                        </div>

                                        <div className="relative flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="text-left">
                                                    <div className="text-xl font-black text-white tracking-wide">Hard</div>
                                                    <div className="text-xs text-red-100 font-semibold opacity-90">For experienced players</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                                <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>


                            <button
                                onClick={() => setShowDifficulty(false)}
                                className="w-full cursor-pointer py-3 text-indigo-400 hover:text-indigo-300 font-bold text-base transition-colors rounded-xl hover:bg-slate-800/50"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative z-10 flex flex-col items-center gap-16 px-8 animate-bounce-in">
                <div className="text-center">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] animate-pulse"></div>

                    <div className="relative">
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-[0_0_50px_rgba(99,102,241,0.6)] select-none">
                            RafficToe
                        </h1>

                        <p className="text-2xl md:text-3xl text-indigo-300 font-bold tracking-wide mb-2">
                            The Ultimate Tic-Tac-Toe Experience
                        </p>

                        <div className="flex items-center justify-center gap-3 mt-6">
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 animate-pulse"></div>
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <div className="flex flex-col gap-6 w-full max-w-sm">
                        <button
                            onClick={handleSinglePlayer}
                            onMouseEnter={() => setHoveredButton('single')}
                            onMouseLeave={() => setHoveredButton(null)}
                            className="group relative overflow-hidden rounded-3xl cursor-pointer"
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl transition-all duration-500 ${hoveredButton === 'single' ? 'opacity-80 animate-pulse' : 'opacity-60'
                                }`}></div>

                            <div className={`relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl px-2 md:px-6 py-2 md:py-6 shadow-2xl border-2 transition-all duration-300 transform ${hoveredButton === 'single'
                                ? 'border-cyan-300 scale-105 shadow-[0_0_40px_rgba(6,182,212,0.5)]'
                                : 'border-cyan-400/30 scale-100'
                                }`}>
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${hoveredButton === 'single' ? 'animate-[shimmer_1.5s_ease-in-out_infinite]' : ''
                                        }`} style={{ width: '100%' }}></div>
                                </div>

                                <div className="relative flex items-center justify-center gap-4">
                                    <div className={`text-2xl sm:text-4xl ${hoveredButton === 'single' ? 'scale-125 rotate-12' : 'scale-100'} transition-transform`}>
                                        <img src="/images/singleplayer_image.svg" alt="" className="w-10 h-10" />
                                    </div>

                                    <div className="text-left">
                                        <div className="text-2xl md:text-3xl font-black text-white tracking-wide drop-shadow-lg">
                                            {loading ? "Loading..." : "Singleplayer"}
                                        </div>
                                        {!loading && (
                                            <div className="text-sm text-cyan-100 font-semibold tracking-wide opacity-90">
                                                Challenge the AI
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={handleMultiPlayer}
                            onMouseEnter={() => setHoveredButton('multi')}
                            onMouseLeave={() => setHoveredButton(null)}
                            className="group relative overflow-hidden rounded-3xl cursor-pointer"
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl transition-all duration-500 ${hoveredButton === 'multi' ? 'opacity-80 animate-pulse' : 'opacity-60'
                                }`}></div>

                            <div className={`relative bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl px-2 md:px-6 py-2 md:py-6 shadow-2xl border-2 transition-all duration-300 transform ${hoveredButton === 'multi'
                                ? 'border-pink-300 scale-105 shadow-[0_0_40px_rgba(236,72,153,0.5)]'
                                : 'border-pink-400/30 scale-100'
                                }`}>
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${hoveredButton === 'multi' ? 'animate-[shimmer_1.5s_ease-in-out_infinite]' : ''
                                        }`} style={{ width: '100%' }}></div>
                                </div>

                                <div className="relative flex items-center justify-center gap-4">
                                    <div className={`text-2xl sm:text-4xl ${hoveredButton === 'multi' ? 'scale-125 rotate-12' : 'scale-100'} transition-transform`}>
                                        <img src="/images/multiplayer_image.svg" alt="" className="w-10 h-10" />
                                    </div>

                                    <div className="text-left">
                                        <div className="text-2xl md:text-3xl font-black text-white tracking-wide drop-shadow-lg">
                                            {loading ? "Loading..." : "Multiplayer"}
                                        </div>
                                        {!loading && (
                                            <div className="text-sm text-cyan-100 font-semibold tracking-wide opacity-90">
                                                Play with Friends
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <p className="text-indigo-400/60 text-sm font-medium tracking-wider">
                        Choose your game mode to begin
                    </p>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
    )
}