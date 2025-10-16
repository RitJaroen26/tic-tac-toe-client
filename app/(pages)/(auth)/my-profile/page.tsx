"use client";

import { useState, useEffect } from "react";
import Particles from "@/components/particles";
import GridBackground from "@/components/gridBackground";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('stats');
    const [isEditing, setIsEditing] = useState(false);
    const [hoveredStat, setHoveredStat] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);

    useEffect(() => {
        if (showHistoryModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showHistoryModal]);

    const userData = {
        username: "ProGamer2024",
        email: "progamer@example.com",
        avatar: "🎮",
        level: 42,
        xp: 7850,
        nextLevelXp: 10000,
        title: "Tic-Tac-Toe Master",
        joinDate: "January 2024",
        stats: {
            totalGames: 156,
            wins: 98,
            losses: 45,
            draws: 13,
            winRate: 63,
            currentStreak: 7,
            bestStreak: 15,
            avgGameTime: "3:45",
            perfectGames: 23
        },
        achievements: [
            { id: 1, name: "First Victory", desc: "Win your first game", icon: "🏆", unlocked: true, rarity: "common" },
            { id: 2, name: "Win Streak 10", desc: "Win 10 games in a row", icon: "🔥", unlocked: true, rarity: "rare" },
            { id: 3, name: "Century Club", desc: "Play 100 games", icon: "💯", unlocked: true, rarity: "rare" },
            { id: 4, name: "Perfect Week", desc: "Win every game in a week", icon: "⭐", unlocked: false, rarity: "epic" },
            { id: 5, name: "Unbeatable", desc: "Defeat Hard AI 50 times", icon: "👑", unlocked: false, rarity: "legendary" },
            { id: 6, name: "Speed Demon", desc: "Win in under 1 minute", icon: "⚡", unlocked: true, rarity: "rare" }
        ],
        recentMatches: [
            { id: 1, opponent: "Player123", result: "win", mode: "Hard AI", date: "2 hours ago", duration: "4:23" },
            { id: 2, opponent: "GamerPro", result: "win", mode: "Normal AI", date: "5 hours ago", duration: "3:12" },
            { id: 3, opponent: "TicTacMaster", result: "loss", mode: "Hard AI", date: "1 day ago", duration: "5:45" },
            { id: 4, opponent: "Noob999", result: "win", mode: "Easy AI", date: "2 days ago", duration: "2:34" },
            { id: 5, opponent: "Noob999", result: "win", mode: "Easy AI", date: "2 days ago", duration: "2:34" }
        ]
    };

    const xpPercentage = (userData.xp / userData.nextLevelXp) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(80px) rotate(180deg); opacity: 0.6; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 20px currentColor; }
          50% { opacity: 1; box-shadow: 0 0 40px currentColor; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes zoomIn {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float linear infinite; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>

            <Particles />
            <GridBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">

                {/* Hero Profile Card */}
                <div className="relative mb-12 animate-slide-up">
                    {/* Outer glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-pink-500/30 rounded-[3rem] blur-3xl"></div>

                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-[3rem] border-2 border-slate-700/50 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden">

                        {/* Animated cover with pattern */}
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500"></div>
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90"></div>

                            {/* Floating decorative elements */}
                            <div className="absolute top-10 left-20 w-20 h-20 rounded-full bg-white/10 blur-2xl animate-pulse"></div>
                            <div className="absolute top-20 right-40 w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        {/* Profile Content */}
                        <div className="px-10 pb-10">
                            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 -mt-20">

                                {/* Avatar with rings */}
                                <div className="relative group">
                                    {/* Rotating ring effect */}
                                    <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 blur-xl animate-[rotate_3s_linear_infinite]"></div>
                                    </div>

                                    {/* Main glow */}
                                    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-[2rem] blur-2xl opacity-70 animate-pulse"></div>

                                    {/* Avatar container */}
                                    <div className="relative w-30 md:w-40 h-30 md:h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] border-4 border-slate-700/50 flex items-center justify-center text-8xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                                        {userData.avatar}
                                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                                    </div>

                                    {/* Edit button */}
                                    <button className="absolute -bottom-2 -right-2 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xl border-2 border-slate-900">
                                        <span className="text-md md:text-xl">✏️</span>
                                    </button>
                                </div>

                                {/* User Info */}
                                <div className="flex-1 text-center lg:text-left space-y-4">
                                    <div>
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-3">
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                                                {userData.username}
                                            </h1>
                                        </div>

                                        {/* Badges */}
                                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-3">
                                            <div className="relative group">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="relative px-5 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 rounded-2xl backdrop-blur-sm">
                                                    <span className="text-yellow-400 font-black text-md md:text-lg">⭐ Level {userData.level}</span>
                                                </div>
                                            </div>

                                            <div className="relative group">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="relative px-5 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 rounded-2xl backdrop-blur-sm">
                                                    <span className="text-purple-300 font-bold text-base">👑 {userData.title}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* XP Progress Bar */}
                                        <div className="max-w-md mx-auto lg:mx-0">
                                            <div className="flex justify-between text-sm font-bold mb-2">
                                                <span className="text-indigo-300">XP Progress</span>
                                                <span className="text-indigo-400">{userData.xp} / {userData.nextLevelXp}</span>
                                            </div>
                                            <div className="relative h-4 bg-slate-800/80 rounded-full overflow-hidden border-2 border-slate-700/50">
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                                    style={{ width: `${xpPercentage}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-base font-medium">🗓️ Member since {userData.joinDate}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="relative group overflow-hidden px-8 py-4 rounded-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                                        <div className="relative flex items-center gap-2 text-white font-black text-base">
                                            <span className="text-xl">⚙️</span>
                                            <span>{isEditing ? 'Save' : 'Edit'}</span>
                                        </div>
                                    </button>

                                    <button className="relative group overflow-hidden px-6 py-4 rounded-2xl border-2 border-slate-700/50 hover:border-indigo-500/50 bg-slate-800/50 hover:bg-slate-800/80 transition-all">
                                        <span className="text-2xl">🔔</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    <StatCard
                        icon="🎯"
                        label="Total Games"
                        value={userData.stats.totalGames}
                        color="from-cyan-500 to-blue-600"
                        hovered={hoveredStat === 'total'}
                        onHover={() => setHoveredStat('total')}
                        onLeave={() => setHoveredStat(null)}
                    />
                    <StatCard
                        icon="🏆"
                        label="Victories"
                        value={userData.stats.wins}
                        color="from-green-500 to-emerald-600"
                        hovered={hoveredStat === 'wins'}
                        onHover={() => setHoveredStat('wins')}
                        onLeave={() => setHoveredStat(null)}
                    />
                    <StatCard
                        icon="💔"
                        label="Defeats"
                        value={userData.stats.losses}
                        color="from-red-500 to-rose-600"
                        hovered={hoveredStat === 'losses'}
                        onHover={() => setHoveredStat('losses')}
                        onLeave={() => setHoveredStat(null)}
                    />
                    <StatCard
                        icon="🤝"
                        label="Draws"
                        value={userData.stats.draws}
                        color="from-yellow-500 to-orange-600"
                        hovered={hoveredStat === 'draws'}
                        onHover={() => setHoveredStat('draws')}
                        onLeave={() => setHoveredStat(null)}
                    />
                </div>

                {/* Tabs with enhanced design */}
                <div className="flex gap-3 mb-8 justify-center overflow-x-auto pb-2">
                    <TabButton active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} icon="📊" label="Statistics" />
                    <TabButton active={activeTab === 'achievements'} onClick={() => setActiveTab('achievements')} icon="🏅" label="Achievements" />
                    <TabButton active={activeTab === 'history'} onClick={() => setActiveTab('history')} icon="📜" label="Match History" />
                </div>

                <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-pink-500/10 rounded-[3rem] blur-3xl"></div>

                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-[3rem] border-2 border-slate-700/50 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-10">
                        {activeTab === 'stats' && (
                            <div className="space-y-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">Performance Analytics</h2>
                                    <div className="flex-1 h-1 bg-gradient-to-r from-indigo-500/50 to-transparent rounded-full"></div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
                                        <div className="relative bg-slate-800/50 rounded-3xl p-2 md:p-8 border-2 border-slate-700/50">
                                            <div className="flex flex-col items-center">
                                                <div className="relative mb-6">
                                                    <svg className="w-56 h-56 transform -rotate-90">
                                                        <circle cx="112" cy="112" r="100" fill="none" stroke="rgb(30, 41, 59)" strokeWidth="12" />
                                                        <circle
                                                            cx="112"
                                                            cy="112"
                                                            r="100"
                                                            fill="none"
                                                            stroke="url(#gradient)"
                                                            strokeWidth="12"
                                                            strokeLinecap="round"
                                                            strokeDasharray={`${2 * Math.PI * 100}`}
                                                            strokeDashoffset={`${2 * Math.PI * 100 * (1 - userData.stats.winRate / 100)}`}
                                                            className="transition-all duration-1000"
                                                        />
                                                        <defs>
                                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" stopColor="#10b981" />
                                                                <stop offset="100%" stopColor="#059669" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="text-7xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                                                {userData.stats.winRate}%
                                                            </div>
                                                            <div className="text-slate-400 font-bold text-lg mt-2">Win Rate</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 w-full">
                                                    <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
                                                        <div className="text-3xl font-black text-cyan-400">{userData.stats.avgGameTime}</div>
                                                        <div className="text-slate-400 text-sm font-semibold mt-1">Avg Time</div>
                                                    </div>
                                                    <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
                                                        <div className="text-3xl font-black text-purple-400">{userData.stats.perfectGames}</div>
                                                        <div className="text-slate-400 text-sm font-semibold mt-1">Perfect Games</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
                                            <div className="relative bg-slate-800/50 rounded-3xl p-8 border-2 border-slate-700/50 space-y-6">
                                                <h3 className="text-2xl font-black text-white mb-6">Game Breakdown</h3>
                                                <ProgressBar label="Wins" value={userData.stats.wins} max={userData.stats.totalGames} color="from-green-500 to-emerald-600" icon="🏆" />
                                                <ProgressBar label="Losses" value={userData.stats.losses} max={userData.stats.totalGames} color="from-red-500 to-rose-600" icon="💔" />
                                                <ProgressBar label="Draws" value={userData.stats.draws} max={userData.stats.totalGames} color="from-yellow-500 to-orange-600" icon="🤝" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                        <div className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 backdrop-blur-sm">
                                            <div className="flex items-center gap-6">
                                                <div className="text-7xl animate-pulse">🔥</div>
                                                <div className="flex-1">
                                                    <div className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text mb-2">
                                                        {userData.stats.currentStreak}
                                                    </div>
                                                    <div className="text-slate-300 font-bold text-lg">Current Win Streak</div>
                                                    <div className="text-orange-400/70 text-sm font-semibold mt-1">Keep it going! 🚀</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                        <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm">
                                            <div className="flex items-center gap-6">
                                                <div className="text-7xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
                                                <div className="flex-1">
                                                    <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text mb-2">
                                                        {userData.stats.bestStreak}
                                                    </div>
                                                    <div className="text-slate-300 font-bold text-lg">Best Win Streak</div>
                                                    <div className="text-purple-400/70 text-sm font-semibold mt-1">Personal Record! 🎯</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'achievements' && (
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Trophy Collection</h2>
                                    <div className="flex-1 h-1 bg-gradient-to-r from-yellow-500/50 to-transparent rounded-full"></div>
                                    <div className="text-slate-400 font-bold text-lg">
                                        {userData.achievements.filter(a => a.unlocked).length}/{userData.achievements.length}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {userData.achievements.map((achievement) => (
                                        <AchievementCard key={achievement.id} achievement={achievement} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Battle History</h2>
                                    <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"></div>
                                </div>
                                <div className="space-y-4">
                                    {userData.recentMatches.slice(0, 4).map((match) => (
                                        <MatchCard key={match.id} match={match} />
                                    ))}
                                </div>

                                {userData.recentMatches.length > 4 && (
                                    <div className="text-center mt-6">
                                        <button
                                            onClick={() => setShowHistoryModal(true)}
                                            className="relative group overflow-hidden px-8 py-4 rounded-2xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                                            <div className="relative flex items-center gap-2 text-white font-black text-base">
                                                <span>View Full History</span>
                                                <span className="text-xl">📜</span>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {showHistoryModal && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center z-50 p-4 animate-[fadeIn_0.3s_ease]">
                        <div className="relative max-w-4xl w-full max-h-[80vh] animate-[zoomIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-pink-500/20 rounded-[3rem] blur-3xl animate-pulse"></div>

                            {/* Modal Content */}
                            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 rounded-[2.5rem] border-2 border-slate-700/50 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden">

                                {/* Header */}
                                <div className="flex items-center justify-between p-8 border-b border-slate-700/50">
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">History</h2>
                                    </div>
                                    <button
                                        onClick={() => setShowHistoryModal(false)}
                                        className="w-12 h-12 rounded-xl bg-slate-800/50 hover:bg-slate-800 border-2 border-slate-700/50 hover:border-red-500/50 text-slate-400 hover:text-red-400 transition-all flex items-center justify-center text-2xl"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="overflow-y-auto max-h-[calc(80vh-120px)] p-8 space-y-4">
                                    {userData.recentMatches.map((match) => (
                                        <MatchCard key={match.id} match={match} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Enhanced Stat Card
function StatCard({ icon, label, value, color, hovered, onHover, onLeave }: any) {
    return (
        <div
            className="relative group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur-xl transition-all duration-300 ${hovered ? 'opacity-75 animate-pulse' : 'opacity-40'
                }`}></div>
            <div className={`relative bg-gradient-to-br ${color} rounded-3xl p-6 border-2 border-white/10 backdrop-blur-sm transform transition-all duration-300 ${hovered ? 'scale-105 shadow-2xl' : 'scale-100'
                }`}>
                <div className={`text-5xl mb-3 transition-transform duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}>{icon}</div>
                <div className="text-4xl font-black text-white mb-1">{value}</div>
                <div className="text-sm text-white/90 font-bold tracking-wide uppercase">{label}</div>
            </div>
        </div>
    );
}

// Enhanced Tab Button
function TabButton({ active, onClick, icon, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`relative px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 whitespace-nowrap overflow-hidden ${active ? 'scale-105' : 'scale-100 hover:scale-105'
                }`}
        >
            {active && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                </>
            )}
            {!active && (
                <div className="absolute inset-0 bg-slate-800/50 hover:bg-slate-800/80 rounded-2xl transition-colors"></div>
            )}
            <div className={`relative flex items-center gap-2 ${active ? 'text-white' : 'text-slate-400'}`}>
                <span className="text-xl">{icon}</span>
                <span className="hidden md:block text-sm md:text-lg">{label}</span>
            </div>
        </button>
    );
}

function ProgressBar({ label, value, max, color, icon }: any) {
    const percentage = (value / max) * 100;
    return (
        <div>
            <div className="flex justify-between items-center text-base font-bold mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-white">{label}</span>
                </div>
                <span className="text-slate-400">{value}/{max}</span>
            </div>
            <div className="relative h-4 bg-slate-900/80 rounded-full overflow-hidden border-2 border-slate-700/50">
                <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 shadow-[0_0_15px_currentColor]`}
                    style={{ width: `${percentage}%` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </div>
    );
}

function AchievementCard({ achievement }: any) {
    const rarityColors: Record<string, string> = {
        common: 'from-slate-500 to-slate-600',
        rare: 'from-blue-500 to-cyan-600',
        epic: 'from-purple-500 to-pink-600',
        legendary: 'from-yellow-500 to-orange-600'
    };

    const rarityBorders: Record<string, string> = {
        common: 'border-slate-500/30',
        rare: 'border-blue-500/30',
        epic: 'border-purple-500/30',
        legendary: 'border-yellow-500/30'
    };

    return (
        <div className={`relative group ${achievement.unlocked ? 'opacity-100' : 'opacity-40'}`}>
            {achievement.unlocked && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${rarityColors[achievement.rarity]} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse`}></div>
            )}
            <div className={`relative p-6 rounded-3xl border-2 backdrop-blur-sm transition-all duration-300 ${achievement.unlocked
                ? `bg-gradient-to-br ${rarityColors[achievement.rarity]}/10 ${rarityBorders[achievement.rarity]} group-hover:scale-105`
                : 'bg-slate-800/50 border-slate-700/50'
                }`}>
                <div className={`text-6xl mb-4 transition-transform duration-300 ${achievement.unlocked ? 'group-hover:scale-110' : ''
                    }`}>{achievement.icon}</div>
                <h3 className={`font-black text-xl mb-2 ${achievement.unlocked ? 'text-white' : 'text-slate-600'
                    }`}>
                    {achievement.name}
                </h3>
                <p className={`text-sm font-semibold ${achievement.unlocked ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                    {achievement.desc}
                </p>
                {achievement.unlocked ? (
                    <div className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-gradient-to-r ${rarityColors[achievement.rarity]} text-white`}>
                        {achievement.rarity}
                    </div>
                ) : (
                    <div className="mt-3 flex items-center gap-2 text-slate-600">
                        <span className="text-lg">🔒</span>
                        <span className="text-sm font-bold">Locked</span>
                    </div>
                )}
            </div>
        </div>
    );
}

function MatchCard({ match }: any) {
    const resultColors: Record<string, string> = {
        win: 'from-green-500/20 to-emerald-500/20 border-green-500/40',
        loss: 'from-red-500/20 to-rose-500/20 border-red-500/40',
        draw: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/40'
    };

    const resultIcons: Record<string, string> = {
        win: '✅',
        loss: '❌',
        draw: '🤝'
    };

    const resultText: Record<string, string> = {
        win: 'Victory',
        loss: 'Defeat',
        draw: 'Draw'
    };

    return (
        <div className={`relative group`}>
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${match.result === 'win' ? 'from-green-500 to-emerald-600' :
                match.result === 'loss' ? 'from-red-500 to-rose-600' :
                    'from-yellow-500 to-orange-600'
                } rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>

            <div className={`hidden md:block relative bg-gradient-to-br ${resultColors[match.result]} border-2 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02]`}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col md:flex-row
                     items-center gap-5">
                        <div className="text-4xl">{resultIcons[match.result]}</div>
                        <div>
                            <div className="text-white font-black text-xl mb-1">vs {match.opponent}</div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="text-slate-400 font-semibold">🎮 {match.mode}</span>
                                <span className="text-slate-500">•</span>
                                <span className="text-slate-400 font-semibold">⏱️ {match.duration}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`text-2xl font-black uppercase tracking-wider mb-1 ${match.result === 'win' ? 'text-green-400' :
                            match.result === 'loss' ? 'text-red-400' :
                                'text-yellow-400'
                            }`}>
                            {resultText[match.result]}
                        </div>
                        <div className="text-slate-500 text-sm font-semibold">{match.date}</div>
                    </div>
                </div>
            </div>

            <div className={`block md:hidden relative bg-gradient-to-br ${resultColors[match.result]} border-2 rounded-xl p-4 backdrop-blur-sm`}>
                <div className="flex items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm truncate">vs {match.opponent}</div>
                        <div className="text-slate-400 text-xs font-medium mt-0.5">🎮 {match.mode}</div>
                    </div>
                    <div className={`text-xs font-black uppercase ${match.result === 'win' ? 'text-green-400' :
                        match.result === 'loss' ? 'text-red-400' :
                            'text-yellow-400'
                        }`}>
                        {resultText[match.result]}
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium pt-3 border-t border-slate-700/30">
                    <span>📅 {match.date}</span>
                    <span className="text-slate-600">•</span>
                    <span>⏱️ {match.duration}</span>
                </div>
            </div>
        </div>
    );
}