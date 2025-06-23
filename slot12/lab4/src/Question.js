// Question.js
import React from 'react';
import { useQuiz } from './QuizContext'; 

const Question = () => {
  const { currentQuestion, handleAnswerOptionClick } = useQuiz();
  if (!currentQuestion) {
    return null; 
  }

   return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 animate-fade-in"> {/* Thêm fade-in cho cả Question */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center leading-relaxed">
        {currentQuestion.question}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option)}
            className="w-full bg-blue-100 text-blue-800 font-medium py-3 px-5 rounded-lg transition-all duration-300 ease-in-out text-lg text-left shadow-sm
                       hover:bg-blue-200 hover:scale-105 hover:shadow-md /* Hiệu ứng hover */
                       active:bg-blue-300 active:scale-100 /* Hiệu ứng khi nhấn */
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;