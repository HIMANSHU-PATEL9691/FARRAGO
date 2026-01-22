import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import BridalSection from '@/components/home/BridalSection';
import Testimonials from '@/components/home/Testimonials';
import ShowroomPreview from '@/components/home/ShowroomPreview';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <Hero />
      
      {/* Section 2: Featured Collections */}
      <FeaturedCollections />
      
      {/* Section 3: About Preview */}
      <AboutPreview />
      
      {/* Section 4: Services Preview */}
      <ServicesPreview />
      
      {/* Section 5: Bridal Collection */}
      <BridalSection />
      
      {/* Section 6: Testimonials */}
      <Testimonials />
      
      {/* Section 7: Showroom Preview */}
      <ShowroomPreview />
      
      {/* Section 8: Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
