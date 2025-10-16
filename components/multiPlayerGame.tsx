"use client";

import { useState } from "react";
import Particles from "./particles";
import GridBackground from "./gridBackground";

export default function MultiPlayerGame() {
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
        </div>
    )
}