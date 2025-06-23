// Result.jsx
import React from 'react';

// - score: Điểm số mà người dùng đạt được (number)
// - totalQuestions: Tổng số câu hỏi trong quiz (number)
// - onRestartQuiz: Một hàm callback sẽ được gọi khi người dùng muốn bắt đầu lại quiz.
const Result = ({ score, totalQuestions, onRestartQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg w-full max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
      <p className="text-xl text-gray-700 mb-6">
        You scored <span className="font-extrabold text-green-600">{score}</span> out of <span className="font-extrabold text-blue-600">{totalQuestions}</span> questions.
      </p>
      <button
        onClick={onRestartQuiz} 
        className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all duration-200 ease-in-out
                   transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
