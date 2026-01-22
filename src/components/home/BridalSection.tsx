import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bridalImg from '@/assets/bridal-set.jpg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Complete bridal sets with matching pieces',
  'Customization to match your outfit',
  'Personal styling consultation',
  'Flexible payment options',
];

export default function BridalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content animation
      const contentElements = contentRef.current?.children;
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div ref={imageRef} className="absolute inset-0">
        <img
          src={bridalImg}
          alt="Bridal jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container-luxury py-20">
        <div ref={contentRef} className="max-w-xl">
          <span className="eyebrow mb-4 block opacity-0">Bridal Collection</span>
          
          <h2 className="title-section mb-6 opacity-0">
            Make Your Special Day{' '}
            <span className="text-gold italic">Unforgettable</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8 opacity-0">
            Our bridal collection features exquisite sets crafted for the most 
            important day of your life. From traditional temple jewelry to modern 
            diamond sets, find the perfect pieces to complement your bridal look.
          </p>

          <ul className="space-y-3 mb-10 opacity-0">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                {item}
              </li>
            ))}
          </ul>

          <div className="opacity-0">
            <Link to="/collections#bridal" className="btn-gold group">
              View Bridal Collection
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
