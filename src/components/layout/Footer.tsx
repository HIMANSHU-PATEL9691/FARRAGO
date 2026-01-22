import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  collections: [
    { name: 'Bangles', path: '/collections#bangles' },
    { name: 'Necklaces', path: '/collections#necklaces' },
    { name: 'Earrings', path: '/collections#earrings' },
    { name: 'Rings', path: '/collections#rings' },
    { name: 'Bridal Sets', path: '/collections#bridal' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Store Locator', path: '/contact#showroom' },
  ],
  services: [
    { name: 'Custom Design', path: '/services#custom' },
    { name: 'Jewelry Repair', path: '/services#repair' },
    { name: 'Gold Exchange', path: '/services#exchange' },
    { name: 'Certification', path: '/services#certification' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif font-semibold text-gold mb-6">
              FARRAGO
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting timeless elegance since 1985. Each piece tells a story of 
              heritage, artistry, and uncompromising quality.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-sm tracking-widest uppercase font-medium mb-6">
              Collections
            </h3>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-widest uppercase font-medium mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase font-medium mb-6">
              Visit Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span>
                Address: Ganesh Ward Kareli High School Road, Kareli Main Rd, Kareli, Madhya Pradesh 487221
                </span>
              </li>
              <li>
                <a
                  href="tel:+919691365052"
                  className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <Phone size={18} className="text-gold" />
                  +919691365052
                </a>
              </li>
              <li>
                <a
                  href="mailto:patelelectronics888@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <Mail size={18} className="text-gold" />
                    patelelectronics888@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 FARRAGO Jewellers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
