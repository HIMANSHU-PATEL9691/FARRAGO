import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bangleImg from '@/assets/bangle-1.jpg';
import necklaceImg from '@/assets/necklace-1.jpg';
import earringsImg from '@/assets/earrings-1.jpg';
import ringImg from '@/assets/ring-1.jpg';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 1,
    name: 'Bangles',
    description: 'Traditional & Contemporary',
    image: bangleImg,
    href: '/collections#bangles',
  },
  {
    id: 2,
    name: 'Necklaces',
    description: 'Statement Pieces',
    image: necklaceImg,
    href: '/collections#necklaces',
  },
  {
    id: 3,
    name: 'Earrings',
    description: 'Elegant Adornments',
    image: earringsImg,
    href: '/collections#earrings',
  },
  {
    id: 4,
    name: 'Rings',
    description: 'Symbol of Love',
    image: ringImg,
    href: '/collections#rings',
  },
];

export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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

      // Grid items stagger animation
      const items = gridRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-luxury">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="eyebrow mb-4 block">Our Collections</span>
          <h2 className="title-section">
            Discover Timeless <span className="text-gold italic">Beauty</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="opacity-0">
              <Link
                to={collection.href}
                className="group block relative overflow-hidden bg-card rounded-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-gold mb-1">
                        {collection.description}
                      </p>
                      <h3 className="text-xl font-serif font-medium">
                        {collection.name}
                      </h3>
                    </div>
                    <div className="p-2 border border-foreground/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="text-center mt-12 opacity-0">
          <Link to="/collections" className="btn-outline-gold">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
