
import { motion } from 'framer-motion';
import { ClipboardCheck, Target, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Assess',
      description: 'Begin with the Virtue Vault onboarding to identify your current strengths and areas for growth.',
      icon: ClipboardCheck,
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      title: 'Cultivate',
      description: 'Follow your personalized growth plan with challenges and mentorship to level up each virtue.',
      icon: Target,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Certify',
      description: 'Unlock the Super-Power Gate as you demonstrate mastery in your virtue tiers.',
      icon: Award,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#0A1A2F] text-white rounded-full text-sm font-medium mb-4">
            THE TAYLAB METHOD
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-[#0A1A2F]">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven three-step process transforms potential into leadership excellence through virtue cultivation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Steps */}
          <div className="relative">
            <div className="absolute top-24 left-0 w-full border-t-2 border-dashed border-gray-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 border-2`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-20 text-center">
            <div className="mb-8">
              <p className="text-2xl font-playfair text-[#0A1A2F]">
                "83% of Taylab teens report higher confidence in leadership roles."
              </p>
            </div>
            
            <div className="max-w-xl mx-auto p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png" 
                  alt="Student portrait" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-bold">Emma Chen</h4>
                  <p className="text-sm text-gray-500">Yale University, Class of 2025</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "My 'Relational Magnetism' badge got me into Yale. Admissions officers were impressed that I could demonstrate genuine leadership beyond just club titles."
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <a 
              href="#" 
              className="px-8 py-4 bg-[#0A1A2F] text-white rounded-md hover:bg-opacity-90 transition-all inline-flex items-center"
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
      </div>
    </section>
  );
};

export default HowItWorks;
