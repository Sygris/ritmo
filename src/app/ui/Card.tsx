import clsx from "clsx";
import React from "react";

type CardProps = {
  children: React.ReactNode,
  className?: string
}

export function Card({ children, className, ...props }: CardProps) {

  // Added this line because when passing a bg color it wouldn´t change
  const backgroundColor = className?.includes('bg-') ? '' : 'bg-secondary-background/5';
  const combinedClass = clsx(
    backgroundColor,
    className,
    'p-2 rounded-xl shadow-sm'
  );

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div className={`${className} flex flex-col gap-2 p-4`} {...props}>
      {children}
      <div className="w-full bg-muted h-0.5" />
    </div>
  );
};

export function CardTitle({ children, className, ...props }: CardProps) {
  return (
    <h3 className={`${className} text-xl md:text-2xl font-medium`} {...props}>
      {children}
    </h3>
  );
};

export function CardDescription({ children, className, ...props }: CardProps) {
  return (
    <p className={`${className} text-secondary-foreground/50 text-xs md:text-sm font-light`} {...props}>
      {children}
    </p>
  );
};

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={`${className} px-4 py-2 text-center text-md`} {...props}>
      {children}
    </div>
  );
}