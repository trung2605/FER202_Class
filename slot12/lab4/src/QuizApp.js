// QuizApp.js
import React, { useState } from 'react'; // Import useState
import Question from './Question';
import Result from './Result';
import AddQuestionForm from './AddQuestionForm'; // Import component mới
import { QuizProvider, useQuiz } from './QuizContext';
import { Button, Alert } from 'react'; // Import Button và Alert từ react-native

// Đây là component chứa logic hiển thị chính, nằm bên trong QuizProvider
const QuizAppContent = () => {
  const {
    questions,
    currentQuestionIndex,
    score,
    quizEnd,
    isLoading,
    error,
    fetchQuestions,
    totalQuestions,
    currentQuestion,
    handleRestartQuiz // Cần hàm restart để sử dụng khi quay lại từ AddQuestionForm
  } = useQuiz();

  // Thêm state để quản lý chế độ xem (quiz hay add question)
  const [viewMode, setViewMode] = useState('quiz'); // 'quiz' hoặc 'addQuestion'

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-inter">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center text-2xl font-bold text-blue-700 flex items-center justify-center space-x-4">
          <svg className="animate-spin-slow h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading Questions... 🚀</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-inter">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center text-xl font-bold text-red-600">
          Error: {error} <br/>
          <button
            onClick={fetchQuestions}
            className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0 && !isLoading && !error && viewMode === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-inter">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center text-xl font-bold text-gray-700">
          No questions available. Try adding some!
          <button
            onClick={() => setViewMode('addQuestion')}
            className="mt-4 py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            Add Question
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-3xl border border-blue-200 transform transition-all duration-300 ease-in-out hover:scale-[1.01]">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-8 drop-shadow-md">
          🧠 Awesome Quiz! 🚀
        </h1>

        <div className="text-center mb-6">
          {viewMode === 'quiz' ? (
            <button
              onClick={() => setViewMode('addQuestion')}
              className="py-2 px-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Add New Question
            </button>
          ) : (
            <button
              onClick={() => {
                setViewMode('quiz');
                handleRestartQuiz();
              }}
              className="py-2 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Back to Quiz
            </button>
          )}
        </div>

        {/* Bọc các component có thể chuyển đổi trong một div chung để áp dụng hiệu ứng */}
        <div className="animate-fade-in"> {/* <-- Áp dụng hiệu ứng ở đây */}
          {viewMode === 'quiz' ? (
            quizEnd ? (
              <Result />
            ) : (
              <>
                <div className="text-center mb-6 text-gray-700 font-semibold text-lg sm:text-xl">
                  Question <span className="font-bold text-blue-600">{currentQuestionIndex + 1}</span> of <span className="font-bold text-purple-600">{totalQuestions}</span>
                </div>
                <Question />
                <div className="mt-8 text-center text-gray-600 text-sm sm:text-base">
                  Current Score: <span className="font-bold text-green-600 text-lg">{score}</span>
                </div>
              </>
            )
          ) : (
            <AddQuestionForm
              onQuestionAdded={() => {
                setViewMode('quiz');
                handleRestartQuiz();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Vẫn là Wrapper để cung cấp Context
const QuizApp = () => (
  <QuizProvider>
    <QuizAppContent />
  </QuizProvider>
);

export default QuizApp;