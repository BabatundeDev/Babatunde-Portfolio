import { useState } from "react";

export function ImageWithFallback({ src, alt, className }) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? "https://via.placeholder.com/400x300?text=Image+Unavailable" : src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
