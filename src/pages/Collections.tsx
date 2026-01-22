import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import bangleImg from '@/assets/bangle-1.jpg';
import necklaceImg from '@/assets/necklace-1.jpg';
import earringsImg from '@/assets/earrings-1.jpg';
import ringImg from '@/assets/ring-1.jpg';
import bridalImg from '@/assets/bridal-set.jpg';

const categories = [
  {
    id: 'bangles',
    name: 'Bangles',
    description: 'Traditional & Contemporary Designs',
    image: bangleImg,
    details: 'From delicate daily wear to statement bridal pieces, our bangle collection encompasses the rich heritage of Indian craftsmanship. Each bangle is meticulously crafted using traditional techniques passed down through generations.',
    items: ['Gold Bangles', 'Diamond Bangles', 'Kundan Bangles', 'Antique Finish', 'Daily Wear', 'Bridal Sets'],
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Statement Pieces for Every Occasion',
    image: necklaceImg,
    details: 'Our necklace collection ranges from minimalist chains to elaborate bridal sets. Each piece is designed to enhance your natural beauty while making a statement that is uniquely yours.',
    items: ['Chokers', 'Long Necklaces', 'Pendant Sets', 'Temple Jewelry', 'Layered Designs', 'Bridal Haar'],
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Elegant Adornments',
    image: earringsImg,
    details: 'From traditional jhumkas to modern studs, our earring collection offers something for every style and occasion. Handcrafted with precision, each pair tells a story of artistry.',
    items: ['Jhumkas', 'Studs', 'Chandbalis', 'Hoops', 'Drop Earrings', 'Ear Cuffs'],
  },
  {
    id: 'rings',
    name: 'Rings',
    description: 'Symbols of Love & Commitment',
    image: ringImg,
    details: 'Whether it is an engagement ring, wedding band, or everyday piece, our rings are crafted to symbolize the most precious moments of your life. Each ring is a testament to eternal love.',
    items: ['Engagement Rings', 'Wedding Bands', 'Cocktail Rings', 'Stackable Rings', 'Statement Pieces', 'Custom Design'],
  },
  {
    id: 'bridal',
    name: 'Bridal Collection',
    description: 'Complete Wedding Sets',
    image: bridalImg,
    details: 'Our bridal collection is designed to make your special day truly unforgettable. Complete sets featuring necklaces, earrings, bangles, maang tikka, and more, crafted to complement traditional and modern bridal looks.',
    items: ['Complete Bridal Sets', 'Maang Tikka', 'Haath Phool', 'Payal', 'Kamarbandh', 'Custom Bridal'],
  },
];

export default function Collections() {
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
            <span className="eyebrow mb-4 block">Our Collections</span>
            <h1 className="title-display mb-6">
              Discover Our <span className="text-gold italic">Exquisite</span> Collections
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our carefully curated categories of fine jewelry, each piece 
              crafted with passion and precision by our master artisans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="container-luxury">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <span className="eyebrow mb-4 block">{category.description}</span>
                <h2 className="title-section mb-6">{category.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {category.details}
                </p>

                {/* Items Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center group"
                >
                  Inquire Now
                  <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
