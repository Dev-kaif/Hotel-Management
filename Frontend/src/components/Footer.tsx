
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-gold">Luxe</span>
              <span className="ml-1">Haven</span>
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Experience luxury and comfort in every moment of your stay. Our hotel combines elegance with modern amenities to create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 fancy-border pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-gold transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-gold transition-colors">Book a Table</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-gold transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 fancy-border pb-2">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span>9:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 fancy-border pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span>123 Luxury Avenue, Prestige District, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <span>info@luxehaven.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Luxe Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
