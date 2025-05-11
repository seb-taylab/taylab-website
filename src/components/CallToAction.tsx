
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-[#0A1A2F]">
            The Future Belongs to the Disciplined
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to discover your leadership virtues and unlock your true potential? Take the first step on your character development journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-3">For Teens & Young Adults</h3>
              <p className="text-gray-600 mb-4">
                Discover your leadership superpower and build character virtues that set you apart.
              </p>
              <Link to="/virtue-assessment" className="inline-flex items-center text-[#0A1A2F] font-semibold group">
                Take the Virtue Assessment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-3">For Parents & Educators</h3>
              <p className="text-gray-600 mb-4">
                Learn how to cultivate lasting virtues and leadership skills in the next generation.
              </p>
              <Link to="/consultation" className="inline-flex items-center text-[#0A1A2F] font-semibold group">
                Book a Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
