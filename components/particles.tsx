// "use client";

// import { useState, useEffect } from "react";

// export default function Particles() {
//     const [positions, setPositions] = useState<{left: string, top: string, delay: string, duration: string}[]>([]);

//     useEffect(() => {
//         const newPositions = [...Array(30)].map(() => ({
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             delay: `${Math.random() * 5}s`,
//             duration: `${5 + Math.random() * 10}s`
//         }));
//         setPositions(newPositions);
//     }, []);

//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {positions.map((pos, i) => (
//                 <div
//                     key={i}
//                     className="absolute w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-30 animate-float"
//                     style={{
//                         left: pos.left,
//                         top: pos.top,
//                         animationDelay: pos.delay,
//                         animationDuration: pos.duration
//                     }}
//                 />
//             ))}
//         </div>
//     );
// }

"use client";

import { useState, useEffect } from "react";

export default function Particles() {
    const [positions, setPositions] = useState<{left: string, top: string, delay: string, duration: string}[]>([]);

    useEffect(() => {
        const newPositions = [...Array(30)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 10}s`
        }));
        setPositions(newPositions);
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) translateX(0px); 
                    }
                    50% { 
                        transform: translateY(-100px) translateX(50px); 
                    }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {positions.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-30 animate-float"
                        style={{
                            left: pos.left,
                            top: pos.top,
                            animationDelay: pos.delay,
                            animationDuration: pos.duration
                        }}
                    />
                ))}
            </div>
        </>
    );
}