
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

export const QuizContext = createContext();

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
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
};

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userCreatedQuestions, setUserCreatedQuestions] = useState(() => {
    try {
      const savedQuestions = localStorage.getItem('userQuizQuestions');
      return savedQuestions ? JSON.parse(savedQuestions) : [];
    } catch (e) {
      console.error("Failed to load user questions from localStorage", e);
      return [];
    }
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('userQuizQuestions', JSON.stringify(userCreatedQuestions));
    } catch (e) {
      console.error("Failed to save user questions to localStorage", e);
    }
  }, [userCreatedQuestions]);


  const fetchQuestions = useCallback(async () => { 
    try {
      setIsLoading(true);
      setError(null);
      setQuestions([]);
      setCurrentQuestionIndex(0);
      setScore(0);
      setQuizEnd(false);

      const response = await fetch('https://opentdb.com/api.php?amount=5&category=12');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.response_code !== 0) {
        throw new Error(`API returned error code: ${data.response_code}. No results could be returned.`);
      }

      const loadedApiQuestions = data.results.map((q, index) => {
        const decodedQuestion = decodeHtmlEntities(q.question);
        const decodedCorrectAnswer = decodeHtmlEntities(q.correct_answer);
        const decodedIncorrectAnswers = q.incorrect_answers.map(decodeHtmlEntities);
        const options = shuffleArray([
          decodedCorrectAnswer,
          ...decodedIncorrectAnswers
        ]);
        return {
          id: `api-${index + 1}`, // Đảm bảo ID duy nhất
          question: decodedQuestion,
          options: options,
          answer: decodedCorrectAnswer,
        };
      });

      // Kết hợp câu hỏi từ API và câu hỏi do người dùng tạo
      // Đảm bảo không trùng ID nếu có thể.
      // Ưu tiên trộn userCreatedQuestions vào đây.
      const combinedQuestions = shuffleArray([...loadedApiQuestions, ...userCreatedQuestions]);
      setQuestions(combinedQuestions);

    } catch (e) {
      console.error("Failed to fetch questions:", e);
      setError("Failed to load quiz questions. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [userCreatedQuestions]); 

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]); 

  const handleAnswerOptionClick = (selectedOption) => {
    const currentQuestionData = questions[currentQuestionIndex];
    if (selectedOption === currentQuestionData.answer) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnd(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizEnd(false);
    setQuestions([]);
    fetchQuestions();
  };

  // Hàm mới để thêm câu hỏi
  const addQuestion = (newQuestionData) => {
    const newQuestion = {
      id: `user-${Date.now()}`, // ID duy nhất cho câu hỏi do người dùng tạo
      question: newQuestionData.question,
      options: shuffleArray([...newQuestionData.incorrect_answers, newQuestionData.correct_answer]),
      answer: newQuestionData.correct_answer,
    };
    setUserCreatedQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  };

  const quizContextValue = {
    questions,
    currentQuestionIndex,
    score,
    quizEnd,
    isLoading,
    error,
    fetchQuestions,
    handleAnswerOptionClick,
    handleRestartQuiz,
    addQuestion, 
    currentQuestion: questions[currentQuestionIndex],
    totalQuestions: questions.length,
    userCreatedQuestions, 
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};