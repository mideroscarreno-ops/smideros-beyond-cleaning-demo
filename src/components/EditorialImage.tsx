import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  imgClassName?: string;
}

export function EditorialImage({
  src,
  alt,
  label,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
  imgClassName = '',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#E5F5F2] via-[#FAFCFB] to-[#DCEBE8] text-[#123F46] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="w-6 h-6 mb-2 text-[#23A9A1]" aria-hidden="true" />
        <span className="text-sm font-medium tracking-tight">{label}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E5F5F2] ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
