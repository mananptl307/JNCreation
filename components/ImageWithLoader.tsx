import React, { useState, useEffect, useRef } from 'react';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ 
  wrapperClassName = "", 
  className = "", 
  alt = "",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image is already fully loaded from cache on mount
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${wrapperClassName}`}>
      {/* Loading Skeleton: Remove animate-pulse when loaded to allow opacity transition */}
      <div 
        className={`absolute inset-0 bg-stone-300 z-10 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'}`} 
      />
      
      {/* Image */}
      <img
        ref={imgRef}
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};