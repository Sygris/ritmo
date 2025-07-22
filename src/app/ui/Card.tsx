import clsx from "clsx";
import React from "react";

type CardProps = {
  children: React.ReactNode,
  className?: string
}

export function Card({ children, className, ...props }: CardProps) {

  // Added this line because when passing a bg color it wouldn´t change
  const backgroundColor = className?.includes('bg-') ? '' : 'bg-white';
  const combinedClass = clsx(
    backgroundColor,
    className,
    'p-2 rounded-xl shadow-xs'
  );

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div className={`${className} flex flex-col`} {...props}>
      {children}
    </div>
  );
};

export function CardTitle({ children, className, ...props }: CardProps) {
  return (
    <h3 className={`${className} text-xl md:text-xl font-medium`} {...props}>
      {children}
    </h3>
  );
};

export function CardDescription({ children, className, ...props }: CardProps) {
  return (
    <div className={`${className} text-xs md:text-sm font-light`} {...props}>
      {children}
    </div>
  );
};

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={`${className} text-center text-md`} {...props}>
      {children}
    </div>
  );
}