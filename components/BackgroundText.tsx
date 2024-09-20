// components/BackgroundText.tsx
import React from 'react';

interface BackgroundTextProps {
  children: React.ReactNode;
}

const BackgroundText: React.FC<BackgroundTextProps> = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-slate-900">
      {/* Text with Gradient */}
      <h1 className="absolute text-[16rem] font-extrabold text-transparent opacity-5 bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500">
        KOMPYTE
      </h1>

      {/* Content on Top */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundText;
