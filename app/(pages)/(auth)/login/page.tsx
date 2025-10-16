"use client";

import { useState } from "react";
import Particles from "@/components/particles";
import { FcGoogle } from "react-icons/fc";
import GridBackground from "@/components/gridBackground";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        confirmPassword: ''
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert(`${isLogin ? 'Login' : 'Registration'} submitted!`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 relative overflow-hidden">
            <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-80px) translateX(60px); 
            opacity: 0.4;
          }
        }
        @keyframes slideIn {
          0% { transform: translateX(-20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>

            <Particles />
            <GridBackground />

            <div className="relative w-full max-w-lg animate-slide-in">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-pink-500/20 rounded-[3rem] blur-3xl animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 rounded-[2.5rem] border-2 border-slate-700/50 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden">
                    <div className="text-center pt-10 pb-8 px-8">
                        <div className="inline-block mb-4">
                            <div className="text-6xl animate-pulse">🎮</div>
                        </div>

                        <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2 tracking-tight">
                            RafficToe
                        </h1>
                        <p className="text-indigo-300/80 text-base font-medium">
                            {isLogin ? 'Welcome back!' : 'Join the game'}
                        </p>
                    </div>

                    <div className="flex gap-2 px-8 mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 cursor-pointer py-3 rounded-xl font-bold text-base transition-all duration-300 ${isLogin
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-300'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 cursor-pointer py-3 rounded-xl font-bold text-base transition-all duration-300 ${!isLogin
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-300'
                                }`}
                        >
                            Register
                        </button>
                    </div>

                    <div className="px-8 pb-8">
                        <div className="space-y-4">
                            {!isLogin && (
                                <div className="relative">
                                    <label className="block text-sm font-bold text-indigo-300 mb-2">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl blur transition-opacity duration-300 ${focusedField === 'username' ? 'opacity-50' : 'opacity-0'
                                            }`}></div>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-4 text-2xl"><img src="/images/singleplayer_image.svg" alt="" /></span>
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('username')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Choose a username"
                                                className="w-full pl-14 pr-4 py-3.5 bg-slate-800/80 border-2 border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="relative">
                                <label className="block text-sm font-bold text-indigo-300 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl blur transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-50' : 'opacity-0'
                                        }`}></div>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-4 text-2xl"><img src="/images/mail_image.svg" alt="" /></span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Enter your email"
                                            className="w-full pl-14 pr-4 py-3.5 bg-slate-800/80 border-2 border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-bold text-indigo-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl blur transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-50' : 'opacity-0'
                                        }`}></div>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-4 text-2xl"><img src="/images/lock_image.svg" alt="" /></span>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('password')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Enter your password"
                                            className="w-full pl-14 pr-4 py-3.5 bg-slate-800/80 border-2 border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {!isLogin && (
                                <div className="relative">
                                    <label className="block text-sm font-bold text-indigo-300 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur transition-opacity duration-300 ${focusedField === 'confirmPassword' ? 'opacity-50' : 'opacity-0'
                                            }`}></div>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-4 text-2xl"><img src="/images/key_image.svg" alt="" /></span>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('confirmPassword')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Confirm your password"
                                                className="w-full pl-14 pr-4 py-3.5 bg-slate-800/80 border-2 border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isLogin && (
                                <div className="text-right">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-sm text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                className="relative group w-full mt-6 overflow-hidden rounded-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 group-hover:from-cyan-400 group-hover:via-indigo-500 group-hover:to-pink-400 transition-all"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                                <div className="relative py-4 text-white text-lg font-black tracking-wide">
                                    {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
                                </div>
                            </button>

                            <div className="flex items-center gap-4 my-6">
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                                <span className="text-slate-500 text-sm font-semibold">OR</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-3 py-3 bg-slate-800/80 hover:bg-slate-800 border-2 border-slate-700/50 hover:border-slate-600/50 rounded-xl text-white font-semibold transition-all group"
                                >
                                    <span className="cursor-pointer text-2xl group-hover:scale-110 transition-transform"><FcGoogle size={18} /></span>
                                    <span>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pb-8 px-8">
                        <p className="text-slate-400 text-sm">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}