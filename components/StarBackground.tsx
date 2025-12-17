import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

interface Props {
  isDarkMode: boolean;
}

const StarBackground: React.FC<Props> = ({ isDarkMode }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 200;
      const newStars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 0.5}px`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-700">
      
      {/* 
        ========================================
        DARK MODE: GALAXY THEME
        ========================================
      */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        {/* Galaxy Band */}
        <div 
          className="absolute top-1/2 left-1/2 w-[200%] h-[50%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.4)_0%,_rgba(11,13,23,0)_70%)] rotate-[-25deg] blur-3xl opacity-80"
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[150%] h-[30%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_rgba(11,13,23,0)_70%)] rotate-[-25deg] blur-3xl opacity-60 mix-blend-screen"
        />

        {/* Deep Space Gradients Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#1e1b4b]/80 opacity-60" />
        
        {/* Nebula Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
        
        {/* Noise Texture */}
        <div 
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" 
        ></div>
      </div>

      {/* 
        ========================================
        LIGHT MODE: CLEAN SKY
        ========================================
      */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${!isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
         {/* Soft Blue Gradient Base */}
         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
         
         {/* Subtle Clouds/Orbs for Depth */}
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply" />
         <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-cyan-100/40 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

    </div>
  );
};

export default StarBackground;