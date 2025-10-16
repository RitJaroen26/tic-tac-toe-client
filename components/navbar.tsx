"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const router = useRouter();

    return (
        <>
            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

            <nav className="bg-slate-900 backdrop-blur-xl border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => router.push('/')}
                            className="relative group flex items-center gap-3"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative flex items-center gap-3">
                                <div className="text-4xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                                    🎮
                                </div>
                                <div>
                                    <h1 className="hidden md:block text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                                        RafficToe
                                    </h1>
                                </div>
                            </div>
                        </button>

                        <div className="hidden md:flex items-center">
                            <NavLink
                                label="Home"
                                active={activeLink === "home"}
                                onClick={() => router.push('/')}
                            />
                            <NavLink
                                label="Leaderboard"
                                icon="🏆"
                                active={activeLink === "leaderboard"}
                                onClick={() => router.push('/dashboard')}
                            />
                            <NavLink
                                label="Login"
                                icon="🏆"
                                active={activeLink === "login"}
                                onClick={() => router.push('/login')}
                            />
                            <NavLink
                                label="My Profile"
                                icon="🏆"
                                active={activeLink === "profile"}
                                onClick={() => router.push('/my-profile')}
                            />
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden relative group p-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col gap-1.5 w-7">
                                <span className={`block h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                    <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col gap-3 pb-4">
                            <MobileNavLink
                                label="Home"
                                active={activeLink === "home"}
                                onClick={() => router.push('/')}
                            />
                            <MobileNavLink
                                label="Leaderboard"
                                icon="🏆"
                                active={activeLink === "leaderboard"}
                                onClick={() => router.push('/dashboard')}
                            />
                            <MobileNavLink
                                label="Login"
                                icon="🏆"
                                active={activeLink === "login"}
                                onClick={() => router.push('login')}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

function NavLink({ label, icon, active, onClick }: { label: string; icon?: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="relative group px-5 py-2.5 rounded-xl transition-all duration-300"
        >
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${active
                ? 'bg-gradient-to-r from-indigo-600/40 to-purple-600/40 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                : 'bg-slate-800/0 group-hover:bg-slate-800/60'
                }`}></div>

            <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
            </div>

            {active && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 rounded-full animate-[glow-pulse_2s_ease-in-out_infinite]"></div>
            )}

            <div className="relative flex items-center gap-2">
                {icon && <span className="text-lg">{icon}</span>}
                <span className={`font-bold text-sm tracking-wide transition-colors ${active
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300'
                    : 'text-slate-300 group-hover:text-white'
                    }`}>
                    {label}
                </span>
            </div>
        </button>
    );
}

function MobileNavLink({ label, icon, active, onClick }: { label: string; icon?: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="relative group overflow-hidden rounded-2xl"
        >
            <div className={`absolute -inset-1 rounded-2xl blur-lg transition-all duration-300 ${active
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 opacity-60'
                : 'bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-40'
                }`}></div>

            <div className={`relative px-6 py-4 rounded-2xl border transition-all duration-300 ${active
                ? 'bg-gradient-to-r from-indigo-600/50 to-purple-600/50 border-indigo-400/30'
                : 'bg-slate-800/50 border-slate-700/30 group-hover:bg-slate-800/80'
                }`}>
                <div className="flex items-center gap-3">
                    {icon && <span className="text-2xl">{icon}</span>}
                    <span className={`font-bold text-lg ${active ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                        {label}
                    </span>
                </div>
            </div>
        </button>
    );
}