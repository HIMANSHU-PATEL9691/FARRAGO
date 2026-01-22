import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import craftsmanImg from '@/assets/craftsman.jpg';
import showroomImg from '@/assets/showroom.jpg';
import { Award, Users, Gem, Heart } from 'lucide-react';

const values = [
  {
    icon: Gem,
    title: 'Quality Craftsmanship',
    description: 'Every piece is meticulously handcrafted by our master artisans using traditional techniques refined over generations.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'All our gold and diamond jewelry comes with BIS hallmarking and IGI/GIA certification for your complete peace of mind.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'We believe in building lasting relationships. Our dedicated team ensures a personalized experience for every customer.',
  },
  {
    icon: Heart,
    title: 'Heritage & Tradition',
    description: 'We honor traditional designs while embracing contemporary aesthetics, creating jewelry that transcends generations.',
  },
];

const timeline = [
  { year: '1985', title: 'Foundation', description: 'FARRAGO Jewellers was established by Mr. Rajesh FARRAGO with a small workshop in Mumbai.' },
  { year: '1995', title: 'Expansion', description: 'Opened our first retail showroom in Zaveri Bazaar, the heart of Mumbai jewelry trade.' },
  { year: '2005', title: 'Innovation', description: 'Introduced CAD technology for custom designs while preserving traditional craftsmanship.' },
  { year: '2015', title: 'Recognition', description: 'Received the National Jewellery Award for Excellence in Design and Craftsmanship.' },
  { year: '2024', title: 'Digital Era', description: 'Launched our digital platform to serve customers across India while maintaining our boutique experience.' },
];

export default function About() {
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
            <span className="eyebrow mb-4 block">About FARRAGO</span>
            <h1 className="title-display mb-6">
              A Legacy of <span className="text-gold italic">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over three decades, FARRAGO Jewellers has been crafting timeless 
              pieces that celebrate life's most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={craftsmanImg}
                  alt="Master craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow mb-4 block">Our Story</span>
              <h2 className="title-section mb-6">
                From Workshop to <span className="text-gold italic">Legacy</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 1985, Mr. Rajesh FARRAGO started with a simple dream – to create 
                  jewelry that would be cherished for generations. What began as a 
                  small workshop in the lanes of Mumbai has grown into one of the 
                  most trusted names in fine jewelry.
                </p>
                <p>
                  Our journey has been guided by an unwavering commitment to quality, 
                  authenticity, and customer satisfaction. Every piece that bears the 
                  FARRAGO name is a testament to our dedication to excellence.
                </p>
                <p>
                  Today, led by the third generation of the FARRAGO family, we continue 
                  to blend traditional craftsmanship with contemporary designs, creating 
                  jewelry that honors our heritage while embracing modern aesthetics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4 block"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="title-section"
            >
              What <span className="text-gold italic">Defines</span> Us
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card border border-border rounded-sm"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gold/30 rounded-full mb-6">
                  <value.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-lg font-serif font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4 block"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="title-section"
            >
              Milestones of <span className="text-gold italic">Excellence</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-gold text-accent-foreground font-serif font-semibold rounded-full">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow mb-4 block">Our Showroom</span>
              <h2 className="title-section mb-6">
                Where Dreams Become <span className="text-gold italic">Reality</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our elegantly designed showroom in Mumbai's historic Zaveri Bazaar 
                offers an immersive jewelry shopping experience. With private 
                consultation rooms, expert stylists, and an extensive collection, 
                we ensure every visit is memorable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're shopping for bridal jewelry, celebrating an anniversary, 
                or simply treating yourself, our team is dedicated to helping you 
                find the perfect piece that tells your story.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square overflow-hidden rounded-sm">
                <img
                  src={showroomImg}
                  alt="FARRAGO Jewellers showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
