import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';
import showroomImg from '@/assets/showroom.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Hero animation
    const heroCtx = gsap.context(() => {
      const children = heroRef.current?.children;
      if (children) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }
    }, heroRef);

    // Form section animations
    const formCtx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, formSectionRef);

    return () => {
      heroCtx.revert();
      formCtx.revert();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent successfully!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <div ref={heroRef} className="max-w-3xl">
            <span className="eyebrow mb-4 block opacity-0">Contact Us</span>
            <h1 className="title-display mb-6 opacity-0">
              Let's Create Something <span className="text-gold italic">Beautiful</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0">
              Have a question or want to schedule a consultation? We would love to 
              hear from you. Reach out and our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formSectionRef} className="section-padding bg-card">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div ref={formRef} className="opacity-0">
              <h2 className="title-subsection mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="+919691365052"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="custom">Custom Design</option>
                      <option value="repair">Jewelry Repair</option>
                      <option value="exchange">Gold Exchange</option>
                      <option value="appointment">Book Appointment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full md:w-auto">
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="opacity-0">
              <h2 className="title-subsection mb-8">Visit Our Showroom</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full flex-shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Jewellers Street, Zaveri Bazaar<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full flex-shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+919691365052" className="hover:text-gold transition-colors">
                        +919691365052
                      </a>
                      <br />
                      <a href="tel:+912212345678" className="hover:text-gold transition-colors">
                        +91 22 1234 5678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full flex-shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:patelelectronics888@gmail.com" className="hover:text-gold transition-colors">
                        patelelectronics888@gmail.com
                      </a>
                      <br />
                      <a href="mailto:support@FARRAGO.com" className="hover:text-gold transition-colors">
                        support@FARRAGO.com
                      </a>
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
              </div>

              {/* Showroom Image */}
              <div id="showroom" className="aspect-video overflow-hidden rounded-sm">
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

      {/* Map Placeholder */}
      <section className="h-96 bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin size={48} className="text-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            Interactive map would be displayed here
          </p>
        </div>
      </section>
    </Layout>
  );
}
