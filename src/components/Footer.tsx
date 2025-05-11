
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Get a random quote from Marcus Aurelius
  const quotes = [
    "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "The happiness of your life depends upon the quality of your thoughts.",
    "Waste no more time arguing about what a good man should be. Be one.",
    "The best revenge is to be unlike him who performed the injury.",
    "If it is not right, do not do it; if it is not true, do not say it.",
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="bg-[#0A1A2F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png"
              alt="Taylab Logo" 
              className="h-8 w-auto mb-4 brightness-0 invert" 
            />
            <p className="text-gray-400 mb-4">
              The definitive system for character-driven leadership development.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Framework</h3>
            <ul className="space-y-2">
              <li><Link to="/framework" className="text-gray-300 hover:text-white">The 9 Virtues</Link></li>
              <li><Link to="/superpower-gate" className="text-gray-300 hover:text-white">Super-Power Gate</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/families/children" className="text-gray-300 hover:text-white">For Ages 6-12</Link></li>
              <li><Link to="/families/teens" className="text-gray-300 hover:text-white">For Ages 13-18</Link></li>
              <li><Link to="/institutions/schools" className="text-gray-300 hover:text-white">For Schools</Link></li>
              <li><Link to="/institutions/organizations" className="text-gray-300 hover:text-white">For Organizations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/manifesto" className="text-gray-300 hover:text-white">Manifesto</Link></li>
              <li><Link to="/method/process" className="text-gray-300 hover:text-white">Our Method</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Taylab. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm italic">
            "{randomQuote}" - Marcus Aurelius
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
