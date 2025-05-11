
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const ErrorPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Page Not Found | Taylab" 
        description="We couldn't find the page you're looking for, but your virtue journey continues."
      />
      
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6">
        <motion.div 
          className="w-full max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            {/* Placeholder for SVG illustration - would be replaced with actual SVG */}
            <div className="w-40 h-40 mx-auto">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#0A1A2F" />
                <path d="M30 70 L70 30 M30 30 L70 70" stroke="#D4AF37" strokeWidth="5" />
                <path 
                  d="M50 20 L80 50 L50 80 L20 50 Z" 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-[#0A1A2F]">
            Even the disciplined get lost sometimes
          </h1>
          
          <div className="mb-8 text-lg">
            <p className="mb-2">
              Page <span className="font-semibold text-red-600">'{location.pathname}'</span> doesn't exist...
            </p>
            <p className="text-gray-700">
              But your potential does. Here's how to get back:
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="px-6 py-3 bg-[#0A1A2F] text-white rounded-md hover:bg-opacity-90 transition-all"
            >
              Return Home
            </Link>
            <Link 
              to="/virtue-assessment"
              className="px-6 py-3 border border-[#0A1A2F] text-[#0A1A2F] rounded-md hover:bg-gray-50 transition-all"
            >
              Explore Virtues
            </Link>
            <a 
              href="mailto:tech@taylab.com"
              className="px-6 py-3 text-gray-700 underline hover:text-[#0A1A2F] transition-all"
            >
              Report Issue
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ErrorPage;
