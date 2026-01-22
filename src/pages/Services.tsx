import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Gem, Wrench, RefreshCw, Award, Sparkles, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'custom',
    icon: Gem,
    title: 'Custom Design',
    shortDescription: 'Bring your vision to life',
    description: 'Our bespoke design service allows you to create a one-of-a-kind piece that perfectly captures your vision. From engagement rings to heirloom pieces, we collaborate closely with you throughout the entire process.',
    features: [
      'Personal design consultation',
      '3D CAD rendering and visualization',
      'Selection of premium gemstones',
      'Multiple revision rounds',
      'Certificate of authenticity',
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'Share your ideas and inspirations with our design team' },
      { step: '02', title: 'Design', desc: 'We create detailed sketches and 3D models for your approval' },
      { step: '03', title: 'Crafting', desc: 'Master artisans bring your design to life with precision' },
      { step: '04', title: 'Delivery', desc: 'Receive your certified piece in elegant packaging' },
    ],
  },
  {
    id: 'repair',
    icon: Wrench,
    title: 'Jewelry Repair',
    shortDescription: 'Expert restoration services',
    description: 'Our skilled craftsmen can restore your treasured pieces to their original glory. From simple repairs to complex restorations, we handle each piece with the utmost care and expertise.',
    features: [
      'Ring resizing and reshaping',
      'Stone replacement and setting',
      'Chain and clasp repair',
      'Polishing and refinishing',
      'Antique jewelry restoration',
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Detailed examination and repair quote' },
      { step: '02', title: 'Approval', desc: 'Review and approve the repair plan' },
      { step: '03', title: 'Restoration', desc: 'Expert repair by our craftsmen' },
      { step: '04', title: 'Quality Check', desc: 'Thorough inspection before return' },
    ],
  },
  {
    id: 'exchange',
    icon: RefreshCw,
    title: 'Gold Exchange',
    shortDescription: 'Fair and transparent pricing',
    description: 'Trade in your old gold jewelry for new designs or receive cash at competitive rates. Our transparent evaluation process ensures you get the best value for your precious metals.',
    features: [
      'Instant purity testing',
      'Market-linked pricing',
      'No hidden deductions',
      'Exchange for new designs',
      'Immediate payment option',
    ],
    process: [
      { step: '01', title: 'Bring Jewelry', desc: 'Visit us with your old gold pieces' },
      { step: '02', title: 'Testing', desc: 'Purity testing using advanced technology' },
      { step: '03', title: 'Valuation', desc: 'Fair price based on current rates' },
      { step: '04', title: 'Exchange', desc: 'Choose new designs or receive payment' },
    ],
  },
  {
    id: 'certification',
    icon: Award,
    title: 'Certification',
    shortDescription: 'Verified authenticity',
    description: 'All our jewelry comes with comprehensive certification to guarantee authenticity and quality. We partner with leading certification bodies to ensure your purchase is genuine.',
    features: [
      'BIS hallmarking for gold',
      'IGI/GIA diamond certification',
      'Detailed grading reports',
      'Gemstone authenticity certificates',
      'Insurance valuation documents',
    ],
    process: [
      { step: '01', title: 'Testing', desc: 'Rigorous quality and purity testing' },
      { step: '02', title: 'Grading', desc: 'Expert evaluation of gemstones' },
      { step: '03', title: 'Documentation', desc: 'Comprehensive certification issued' },
      { step: '04', title: 'Registration', desc: 'Digital record for your reference' },
    ],
  },
];

const additionalServices = [
  {
    icon: Sparkles,
    title: 'Jewelry Cleaning',
    description: 'Professional cleaning and polishing to restore the brilliance of your pieces.',
  },
  {
    icon: Shield,
    title: 'Insurance Valuation',
    description: 'Detailed appraisal documents for insurance purposes with market valuation.',
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="eyebrow mb-4 block">Our Services</span>
            <h1 className="title-display mb-6">
              Beyond <span className="text-gold italic">Jewelry</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We offer comprehensive jewelry services to ensure your precious pieces 
              remain as beautiful as the day you acquired them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="w-20 h-20 mx-auto flex items-center justify-center border border-gold/30 rounded-full mb-6">
                  <service.icon size={36} className="text-gold" />
                </div>
                <span className="eyebrow mb-4 block">{service.shortDescription}</span>
                <h2 className="title-section mb-6">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {service.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
              >
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-background border border-border rounded-sm"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-center font-serif text-xl mb-8">Our Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {service.process.map((item, i) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-gold text-accent-foreground font-serif font-semibold rounded-full mb-4">
                        {item.step}
                      </div>
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                      {i < service.process.length - 1 && (
                        <ArrowRight className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-gold/30" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4 block"
            >
              Also Available
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="title-section"
            >
              Additional <span className="text-gold italic">Services</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-background border border-border rounded-sm text-center"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center border border-gold/30 rounded-full mb-6">
                  <service.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-serif font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="btn-gold">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
