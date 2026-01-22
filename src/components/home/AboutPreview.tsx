import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import craftsmanImg from '@/assets/craftsman.jpg';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '38+', label: 'Years of Excellence' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '100%', label: 'Certified Gold' },
  { value: '5', label: 'Generations of Craft' },
];

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from left
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Content slide in from right
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Stats counter animation
      const statItems = statsRef.current?.children;
      if (statItems) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-card">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={craftsmanImg}
                alt="Master craftsman creating jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-sm hidden md:block">
              <p className="text-2xl font-serif font-semibold text-accent-foreground">
                Since 1985
              </p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="opacity-0">
            <span className="eyebrow mb-4 block">Our Heritage</span>
            <h2 className="title-section mb-6">
              A Legacy of <span className="text-gold italic">Craftsmanship</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For over three decades, FARRAGO Jewellers has been the trusted name 
              in fine jewelry. Our master artisans combine traditional techniques 
              passed down through generations with contemporary designs to create 
              pieces that transcend time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every piece of jewelry we create tells a story – your story. From 
              engagement rings that mark the beginning of forever to bangles that 
              celebrate cultural traditions, we craft memories in gold.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left opacity-0">
                  <p className="text-2xl md:text-3xl font-serif font-semibold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-gold">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
