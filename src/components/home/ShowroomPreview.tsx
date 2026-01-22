import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import showroomImg from '@/assets/showroom.jpg';
import { MapPin, Clock, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ShowroomPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content slide in
      gsap.fromTo(
        contentRef.current,
        { x: -80, opacity: 0 },
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

      // Image slide in with scale
      gsap.fromTo(
        imageRef.current,
        { x: 80, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className="opacity-0">
            <span className="eyebrow mb-4 block">Visit Us</span>
            <h2 className="title-section mb-6">
              Experience <span className="text-gold italic">Luxury</span> In Person
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Step into our elegantly designed showroom and immerse yourself in 
              the world of fine jewelry. Our expert consultants are ready to help 
              you find the perfect piece for every occasion.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Jewellers Street, Zaveri Bazaar<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full flex-shrink-0">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Store Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Book Appointment</h4>
                  <p className="text-muted-foreground">
                    +919691365052<br />
                    patelelectronics888@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="aspect-square overflow-hidden rounded-sm">
              <img
                src={showroomImg}
                alt="FARRAGO Jewellers showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
