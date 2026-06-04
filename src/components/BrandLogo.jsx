const LOGO_FULL = '/logo.png';
const LOGO_MARK = '/logo-web.png';

export default function BrandLogo({
  alt,
  fullSrc = LOGO_FULL,
  markSrc = LOGO_MARK,
  variant = 'nav',
  className = '',
}) {
  const isFooter = variant === 'footer';

  const markClass = isFooter
    ? 'h-10 w-auto max-h-10 sm:h-11'
    : 'h-9 w-auto max-h-9 sm:h-10';

  const fullClass = isFooter
    ? 'h-12 md:h-14 max-w-[280px]'
    : 'h-9 sm:h-10 lg:h-11 max-w-[260px]';

  return (
    <>
      <img
        src={markSrc}
        alt={alt}
        className={`lg:hidden object-contain object-left shrink-0 ${markClass} ${className}`}
        decoding="async"
      />
      <img
        src={fullSrc}
        alt={alt}
        className={`hidden lg:block w-auto object-contain object-left ${fullClass} ${className}`}
        decoding="async"
      />
    </>
  );
}
