// src/pages/Quiz.js
import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import quizQuestions from '../data/quizData';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. The correct answer was: ' + currentQuestion.answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedOption(null); // Reset selected option for next question
    setFeedback(''); // Clear feedback

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    // Note: For simplicity, score is not decremented if going back.
    // You might want to implement more complex logic for editing answers.
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Reset selected option
      setFeedback(''); // Clear feedback
      setShowResult(false); // Hide result if navigating back
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setFeedback('');
  };

  if (showResult) {
    return (
      <Container className="quiz-container text-center my-4">
        <h2>Quiz Results</h2>
        <Alert variant="success">
          You scored {score} out of {quizQuestions.length} questions!
        </Alert>
        <Button onClick={restartQuiz} variant="primary">Restart Quiz</Button>
      </Container>
    );
  }

  return (
    <Container className="quiz-container my-4">
      <h3>Question {currentQuestionIndex + 1} of {quizQuestions.length}</h3>
      <p className="quiz-question">{currentQuestion.question}</p>
      <ul className="quiz-options">
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <Button
              variant={
                selectedOption === option
                  ? (option === currentQuestion.answer ? 'success' : 'danger')
                  : 'outline-secondary'
              }
              onClick={() => handleOptionSelect(option)}
              disabled={selectedOption !== null} // Disable after selecting an option
              className="mb-2"
            >
              {option}
            </Button>
          </li>
        ))}
      </ul>
      {feedback && (
        <Alert variant={selectedOption === currentQuestion.answer ? 'success' : 'danger'} className="mt-3">
          {feedback}
        </Alert>
      )}
      <div className="quiz-navigation mt-4 d-flex justify-content-between">
        <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNextQuestion} disabled={selectedOption === null}>
          {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </Button>
      </div>
    </Container>
  );
}

export default Quiz;