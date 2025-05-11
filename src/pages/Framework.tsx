
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import VirtueGrid from '@/components/VirtueGrid';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const Framework = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="The Taylab Framework | 9 Virtues of Leadership" 
        description="Explore the 9-virtue grid that forms the foundation of our character-driven leadership development system."
      />
      
      <div className="pt-24 pb-16 bg-[#0A1A2F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              We Don't Build Resumes.
              <br />
              We Architect Legacies.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The Taylab Framework provides a structured approach to developing leadership virtues that last a lifetime.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Virtue Grid Section */}
      <VirtueGrid />
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-[#0A1A2F]">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our three-step process transforms potential into leadership excellence.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'Assess',
                  description: 'Begin with the Virtue Vault onboarding to identify your strengths and areas for growth.',
                  icon: '📋',
                  color: 'bg-green-50 border-green-200',
                  iconColor: 'text-green-700'
                },
                {
                  title: 'Cultivate',
                  description: 'Follow your personalized growth plan with challenges and mentorship to level up each virtue.',
                  icon: '🌱',
                  color: 'bg-blue-50 border-blue-200',
                  iconColor: 'text-blue-700'
                },
                {
                  title: 'Certify',
                  description: 'Unlock the Super-Power Gate as you demonstrate mastery in your virtue tiers.',
                  icon: '🏆',
                  color: 'bg-amber-50 border-amber-200',
                  iconColor: 'text-amber-700'
                }
              ].map((step, index) => (
                <motion.div 
                  key={step.title}
                  className={`border-2 ${step.color} rounded-lg p-6 text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-4xl mb-4 ${step.iconColor}`}>{step.icon}</div>
                  <h3 className="text-2xl font-playfair font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Virtue Archetypes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-[#0A1A2F]">
              Find Your Virtue Archetype
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover your natural leadership style based on your virtue strengths.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'The Sage',
                  description: 'Personal Mastery-dominant archetype excels in self-discipline, reflection, and integrity.',
                  examples: 'Coaches, Philosophers, Mentors',
                  color: 'bg-purple-50 border-purple-200 hover:shadow-purple-100',
                  iconColor: 'text-purple-700'
                },
                {
                  title: 'The Diplomat',
                  description: 'Interpersonal Harmony-dominant archetype excels in collaboration, empathy, and respect.',
                  examples: 'Community Organizers, Mediators, Team Leaders',
                  color: 'bg-blue-50 border-blue-200 hover:shadow-blue-100',
                  iconColor: 'text-blue-700'
                },
                {
                  title: 'The Pioneer',
                  description: 'Enterprise Impact-dominant archetype excels in initiative, responsibility, and growth.',
                  examples: 'Founders, Activists, Innovators',
                  color: 'bg-orange-50 border-orange-200 hover:shadow-orange-100',
                  iconColor: 'text-orange-700'
                }
              ].map((archetype, index) => (
                <motion.div 
                  key={archetype.title}
                  className={`border ${archetype.color} rounded-lg p-6 transition-all hover:shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-playfair font-bold mb-3">{archetype.title}</h3>
                  <p className="text-gray-600 mb-4">{archetype.description}</p>
                  <p className="text-sm font-semibold">{archetype.examples}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/quiz" 
                className="inline-flex items-center px-6 py-3 bg-[#0A1A2F] text-white rounded-md hover:bg-opacity-90 transition-all group"
              >
                Take the Archetype Quiz
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* White Paper CTA */}
      <section className="py-20 bg-[#0A1A2F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Leadership Isn't One-Dimensional
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              The 9 Virtues That Separate Performers From Pioneers
            </p>
            <a 
              href="#" 
              className="px-8 py-4 bg-[#D4AF37] text-[#0A1A2F] font-bold rounded-md hover:bg-opacity-90 transition-all inline-flex items-center"
              onClick={(e) => {
                e.preventDefault();
                // Would connect to email capture in a real implementation
                alert("Thank you for your interest! The white paper would be sent to your email.");
              }}
            >
              Download the Virtue-Talent White Paper
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Framework;
