'use client';

import { LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StarIcon } from '../Icons';

export interface GlobalUserStatusBarProps {
  joined: number;
  total: number;
}

export function GlobalUserStatusBar({ joined, total }: GlobalUserStatusBarProps) {
  const percent = Math.min(100, (joined / total) * 100);

  return (
    <div className="w-full max-w-screen-sm relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <StarIcon className="star absolute -top-3 -right-2 text-primary" size={14} />
      </div>
      <div className="gaming-card relative rounded-3xl p-6 border-2 border-transparent bg-clip-padding overflow-hidden from-success-500 to-primary bg-gradient-to-r">
        <span className="shine absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        {/* Top text */}
        <div className="flex justify-between items-center pb-2 relative z-10">
          <span className="animate-pulse text-white font-semibold text-sm">
            {joined} نفر پیوستن از {total} نفر
          </span>
          <span className=" animate-pulse text-white font-semibold text-sm">
            {Math.round(percent)}%
          </span>
        </div>

        {/* Progress bar */}
        <BorderLinearProgress variant="determinate" value={percent} />

        {/* Bottom text */}
        <div className="text-xs text-white pt-3 relative z-10">
          {total - joined} نفر تا باز شدن قابلیت‌های جدید مانده است.
        </div>
      </div>
      <style>{`
        @keyframes neonGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; text-shadow: 0 0 5px #0ff, 0 0 10px #0ff; }
          50% { opacity: 1; text-shadow: 0 0 20px #0ff, 0 0 40px #4141F9; }
        }
        @keyframes shineMove {
          0%   { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
          10%   { opacity: 1; }
          20%  { transform: translateX(300%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(300%) skewX(-20deg); opacity: 0; }
        }
        @keyframes starPop {
          0%   { transform: scale(0) rotate(0deg); opacity: 0; }
          30%  { transform: scale(1.5) rotate(35deg); opacity: 1; }
          35%  { transform: scale(1) rotate(45deg); opacity: 1; }
          40%  { transform: scale(0) rotate(90deg); opacity: 0; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        .shine {
          animation: shineMove 3s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        .star {
          animation: starPop 3s ease-in-out infinite;
          animation-delay: 0s; 
        }
      
      `}</style>
    </div>
  );
}

// ProgressBar Gaming Style
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.6)',
  backgroundColor: 'rgba(255,255,255,0.05)',
  overflow: 'hidden',
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundImage: 'linear-gradient(90deg, #B3B3FC, #6868FA, #8E8EFB, #68BAA6, #499F89)',
    backgroundSize: '300% 300%',
    animation: 'neonGlow 10s linear infinite',
    boxShadow: '0 0 15px rgba(0,255,255,0.8)',
  },
}));
