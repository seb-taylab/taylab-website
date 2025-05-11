
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the virtue data
const virtues = [
  { 
    id: 'integrity',
    name: 'Integrity 诚', 
    definition: 'Speak truth. Keep your word.',
    tier1Example: 'Return a lost wallet',
    tier4Example: 'Blow the whistle despite personal cost',
    icon: '🔒'
  },
  { 
    id: 'courage',
    name: 'Courage 勇', 
    definition: 'Face fears. Take calculated risks.',
    tier1Example: 'Speak up in class',
    tier4Example: 'Stand for principles against peer pressure',
    icon: '🛡️'
  },
  { 
    id: 'discipline',
    name: 'Discipline 律', 
    definition: 'Maintain focus. Follow through consistently.',
    tier1Example: 'Complete daily study goals',
    tier4Example: 'Persist through a year-long project',
    icon: '⏰'
  },
  { 
    id: 'empathy',
    name: 'Empathy 仁', 
    definition: 'Understand others. Show compassion.',
    tier1Example: 'Listen without interrupting',
    tier4Example: 'Advocate for marginalized groups',
    icon: '❤️'
  },
  { 
    id: 'respect',
    name: 'Respect 敬', 
    definition: 'Honor boundaries. Acknowledge merit.',
    tier1Example: 'Use proper titles for elders',
    tier4Example: 'Elevate voices different from your own',
    icon: '🙏'
  },
  { 
    id: 'collaboration',
    name: 'Collaboration 和', 
    definition: 'Work together. Build consensus.',
    tier1Example: 'Share credit for team wins',
    tier4Example: 'Lead diverse groups toward common goals',
    icon: '🤝'
  },
  { 
    id: 'growth',
    name: 'Growth 进', 
    definition: 'Embrace challenges. Seek improvement.',
    tier1Example: 'Ask for feedback',
    tier4Example: 'Transform criticism into excellence',
    icon: '🌱'
  },
  { 
    id: 'responsibility',
    name: 'Responsibility 责', 
    definition: 'Own outcomes. Take initiative.',
    tier1Example: 'Admit mistakes promptly',
    tier4Example: 'Lead recovery from team failures',
    icon: '🗝️'
  },
  { 
    id: 'initiative',
    name: 'Initiative 创', 
    definition: 'Start action. Drive innovation.',
    tier1Example: 'Propose solutions, not problems',
    tier4Example: 'Launch ventures that create value',
    icon: '⚡'
  }
];

const VirtueGrid = () => {
  const [activeVirtue, setActiveVirtue] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="virtues">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#0A1A2F] text-white rounded-full text-sm font-medium mb-4">
            OUR FRAMEWORK
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-[#0A1A2F]">
            We Don't Build Resumes. <br />We Architect Legacies.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The 9-Virtue Grid forms the foundation of our leadership development system, 
            cultivating character virtues essential for meaningful impact.
          </p>
        </div>

        {/* Virtue Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-3 gap-4">
            {virtues.map((virtue) => (
              <motion.div
                key={virtue.id}
                className={`aspect-square p-6 rounded-lg border-2 cursor-pointer flex flex-col items-center justify-center text-center transition-all ${
                  activeVirtue === virtue.id
                    ? "border-[#D4AF37] bg-white shadow-lg"
                    : "border-gray-200 bg-white hover:border-[#D4AF37]"
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveVirtue(virtue.id === activeVirtue ? null : virtue.id)}
              >
                <div className="text-3xl mb-3">{virtue.icon}</div>
                <h3 className="font-semibold text-lg text-[#0A1A2F]">{virtue.name}</h3>
                {activeVirtue === virtue.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 text-sm"
                  >
                    <p className="text-gray-700">{virtue.definition}</p>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">Tier 1:</span> {virtue.tier1Example}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        <span className="font-semibold">Tier 4:</span> {virtue.tier4Example}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/virtue-assessment" className="inline-flex items-center px-6 py-3 bg-[#0A1A2F] text-white rounded-md hover:bg-opacity-90 transition-all group">
            Assess Your Virtue Level
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VirtueGrid;
