import { cn } from "@/lib/utils/cn";
import React from "react";

type CardProps = {
  children: React.ReactNode,
  className?: string
}

export function Card({ children, className, ...props }: CardProps) {

  const combinedClass = cn(
    'bg-white p-2 rounded-xl shadow-xs',
    className
  );

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div className={cn(
      'flex flex-col',
      className
    )}
      {...props}
    >
      {children}
    </div>
  );
};

export function CardTitle({ children, className, ...props }: CardProps) {
  return (
    <h3 className={cn(
      'text-xl md:text-xl font-medium',
      className
    )}
      {...props}
    >
      {children}
    </h3>
  );
};

export function CardDescription({ children, className, ...props }: CardProps) {
  return (
    <div className={cn(
      'text-xs md:text-sm font-light',
      className
    )}
      {...props}
    >
      {children}
    </div>
  );
};

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={cn(
      'text-center text-md',
      className
    )}
      {...props}
    >
      {children}
    </div>
  );
}