// Result.js
import React from 'react';
import { useQuiz } from './QuizContext'; // Import useQuiz

const Result = () => {
  const { score, totalQuestions, handleRestartQuiz } = useQuiz(); // Lấy từ Context

  const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(2) : 0;
  const message = score === totalQuestions ? "Perfect! 🎉" :
                  score >= totalQuestions / 2 ? "Well done! Keep practicing! 👍" :
                  "Good effort! Try again! 💪";

 return (
    <div className="text-center bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 animate-fade-in"> {/* Thêm fade-in */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 mb-4">
        Quiz Completed!
      </h2>
      <p className="text-xl sm:text-2xl text-gray-700 mb-3">
        You scored <span className="font-bold text-green-600">{score}</span> out of <span className="font-bold text-purple-600">{totalQuestions}</span> questions.
      </p>
      <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Your percentage: <span className="text-blue-600">{percentage}%</span>
      </p>
      <p className="text-xl sm:text-2xl text-gray-700 mb-8">
        {message}
      </p>
      <button
        onClick={handleRestartQuiz}
        className="w-full sm:w-auto py-3 px-8 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out
        transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Restart Quiz
      </button>
    </div>
  );  
};

export default Result;