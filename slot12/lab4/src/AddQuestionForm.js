// AddQuestionForm.js
import React, { useState } from 'react';
import { useQuiz } from './QuizContext';

const AddQuestionForm = ({ onQuestionAdded }) => {
  const { addQuestion } = useQuiz();
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswer1, setIncorrectAnswer1] = useState('');
  const [incorrectAnswer2, setIncorrectAnswer2] = useState('');
  const [incorrectAnswer3, setIncorrectAnswer3] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionText || !correctAnswer || !incorrectAnswer1) {
      setMessage('Please fill in at least question, correct answer, and one incorrect answer.');
      setIsError(true);
      return;
    }

    const incorrectAnswers = [
      incorrectAnswer1,
      incorrectAnswer2,
      incorrectAnswer3
    ].filter(ans => ans.trim() !== ''); // Lọc bỏ các đáp án sai rỗng

    if (incorrectAnswers.length === 0) {
      setMessage('Please provide at least one incorrect answer.');
      setIsError(true);
      return;
    }

    const newQuestionData = {
      question: questionText,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    };

    try {
      addQuestion(newQuestionData);
      setMessage('Question added successfully! 🎉');
      setIsError(false);
      // Reset form
      setQuestionText('');
      setCorrectAnswer('');
      setIncorrectAnswer1('');
      setIncorrectAnswer2('');
      setIncorrectAnswer3('');
      if (onQuestionAdded) {
        onQuestionAdded(); // Gọi callback nếu có để thông báo
      }
    } catch (error) {
      setMessage('Failed to add question. Please try again.');
      setIsError(true);
      console.error("Error adding question:", error);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-xl border border-blue-200">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 mb-8">
        Add Your Own Question
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="questionText" className="block text-gray-700 text-lg font-medium mb-2">Question:</label>
          <input
            type="text"
            id="questionText"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            placeholder="Enter your question here"
            required
          />
        </div>
        <div>
          <label htmlFor="correctAnswer" className="block text-gray-700 text-lg font-medium mb-2">Correct Answer:</label>
          <input
            type="text"
            id="correctAnswer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-green-50"
            placeholder="Enter the correct answer"
            required
          />
        </div>
        <div>
          <label htmlFor="incorrectAnswer1" className="block text-gray-700 text-lg font-medium mb-2">Incorrect Answer 1:</label>
          <input
            type="text"
            id="incorrectAnswer1"
            value={incorrectAnswer1}
            onChange={(e) => setIncorrectAnswer1(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-red-50"
            placeholder="Enter an incorrect answer"
            required
          />
        </div>
        <div>
          <label htmlFor="incorrectAnswer2" className="block text-gray-700 text-lg font-medium mb-2">Incorrect Answer 2 (Optional):</label>
          <input
            type="text"
            id="incorrectAnswer2"
            value={incorrectAnswer2}
            onChange={(e) => setIncorrectAnswer2(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-red-50"
            placeholder="Enter another incorrect answer"
          />
        </div>
        <div>
          <label htmlFor="incorrectAnswer3" className="block text-gray-700 text-lg font-medium mb-2">Incorrect Answer 3 (Optional):</label>
          <input
            type="text"
            id="incorrectAnswer3"
            value={incorrectAnswer3}
            onChange={(e) => setIncorrectAnswer3(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-red-50"
            placeholder="Enter yet another incorrect answer"
          />
        </div>

        {message && (
          <p className={`text-center font-semibold text-lg ${isError ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestionForm;