
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import SEO from '@/components/SEO';

interface Question {
  id: number;
  text: string;
  virtueCategory: 'sage' | 'diplomat' | 'pioneer';
}

const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a difficult decision, I typically...",
    virtueCategory: 'sage'
  },
  {
    id: 2,
    text: "In group projects, I naturally...",
    virtueCategory: 'diplomat'
  },
  {
    id: 3,
    text: "When I see a problem that needs solving, I...",
    virtueCategory: 'pioneer'
  },
  {
    id: 4,
    text: "I feel most fulfilled when I've...",
    virtueCategory: 'sage'
  },
  {
    id: 5,
    text: "When someone disagrees with me, I...",
    virtueCategory: 'diplomat'
  },
  {
    id: 6,
    text: "When starting something new, I...",
    virtueCategory: 'pioneer'
  },
  {
    id: 7,
    text: "I gain respect from others mostly through my...",
    virtueCategory: 'sage'
  },
  {
    id: 8,
    text: "In conflict situations, I tend to...",
    virtueCategory: 'diplomat'
  },
  {
    id: 9,
    text: "My approach to goals is...",
    virtueCategory: 'pioneer'
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    sage: number;
    diplomat: number;
    pioneer: number;
    primaryArchetype: string;
  }>({ sage: 0, diplomat: 0, pioneer: 0, primaryArchetype: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const scoresByCategory = {
      sage: 0,
      diplomat: 0,
      pioneer: 0
    };

    // Calculate scores for each virtue category
    questions.forEach(question => {
      const answer = answers[question.id] || 0;
      scoresByCategory[question.virtueCategory] += answer;
    });

    // Determine primary archetype
    let primaryArchetype = '';
    if (scoresByCategory.sage >= scoresByCategory.diplomat && scoresByCategory.sage >= scoresByCategory.pioneer) {
      primaryArchetype = 'The Sage';
    } else if (scoresByCategory.diplomat >= scoresByCategory.sage && scoresByCategory.diplomat >= scoresByCategory.pioneer) {
      primaryArchetype = 'The Diplomat';
    } else {
      primaryArchetype = 'The Pioneer';
    }

    setResults({
      sage: scoresByCategory.sage,
      diplomat: scoresByCategory.diplomat,
      pioneer: scoresByCategory.pioneer,
      primaryArchetype
    });

    setShowResults(true);
  };

  const archetypeDescriptions = {
    'The Sage': {
      description: 'You excel in personal mastery, with strengths in self-discipline, reflection, and integrity. Your leadership is marked by wisdom and principled decision-making.',
      virtues: ['Integrity 诚', 'Discipline 律', 'Growth 进'],
      careers: 'Coaches, Teachers, Philosophers, Mentors'
    },
    'The Diplomat': {
      description: 'You excel in interpersonal harmony, with strengths in empathy, respect, and collaboration. Your leadership brings people together and builds consensus.',
      virtues: ['Empathy 仁', 'Respect 敬', 'Collaboration 和'],
      careers: 'Community Builders, Mediators, Team Leaders, Counselors'
    },
    'The Pioneer': {
      description: 'You excel in enterprise impact, with strengths in courage, responsibility, and initiative. Your leadership drives innovation and creates meaningful change.',
      virtues: ['Courage 勇', 'Responsibility 责', 'Initiative 创'],
      careers: 'Founders, Activists, Innovators, Entrepreneurs'
    }
  };

  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Virtue Archetype Quiz | Taylab" 
        description="Discover your leadership virtue archetype with our quick assessment. Are you a Sage, Diplomat, or Pioneer?"
      />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {!showResults ? (
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-playfair font-bold mb-4 text-[#0A1A2F]">
                    Virtue Archetype Quiz
                  </h1>
                  <p className="text-gray-600">
                    Answer the questions below to discover your leadership virtue archetype.
                  </p>
                  
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-6">
                    <div 
                      className="bg-[#D4AF37] h-2 rounded-full"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-6">
                    {questions[currentQuestion].text}
                  </h2>
                  
                  <div className="space-y-3">
                    {[
                      { value: 1, label: "Strongly Disagree" },
                      { value: 2, label: "Disagree" },
                      { value: 3, label: "Neutral" },
                      { value: 4, label: "Agree" },
                      { value: 5, label: "Strongly Agree" },
                    ].map((option) => (
                      <div 
                        key={option.value} 
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          answers[questions[currentQuestion].id] === option.value 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                            answers[questions[currentQuestion].id] === option.value 
                              ? 'border-[#D4AF37] bg-[#D4AF37] text-white' 
                              : 'border-gray-300'
                          }`}>
                            {answers[questions[currentQuestion].id] === option.value && <Check size={16} />}
                          </div>
                          <span>{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  {currentQuestion > 0 ? (
                    <button 
                      className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all inline-flex items-center"
                      onClick={prevQuestion}
                    >
                      <ArrowLeft className="mr-2" size={18} />
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  <button 
                    className={`px-6 py-3 bg-[#0A1A2F] text-white rounded-md hover:bg-opacity-90 transition-all inline-flex items-center ${
                      !answers[questions[currentQuestion].id] ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={nextQuestion}
                    disabled={!answers[questions[currentQuestion].id]}
                  >
                    {currentQuestion < questions.length - 1 ? 'Next' : 'See Results'}
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </motion.div>
            ) : (
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
                    {archetypeDescriptions[results.primaryArchetype as keyof typeof archetypeDescriptions].description}
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                    <h3 className="font-bold mb-3">Your Key Virtues:</h3>
                    <div className="flex flex-wrap gap-2">
                      {archetypeDescriptions[results.primaryArchetype as keyof typeof archetypeDescriptions].virtues.map(virtue => (
                        <span key={virtue} className="px-3 py-1 bg-[#0A1A2F] text-white rounded-full text-sm">
                          {virtue}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-bold mt-6 mb-3">Career Alignments:</h3>
                    <p className="text-gray-700">
                      {archetypeDescriptions[results.primaryArchetype as keyof typeof archetypeDescriptions].careers}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-bold mb-4">Your Archetype Breakdown:</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">The Sage</span>
                          <span>{Math.round((results.sage / (questions.length * 5)) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                          <div 
                            className="bg-purple-500 h-3 rounded-full"
                            style={{ width: `${(results.sage / (questions.length * 5)) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">The Diplomat</span>
                          <span>{Math.round((results.diplomat / (questions.length * 5)) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                          <div 
                            className="bg-blue-500 h-3 rounded-full"
                            style={{ width: `${(results.diplomat / (questions.length * 5)) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">The Pioneer</span>
                          <span>{Math.round((results.pioneer / (questions.length * 5)) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                          <div 
                            className="bg-orange-500 h-3 rounded-full"
                            style={{ width: `${(results.pioneer / (questions.length * 5)) * 100}%` }}
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
                      onClick={() => {
                        setShowResults(false);
                        setCurrentQuestion(0);
                        setAnswers({});
                        window.scrollTo(0, 0);
                      }}
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Quiz;
