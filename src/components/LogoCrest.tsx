import React from 'react';
import { AthenianSpartanLogo } from './AthenianSpartanLogo';

interface LogoCrestProps {
  className?: string;
  variant?: 'dark' | 'light' | 'primary' | 'white';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LogoCrest: React.FC<LogoCrestProps> = ({
  className = '',
  variant = 'dark',
  showText = true,
  size = 'md',
}) => {
  const getTextColors = () => {
    switch (variant) {
      case 'light':
      case 'white':
        return {
          logoColor: '#FAF5EE',
          textMain: '#FAF5EE',
          textSub: '#FAF5EE',
        };
      case 'primary':
      case 'dark':
      default:
        return {
          logoColor: '#C8102E',
          textMain: '#A31621',
          textSub: '#B76E79',
        };
    }
  };

  const colors = getTextColors();

  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { imgSize: 'w-7 h-7', titleSize: 'text-sm', subSize: 'text-[9px]' };
      case 'lg':
        return { imgSize: 'w-14 h-14', titleSize: 'text-2xl', subSize: 'text-xs' };
      case 'xl':
        return { imgSize: 'w-20 h-20', titleSize: 'text-4xl', subSize: 'text-sm' };
      case 'md':
      default:
        return { imgSize: 'w-10 h-10', titleSize: 'text-lg', subSize: 'text-[10px]' };
    }
  };

  const dim = getDimensions();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Athenian Spartan Vector Emblem */}
      <div className="shrink-0 flex items-center justify-center">
        <AthenianSpartanLogo
          className={dim.imgSize}
          color={colors.logoColor}
        />
      </div>

      {showText && (
        <div className="flex flex-col tracking-wider">
          <span
            className={`font-display font-bold uppercase tracking-[0.24em] leading-none ${dim.titleSize}`}
            style={{ color: colors.textMain }}
          >
            Athenian
          </span>
          <span
            className={`font-sans font-medium uppercase tracking-[0.35em] mt-1 ${dim.subSize}`}
            style={{ color: colors.textSub }}
          >
            Professional
          </span>
        </div>
      )}
    </div>
  );
};

