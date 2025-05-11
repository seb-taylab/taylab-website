
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Question } from '@/types/quiz';

interface QuizQuestionProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | undefined;
  onAnswerSelect: (questionId: number, value: number) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
}

const QuizQuestion = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNextQuestion,
  onPreviousQuestion
}: QuizQuestionProps) => {
  return (
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
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">
          {question.text}
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
                selectedAnswer === option.value 
                  ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onAnswerSelect(question.id, option.value)}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                  selectedAnswer === option.value 
                    ? 'border-[#D4AF37] bg-[#D4AF37] text-white' 
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === option.value && <Check size={16} />}
                </div>
                <span>{option.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        {currentQuestionIndex > 0 ? (
          <button 
            className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all inline-flex items-center"
            onClick={onPreviousQuestion}
          >
            <ArrowLeft className="mr-2" size={18} />
            Previous
          </button>
        ) : (
          <div></div>
        )}
        
        <button 
          className={`px-6 py-3 bg-[#0A1A2F] text-white rounded-md hover:bg-opacity-90 transition-all inline-flex items-center ${
            !selectedAnswer ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={onNextQuestion}
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'See Results'}
          <ArrowRight className="ml-2" size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
