"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";

function ClientOnly({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return <>{children}</>;
}

export default function Navbar() {
    const { username, setUsername } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUsername(null);
    };

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
                @keyframes slideDown {
                    0% { 
                        opacity: 0; 
                        transform: translateY(-10px) scale(0.95); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes ripple {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
      `}</style>

            <nav className="relative bg-slate-900 backdrop-blur-xl border-b border-slate-700/50 z-50">
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
                                active={activeLink === "leaderboard"}
                                onClick={() => router.push('/dashboard')}
                            />

                            <ClientOnly>
                                {username ? (
                                    <div className="relative ml-2 dropdown-container">
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="relative cursor-pointer group px-6 py-3 rounded-2xl transition-all duration-300 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
                                            <div className="relative flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-lg shadow-lg">
                                                    🎮
                                                </div>
                                                <span className="font-black text-white text-sm tracking-wide">{username}</span>
                                                <svg
                                                    className={`w-4 h-4 text-white/80 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        {isDropdownOpen && (
                                            <>
                                                <div className="fixed inset-0 z-[90]" onClick={() => setIsDropdownOpen(false)}></div>

                                                <div className="absolute right-0 mt-3 w-72 z-[100] animate-[slideDown_0.3s_ease-out]">
                                                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-3xl blur-2xl animate-pulse"></div>

                                                    <div className="relative bg-gradient-to-br from-slate-800/98 to-slate-900/98 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-slate-700/50 overflow-hidden">
                                                        <div className="relative px-6 py-5 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/20 border-b border-slate-700/50">
                                                            <div className="flex items-center gap-4">
                                                                <div className="relative">
                                                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full blur-md animate-pulse"></div>
                                                                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-xl border-2 border-white/20">
                                                                        🎮
                                                                    </div>
                                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-black text-white text-base mb-1">{username}</div>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                                                                            <span className="text-xs font-bold text-yellow-400">⭐ Level 42</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="py-3 px-2">
                                                            <button
                                                                className="w-full cursor-pointer text-left px-4 py-3.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-200 flex items-center gap-3 group relative overflow-hidden"
                                                                onClick={() => {
                                                                    setIsDropdownOpen(false);
                                                                    router.push('/my-profile');
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/20 to-indigo-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-200">
                                                                    <span className="text-xl">👤</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-bold text-sm">My Profile</div>
                                                                    <div className="text-xs text-slate-400">View and edit profile</div>
                                                                </div>
                                                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </button>

                                                            <button
                                                                className="w-full cursor-pointer text-left px-4 py-3.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-200 flex items-center gap-3 group relative overflow-hidden"
                                                                onClick={() => {
                                                                    setIsDropdownOpen(false);
                                                                    router.push('/settings');
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/20 to-indigo-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                                <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-200">
                                                                    <span className="text-xl">⚙️</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-bold text-sm">Settings</div>
                                                                    <div className="text-xs text-slate-400">Preferences & more</div>
                                                                </div>
                                                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </button>

                                                            <button
                                                                className="w-full cursor-pointer text-left px-4 py-3.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-200 flex items-center gap-3 group relative overflow-hidden"
                                                                onClick={() => {
                                                                    setIsDropdownOpen(false);
                                                                    router.push('/achievements');
                                                                }}
                                                            >
                                                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/20 to-indigo-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                                <div className="w-10 h-10 rounded-xl bg-yellow-600/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-200">
                                                                    <span className="text-xl">🏆</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-bold text-sm">Achievements</div>
                                                                    <div className="text-xs text-slate-400">View your progress</div>
                                                                </div>
                                                                <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* Logout Section */}
                                                        <div className="border-t border-slate-700/50 p-2">
                                                            <button
                                                                className="w-full cursor-pointer text-left px-4 py-3.5 rounded-xl text-red-400 hover:bg-red-900/30 transition-all duration-200 flex items-center gap-3 group relative overflow-hidden"
                                                                onClick={handleLogout}
                                                            >
                                                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                                <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center group-hover:scale-110 transition-all duration-200">
                                                                    <span className="text-xl">🚪</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="font-bold text-sm">Logout</div>
                                                                    <div className="text-xs text-red-400/60">Sign out of account</div>
                                                                </div>
                                                                <svg className="w-5 h-5 text-red-400/60 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        label="Login"
                                        icon="🏆"
                                        active={activeLink === "login"}
                                        onClick={() => router.push('/login')}
                                    />
                                )}
                            </ClientOnly>
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
                            <ClientOnly>
                                {username ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full relative group overflow-hidden rounded-2xl"
                                        >
                                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-60"></div>
                                            <div className="relative px-6 py-4 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 border-2 border-indigo-400/30 rounded-2xl">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-xl shadow-lg">
                                                            🎮
                                                        </div>
                                                        <span className="font-bold text-lg text-white">{username}</span>
                                                    </div>
                                                    <svg
                                                        className={`w-5 h-5 text-white transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="mt-3 flex flex-col gap-2 animate-[slideDown_0.3s_ease-out]">
                                                <button
                                                    className="relative group overflow-hidden rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all"
                                                    onClick={() => {
                                                        setIsDropdownOpen(false);
                                                        setIsMenuOpen(false);
                                                        router.push('/my-profile');
                                                    }}
                                                >
                                                    <div className="px-4 py-3 flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-lg bg-indigo-600/30 flex items-center justify-center">
                                                            <span className="text-lg">👤</span>
                                                        </div>
                                                        <span className="font-semibold text-white">My Profile</span>
                                                    </div>
                                                </button>

                                                <button
                                                    className="relative group overflow-hidden rounded-xl bg-red-900/20 hover:bg-red-900/40 transition-all"
                                                    onClick={() => {
                                                        handleLogout();
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    <div className="px-4 py-3 flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-lg bg-red-600/30 flex items-center justify-center">
                                                            <span className="text-lg">🚪</span>
                                                        </div>
                                                        <span className="font-semibold text-red-400">Logout</span>
                                                    </div>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <MobileNavLink
                                        label="Login"
                                        icon="🏆"
                                        active={activeLink === "login"}
                                        onClick={() => router.push('/login')}
                                    />
                                )}
                            </ClientOnly>
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
            className="relative cursor-pointer group px-5 py-2.5 rounded-xl transition-all duration-300"
        >
            <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
            </div>

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