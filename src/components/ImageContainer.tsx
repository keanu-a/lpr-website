import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function ImageContainer({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return <div className={cn(className)}>{children}</div>;
}
