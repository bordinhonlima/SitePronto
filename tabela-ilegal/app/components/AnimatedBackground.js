'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble" style={{ 
            '--size': `${2 + Math.random() * 4}rem`,
            '--distance': `${6 + Math.random() * 4}rem`,
            '--position': `${-5 + Math.random() * 110}%`,
            '--time': `${2 + Math.random() * 2}s`,
            '--delay': `${-1 * (2 + Math.random() * 2)}s`,
          }}></div>
        ))}
      </div>

      <style jsx>{`
        .bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          top: 0;
          left: 0;
        }
        .bubble {
          position: absolute;
          left: var(--position);
          bottom: -10rem;
          display: block;
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          animation: float var(--time) var(--delay) ease-in infinite;
        }
        .bubble::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(136, 146, 176, 0.1);
          border-radius: 50%;
          box-shadow: 0 0 0 0.5rem rgba(136, 146, 176, 0.05);
        }
        @keyframes float {
          0% {
            transform: translateY(100vh);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(var(--distance) * -1));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 