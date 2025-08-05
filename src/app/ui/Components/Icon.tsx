import React from "react";
import { IconType } from "react-icons";

export type IconProps = {
  icon: IconType,
  size?: number,
  flip?: boolean,
  className?: string,
  onClick?: () => void
};

export default function Icon({icon: Icon, size = 24, flip = false, className='', onClick} : IconProps) {
  return (
    <Icon
      onClick={onClick}
      size={size} 
      className={`transform ${flip ? 'rotate-90' : ''} ${className}`}
    />
  );
}