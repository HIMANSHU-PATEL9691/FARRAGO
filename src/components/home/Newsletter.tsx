import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Successfully subscribed!',
      description: 'Thank you for joining our newsletter.',
    });
    setEmail('');
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="container-luxury">
        <div
          ref={contentRef}
          className="text-center max-w-2xl mx-auto opacity-0"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-medium text-gold mb-4 block">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-foreground mb-4">
            Join Our Exclusive Circle
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Be the first to know about new collections, exclusive offers, and 
            jewelry care tips delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-accent-foreground font-medium tracking-widest uppercase text-sm rounded-sm transition-all duration-300 hover:shadow-elegant flex items-center justify-center gap-2"
            >
              Subscribe
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
