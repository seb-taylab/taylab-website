
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import SEO from '@/components/SEO';

interface Question {
  id: number;
  text: string;
  answers: {
    text: string;
    virtue: string;
    virtueCode: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "When facing a tough decision, you...",
    answers: [
      { text: "Follow your gut", virtue: "Integrity", virtueCode: "诚" },
      { text: "Ask for advice", virtue: "Empathy", virtueCode: "仁" },
      { text: "Make a pros/cons list", virtue: "Reflection", virtueCode: "反思" }
    ]
  },
  {
    id: 2,
    text: "Your ideal Saturday involves...",
    answers: [
      { text: "Mastering a new skill", virtue: "Growth", virtueCode: "进" },
      { text: "Team volunteering", virtue: "Collaboration", virtueCode: "和" },
      { text: "Planning next month's goals", virtue: "Discipline", virtueCode: "律" }
    ]
  },
  {
    id: 3,
    text: "In group settings, you're known for...",
    answers: [
      { text: "Speaking up with new ideas", virtue: "Initiative", virtueCode: "创" },
      { text: "Listening before responding", virtue: "Respect", virtueCode: "敬" },
      { text: "Taking on challenging tasks", virtue: "Courage", virtueCode: "勇" }
    ]
  },
  {
    id: 4,
    text: "When obstacles arise, you typically...",
    answers: [
      { text: "Adapt your approach", virtue: "Growth", virtueCode: "进" },
      { text: "Seek support from others", virtue: "Collaboration", virtueCode: "和" },
      { text: "Focus harder on your goal", virtue: "Discipline", virtueCode: "律" }
    ]
  },
  {
    id: 5,
    text: "You gain the most satisfaction from...",
    answers: [
      { text: "Keeping your commitments", virtue: "Integrity", virtueCode: "诚" },
      { text: "Creating meaningful connections", virtue: "Empathy", virtueCode: "仁" },
      { text: "Building something new", virtue: "Initiative", virtueCode: "创" }
    ]
  }
];

// Define the archetypes based on virtue combinations
const archetypes = {
  "创进律": {
    title: "Relentless Creator",
    description: "You turn ideas into systems. Your ability to innovate with discipline makes you ideal for founders and entrepreneurial roles."
  },
  "诚敬和": {
    title: "Quiet Force",
    description: "You lead through trust and relationship building. Your integrity and empathy make you perfect for coaching and mentorship roles."
  },
  "勇责反思": {
    title: "Brave Guardian",
    description: "You stand up for what's right with thoughtful conviction. Your courage and responsibility make you effective in advocacy and leadership positions."
  },
  "default": {
    title: "Balanced Leader",
    description: "You show strength across multiple virtue dimensions. Your adaptable character makes you effective in diverse leadership situations."
  }
};

const VirtueAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [virtueCount, setVirtueCount] = useState<{ [key: string]: number }>({});
  const [archetype, setArchetype] = useState<{title: string, description: string}>({ title: '', description: '' });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswer = (questionId: number, virtueCode: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: virtueCode }));
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
    // Count occurrences of each virtue code
    const counts: { [key: string]: number } = {};
    
    Object.values(answers).forEach(virtueCode => {
      counts[virtueCode] = (counts[virtueCode] || 0) + 1;
    });
    
    setVirtueCount(counts);
    
    // Find top 3 virtues
    const topVirtues = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(entry => entry[0])
      .join('');
    
    // Match to archetype or use default
    const matchedArchetype = archetypes[topVirtues as keyof typeof archetypes] || archetypes.default;
    setArchetype(matchedArchetype);
    
    setShowResults(true);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your Virtue Blueprint has been sent to your email.");
    }, 1500);
  };

  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Discover Your Leadership Superpower | Taylab" 
        description="Take our quick assessment to discover your unique leadership virtue combination and unlock your true potential."
      />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4 text-[#0A1A2F]">
                Discover Your Leadership Superpower
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Talent gets you noticed. Character gets you trusted.
              </p>
            </div>
            
            {!showResults ? (
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8 text-center">
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
                    {questions[currentQuestion].answers.map((answer, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          answers[questions[currentQuestion].id] === answer.virtueCode 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleAnswer(questions[currentQuestion].id, answer.virtueCode)}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                            answers[questions[currentQuestion].id] === answer.virtueCode 
                              ? 'border-[#D4AF37] bg-[#D4AF37] text-white' 
                              : 'border-gray-300'
                          }`}>
                            {answers[questions[currentQuestion].id] === answer.virtueCode && <Check size={16} />}
                          </div>
                          <div>
                            <span className="font-medium">{answer.text}</span>
                            <span className="ml-2 text-sm text-gray-500">({answer.virtueCode} {answer.virtue})</span>
                          </div>
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
                    Your Leadership Superpower
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-[#0A1A2F]">
                    {archetype.title}
                  </h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-lg text-gray-700 mb-6">
                    {archetype.description}
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                    <h3 className="font-bold mb-3">Your Top Virtues:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(virtueCount)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 3)
                        .map(([code, count]) => (
                          <span key={code} className="px-3 py-1 bg-[#0A1A2F] text-white rounded-full text-sm">
                            {code}
                          </span>
                        ))}
                    </div>
                    
                    <h3 className="font-bold mt-6 mb-3">What This Means For You:</h3>
                    <p className="text-gray-700">
                      Your unique virtue combination gives you specific strengths in leadership situations. The Virtue Blueprint will show you how to leverage these strengths and address potential blind spots.
                    </p>
                  </div>
                  
                  <div className="bg-[#0A1A2F] text-white rounded-lg p-6">
                    <h3 className="font-bold mb-3">Download Your Virtue Blueprint</h3>
                    <p className="mb-4">
                      Get your personalized report with development activities and leadership insights based on your virtue profile.
                    </p>
                    
                    <form onSubmit={handleSubmitEmail} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-3 rounded-md border border-gray-300 flex-grow text-gray-800"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-6 py-3 bg-[#D4AF37] text-[#0A1A2F] font-semibold rounded-md hover:bg-opacity-90 transition-all ${isSubmitting ? 'opacity-75' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Download Now'}
                      </button>
                    </form>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <button 
                    onClick={() => {
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                      window.scrollTo(0, 0);
                    }}
                    className="text-[#0A1A2F] hover:text-[#D4AF37] font-medium inline-flex items-center"
                  >
                    <ArrowLeft className="mr-1" size={16} />
                    Retake Assessment
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VirtueAssessment;
