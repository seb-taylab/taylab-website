
import { motion } from 'framer-motion';
import { QuizResultsType, ArchetypeDescription } from '@/types/quiz';

interface QuizResultsProps {
  results: QuizResultsType;
  archetypeDescriptions: Record<string, ArchetypeDescription>;
  onRetakeQuiz: () => void;
}

const QuizResults = ({ 
  results, 
  archetypeDescriptions, 
  onRetakeQuiz 
}: QuizResultsProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 bg-[#D4AF37] text-[#0A1A2F] rounded-full text-sm font-medium mb-4">
          Your Results
        </div>
        <h1 className="text-3xl font-playfair font-bold mb-4 text-[#0A1A2F]">
          Your Primary Archetype:
        </h1>
        <h2 className="text-4xl font-playfair font-bold text-[#0A1A2F]">
          {results.primaryArchetype}
        </h2>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-6">
          {archetypeDescriptions[results.primaryArchetype].description}
        </p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold mb-3">Your Key Virtues:</h3>
          <div className="flex flex-wrap gap-2">
            {archetypeDescriptions[results.primaryArchetype].virtues.map(virtue => (
              <span key={virtue} className="px-3 py-1 bg-[#0A1A2F] text-white rounded-full text-sm">
                {virtue}
              </span>
            ))}
          </div>
          
          <h3 className="font-bold mt-6 mb-3">Career Alignments:</h3>
          <p className="text-gray-700">
            {archetypeDescriptions[results.primaryArchetype].careers}
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="font-bold mb-4">Your Archetype Breakdown:</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">The Sage</span>
                <span>{Math.round((results.sage / 15) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div 
                  className="bg-purple-500 h-3 rounded-full"
                  style={{ width: `${(results.sage / 15) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">The Diplomat</span>
                <span>{Math.round((results.diplomat / 15) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div 
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${(results.diplomat / 15) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">The Pioneer</span>
                <span>{Math.round((results.pioneer / 15) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div 
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: `${(results.pioneer / 15) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center border-t border-gray-200 pt-8">
        <h3 className="font-semibold mb-4">Ready to start your virtue journey?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="px-6 py-3 bg-[#D4AF37] text-[#0A1A2F] font-semibold rounded-md hover:bg-opacity-90 transition-all"
            onClick={() => {
              // Would connect to email capture in a real implementation
              alert("Thank you! Your detailed results and personalized plan would be sent to your email.");
            }}
          >
            Get My Detailed Results
          </button>
          <button 
            className="px-6 py-3 border border-[#0A1A2F] text-[#0A1A2F] font-semibold rounded-md hover:bg-gray-50 transition-all"
            onClick={onRetakeQuiz}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizResults;
