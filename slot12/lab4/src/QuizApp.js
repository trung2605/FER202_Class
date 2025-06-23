import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';

const decodeHtmlEntities = (text) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hàm fetchQuestions được tách ra để có thể gọi lại.
  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('https://opentdb.com/api.php?amount=20&category=12');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.response_code !== 0) {
        throw new Error(`API returned error code: ${data.response_code}. No results could be returned.`);
      }

      const loadedQuestions = data.results.map((q, index) => {
        const decodedQuestion = decodeHtmlEntities(q.question);
        const decodedCorrectAnswer = decodeHtmlEntities(q.correct_answer);
        const decodedIncorrectAnswers = q.incorrect_answers.map(decodeHtmlEntities);

        const options = shuffleArray([
          decodedCorrectAnswer,
          ...decodedIncorrectAnswers
        ]);

        return {
          id: index + 1,
          question: decodedQuestion,
          options: options,
          answer: decodedCorrectAnswer,
        };
      });

      setQuestions(loadedQuestions);
    } catch (e) {
      console.error("Failed to fetch questions:", e);
      setError("Failed to load quiz questions. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [quizEnd]); 

  const handleAnswerOptionClick = (selectedOption) => {
    const currentQuestionData = questions[currentQuestionIndex];

    if (selectedOption === currentQuestionData.answer) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnd(true); // Đặt quizEnd thành true khi hết câu hỏi
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizEnd(false); 
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-inter">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center text-2xl font-bold text-blue-700">
          Loading Questions... 🚀
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
            onClick={fetchQuestions} // Gọi lại hàm fetchQuestions khi nhấn Retry
            className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-inter">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center text-xl font-bold text-gray-700">
          No questions available.
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-3xl border border-blue-200 transform transition-all duration-300 ease-in-out hover:scale-[1.01]">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-8 drop-shadow-md">
          🧠 Awesome Quiz! 🚀
        </h1>

        {quizEnd ? (
          <Result
            score={score}
            totalQuestions={questions.length}
            onRestartQuiz={handleRestartQuiz}
          />
        ) : (
          <>
            <div className="text-center mb-6 text-gray-700 font-semibold text-lg sm:text-xl">
              Question <span className="font-bold text-blue-600">{currentQuestionIndex + 1}</span> of <span className="font-bold text-purple-600">{questions.length}</span>
            </div>
            <Question
              question={currentQuestion.question}
              options={currentQuestion.options}
              onAnswerClick={handleAnswerOptionClick}
            />
            <div className="mt-8 text-center text-gray-600 text-sm sm:text-base">
                Current Score: <span className="font-bold text-green-600 text-lg">{score}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
