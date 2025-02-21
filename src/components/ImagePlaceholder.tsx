import { cn } from '@/lib/utils';
import pattern from '@/assets/pattern.png';

export default function ImagePlaceholder({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn('rounded-md shadow-lg opacity-40', className)}
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto', // or "contain" / "cover" depending on what looks best
      }}
    />
  );
}
