
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResults from '@/components/quiz/QuizResults';
import { questions, archetypeDescriptions } from '@/data/quizData';
import { QuizResultsType } from '@/types/quiz';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QuizResultsType>({ 
    sage: 0, 
    diplomat: 0, 
    pioneer: 0, 
    primaryArchetype: '' 
  });

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

  const handleRetakeQuiz = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setAnswers({});
    window.scrollTo(0, 0);
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
              <QuizQuestion
                question={questions[currentQuestion]}
                currentQuestionIndex={currentQuestion}
                totalQuestions={questions.length}
                selectedAnswer={answers[questions[currentQuestion].id]}
                onAnswerSelect={handleAnswer}
                onNextQuestion={nextQuestion}
                onPreviousQuestion={prevQuestion}
              />
            ) : (
              <QuizResults
                results={results}
                archetypeDescriptions={archetypeDescriptions}
                onRetakeQuiz={handleRetakeQuiz}
              />
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Quiz;
