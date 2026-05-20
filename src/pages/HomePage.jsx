import { useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Facilities from '../components/Facilities';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Roadmap from '../components/Roadmap';
import News from '../components/News';
import Clients from '../components/Clients';

export default function HomePage() {
  const { content } = useContent();
  const sec = content.sections || {};

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const observe = () =>
      document.querySelectorAll('.anim, .anim-l, .anim-r').forEach((el) => io.observe(el));
    observe();
    const t = setTimeout(observe, 600);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <>
      <Hero />
      {sec.about?.visible !== false && <About />}
      {sec.process?.visible !== false && <Process />}
      {sec.facilities?.visible !== false && <Facilities />}
      {sec.products?.visible !== false && <Products />}
      {sec.whyus?.visible !== false && <WhyUs />}
      {sec.roadmap?.visible !== false && <Roadmap />}
      {sec.news?.visible !== false && <News />}
      {sec.clients?.visible !== false && <Clients />}
    </>
  );
}
