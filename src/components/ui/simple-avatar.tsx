import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
  alt?: string;
}

export function SimpleAvatar({ src, fallback, alt, className, ...props }: SimpleAvatarProps) {
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted',
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || ''} className="aspect-square h-full w-full object-cover" />
      ) : (
        <span className="text-sm font-medium text-muted-foreground">
          {fallback}
        </span>
      )}
    </div>
  );
}
