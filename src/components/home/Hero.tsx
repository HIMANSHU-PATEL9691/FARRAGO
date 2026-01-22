import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-jewelry.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hero content animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
          { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.out' },
          '-=0.4'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1.5, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury gold jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative container-luxury py-32 md:py-40">
        <div className="max-w-2xl">
          <span
            ref={eyebrowRef}
            className="eyebrow mb-6 block opacity-0"
          >
            Established 1985
          </span>

          <h1
            ref={titleRef}
            className="title-display mb-6 opacity-0"
          >
            Timeless Elegance,{' '}
            <span className="text-gold italic">Crafted</span> for You
          </h1>

          <p
            ref={descRef}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl opacity-0"
          >
            Discover exquisite handcrafted jewelry and traditional bangles that 
            celebrate your most precious moments. Each piece, a masterpiece of 
            artistry and heritage.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 opacity-0"
          >
            <Link to="/collections" className="btn-gold group">
              Explore Collection
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-outline-gold">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-8 bg-gold/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
