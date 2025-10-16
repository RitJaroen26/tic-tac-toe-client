"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Board from "./board";
import { GetAIMove } from "@/lib/ai";
import { checkWinner } from "@/utils/checkWinner";
import Particles from "./particles";
import GridBackground from "./gridBackground";

export default function SinglePlayerGame() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);
    const [winningLine, setWinningLine] = useState<number[] | undefined>(undefined);
    const [status, setStatus] = useState("Your turn (X)");
    const [score, setScore] = useState({ player: 0, ai: 0, draws: 0 });
    const [lastWinner, setLastWinner] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(3);
    const searchParams = useSearchParams();
    const mode = (searchParams.get("mode") || "normal") as
        | "easy"
        | "normal"
        | "hard";
    const [difficulty, setDifficulty] = useState(mode);

    useEffect(() => {
        if (!xIsNext && !winner) {
            const timer = setTimeout(() => {
                setBoard(prevBoard => {
                    const move = GetAIMove(prevBoard, difficulty);
                    if (move === -1) return prevBoard;
                    const newBoard = [...prevBoard];
                    newBoard[move] = "O";
                    const result = checkWinner(newBoard);
                    if (result.winner) {
                        setWinner(result.winner);
                        setLastWinner(result.winner);
                        setWinningLine(result.line ?? undefined);
                        setStatus(result.winner === "O" ? "AI Victory!" : `${result.winner} wins!`);
                    } else if (!newBoard.includes("")) {
                        setWinner("draw");
                        setLastWinner("draw");
                        setWinningLine(undefined);
                        setStatus("Perfect Draw");
                    } else {
                        setXIsNext(true);
                        setStatus("Your Move");
                    }
                    return newBoard;
                });
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [xIsNext, winner, difficulty]);

    useEffect(() => {
        if (!winner) return;

        if (winner === "X") {
            setScore(prev => ({ ...prev, player: prev.player + 1 }));
        } else if (winner === "O") {
            setScore(prev => ({ ...prev, ai: prev.ai + 1 }));
        } else if (winner === "draw") {
            setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
        }
    }, [winner]);

    const handleClick = (i: number) => {
        if (board[i] || !xIsNext || winner) return;

        const newBoard = [...board];
        newBoard[i] = "X";

        const result = checkWinner(newBoard);
        if (result.winner === "X") {
            setBoard(newBoard);
            setWinner(result.winner);
            setLastWinner(result.winner);
            setWinningLine(result.line ?? undefined);
            setStatus(`${result.winner} wins!`);
        } else if (!newBoard.includes("")) {
            setBoard(newBoard);
            setWinner("draw");
            setLastWinner("draw");
            setWinningLine(undefined);
            setStatus("Draw!");
        } else {
            setBoard(newBoard);
            setXIsNext(false);
            setStatus("AI thinking...");
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setWinner(null);
        setWinningLine(undefined);

        if (lastWinner === "X") {
            setXIsNext(true);
            setStatus("Your turn (X)");
        } else if (lastWinner === "O") {
            setXIsNext(false);
            setStatus("AI starts...");
        } else {
            setXIsNext(true);
            setStatus("Your turn (X)");
        }
    };

    useEffect(() => {
        if (winner) return;
        setTimeLeft(10);

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    if (xIsNext) {
                        setXIsNext(false);
                        setStatus("AI turn (Timeout!)");
                    } else {
                        setXIsNext(true);
                        setStatus("Your turn (AI Timeout!)");
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [xIsNext, winner]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-8 relative overflow-hidden">
            <Particles />
            <GridBackground />

            <style jsx>{`
        @keyframes zoomIn {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-100px) translateX(50px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
            <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="text-center mb-4">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 blur-3xl opacity-50"></div>
                        <h1 className="relative text-4xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                            RafficToe
                        </h1>
                    </div>
                    <p className="text-indigo-300 text-xl font-medium tracking-wide">Battle Against AI</p>
                </div>

                <div className="flex gap-6 mb-2">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl px-4 md:px-8 py-3 md:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-cyan-400/30 backdrop-blur-sm">
                            <div className="text-white text-sm font-bold tracking-wider uppercase opacity-90">Player</div>
                            <div className="text-white text-2xl md:text-5xl font-black mt-1">{score.player}</div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl px-4 md:px-8 py-3 md:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-500/30 backdrop-blur-sm">
                            <div className="text-white text-sm font-bold tracking-wider uppercase opacity-90">Draws</div>
                            <div className="text-white text-2xl md:text-5xl font-black mt-1">{score.draws}</div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl px-4 md:px-8 py-3 md:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-pink-400/30 backdrop-blur-sm">
                            <div className="text-white text-sm font-bold tracking-wider uppercase opacity-90">Computer</div>
                            <div className="text-white text-2xl md:text-5xl font-black mt-1">{score.ai}</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className={`absolute inset-0 rounded-3xl blur-xl opacity-60 ${status.includes("Victory") && winner === "X" ? "bg-gradient-to-r from-green-400 to-emerald-600" :
                        status.includes("AI Victory") ? "bg-gradient-to-r from-red-400 to-rose-600" :
                            status.includes("Draw") ? "bg-gradient-to-r from-yellow-400 to-orange-600" :
                                "bg-gradient-to-r from-indigo-400 to-purple-600"
                        }`}></div>
                    <div className="relative bg-slate-900/80 rounded-3xl px-10 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-700/50 backdrop-blur-xl">
                        <p className={`text-xl md:text-3xl font-black tracking-wide ${status.includes("Victory") && winner === "X" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400" :
                            status.includes("AI Victory") ? "text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-rose-400" :
                                status.includes("Draw") ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400" :
                                    "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400"
                            }`}>
                            {status}
                        </p>
                    </div>
                </div>

                <p className="text-indigo-300 font-semibold tracking-wide">
                    Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </p>

                <div className="w-64 h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-1000 ${timeLeft <= 3 ? "bg-red-500" : "bg-green-400"}`}
                        style={{ width: `${(timeLeft / 3) * 100}%` }}
                    />
                </div>

                <Board
                    squares={board}
                    onClick={handleClick}
                    winningLine={winningLine}
                    disabled={!xIsNext || !!winner}
                />

                <button
                    onClick={resetGame}
                    className="relative group cursor-pointer px-12 py-5 text-white text-xl font-black rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 group-hover:from-purple-500 group-hover:via-indigo-500 group-hover:to-purple-500 transition-all"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-white/30 to-purple-400/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]"></div>
                    <span className="relative z-10 tracking-wider drop-shadow-lg">NEW GAME</span>
                </button>
            </div>
        </div>
    );
}
