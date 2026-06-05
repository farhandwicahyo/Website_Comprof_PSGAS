const DEFAULT_SRC = '/logo.png';

export default function BrandLogo({
  alt,
  src = DEFAULT_SRC,
  variant = 'nav',
  className = '',
}) {
  const sizeClass =
    variant === 'footer'
      ? 'h-10 sm:h-12 md:h-14 max-w-[min(280px,90vw)]'
      : 'h-9 sm:h-10 lg:h-11 max-w-[min(160px,48vw)] sm:max-w-[200px] lg:max-w-[260px]';

  return (
    <img
      src={src}
      alt={alt}
      className={`w-auto object-contain object-left shrink-0 ${sizeClass} ${className}`}
      decoding="async"
    />
  );
}
