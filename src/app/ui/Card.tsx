import React from "react";

export function Card({children, className, ...props} : { children : React.ReactNode, className?: string, }) {
  const backgroundColor = className && className.includes('bg-') ? '' : 'bg-primary-background/20';
  const combinedClass = `${backgroundColor} ${className || ''} p-4 rounded-md`;
  
  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
}