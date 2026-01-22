import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gem, Wrench, RefreshCw, Award, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Gem,
    title: 'Custom Design',
    description: 'Bring your vision to life with our bespoke jewelry design service. Our artisans work closely with you to create unique pieces.',
    href: '/services#custom',
  },
  {
    icon: Wrench,
    title: 'Jewelry Repair',
    description: 'Expert restoration and repair services to bring your treasured pieces back to their original glory.',
    href: '/services#repair',
  },
  {
    icon: RefreshCw,
    title: 'Gold Exchange',
    description: 'Trade in your old gold jewelry for new designs or cash. Fair pricing with transparent evaluation.',
    href: '/services#exchange',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'All our jewelry comes with certified hallmarking and authenticity certificates for your peace of mind.',
    href: '/services#certification',
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Service cards stagger
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-luxury">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="eyebrow mb-4 block">Our Services</span>
          <h2 className="title-section max-w-2xl mx-auto">
            Beyond <span className="text-gold italic">Jewelry</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="opacity-0">
              <Link
                to={service.href}
                className="group block p-8 bg-card border border-border rounded-sm transition-all duration-500 hover:shadow-elegant hover:border-gold/30 h-full"
              >
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-full mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <service.icon 
                    size={24} 
                    className="text-gold group-hover:text-accent-foreground transition-colors" 
                  />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm text-gold group-hover:underline">
                  Learn More
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
