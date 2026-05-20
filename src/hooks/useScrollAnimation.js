import { useEffect, useRef } from 'react';

const SELECTOR = '.anim, .anim-l, .anim-r';

const observer = typeof window !== 'undefined'
  ? new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
  : null;

export function useScrollAnimationMultiple() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !observer) return;
    const items = el.querySelectorAll(SELECTOR);
    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);
  return ref;
}

export function useScrollAnimation() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !observer) return;
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);
  return ref;
}
