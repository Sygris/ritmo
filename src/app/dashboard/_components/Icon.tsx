import React from "react";
import { IconType } from "react-icons";

export type IconProps = {
  icon: IconType,
  size?: number,
  flip?: boolean,
  className?: string
};

export default function Icon({icon: Icon, size = 24, flip = false, className=''} : IconProps) {
  return (
    <Icon
      size={size} 
      className={`transform ${flip ? 'scale-x-[-1]' : ''} ${className}`}
    />
  );
}