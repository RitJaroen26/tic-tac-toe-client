"use client";

export default function GridBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute inset-0" style={{
                backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
                animation: 'gridMove 30s linear infinite'
            }}></div>
        </div>
    );
}