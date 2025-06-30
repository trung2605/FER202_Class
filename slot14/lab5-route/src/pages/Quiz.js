// src/pages/Quiz.js
import React, { useState, useEffect } from 'react';
import { Container, Button, Alert, Card, Row, Col, ProgressBar } from 'react-bootstrap';
import quizQuestions from '../data/quizData';

function Quiz() {
  // TẤT CẢ CÁC REACT HOOKS PHẢI ĐƯỢC KHAI BÁO Ở ĐÂY, TRƯỚC BẤT KỲ LỆNH RETURN NÀO
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [questionAnimationClass, setQuestionAnimationClass] = useState(''); // State để quản lý class animation

  // useEffect phải nằm ở đây
  useEffect(() => {
    // Khi component mount hoặc index câu hỏi thay đổi, thêm class 'fade-in'
    setQuestionAnimationClass('fade-in');

    // Dọn dẹp class sau khi animation hoàn tất để chuẩn bị cho lần tiếp theo
    const timer = setTimeout(() => {
      setQuestionAnimationClass('');
    }, 500); // Phải khớp với thời gian transition trong CSS

    return () => clearTimeout(timer); // Cleanup timer khi component unmount hoặc re-render
  }, [currentQuestionIndex]); // Dependency array: chạy lại khi currentQuestionIndex thay đổi

  // Giờ mới đến phần logic kiểm tra và return sớm
  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <Container className="quiz-container text-center my-4">
        <Alert variant="warning">Không có câu hỏi nào. Vui lòng cung cấp dữ liệu câu đố.</Alert>
      </Container>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = (quizQuestions.length > 0) ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0; // Đảm bảo không chia cho 0

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const isCorrect = option === currentQuestion.answer;
    setAnsweredCorrectly(isCorrect);
    if (isCorrect) {
      setFeedback('Chính xác!');
    } else {
      setFeedback(`Sai rồi. Đáp án đúng là: ${currentQuestion.answer}`);
    }
  };

  const handleNextQuestion = () => {
    // Kích hoạt animation out trước khi thay đổi câu hỏi
    setQuestionAnimationClass('fade-out');

    setTimeout(() => { // Chờ animation out hoàn tất rồi mới chuyển câu hỏi
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      setFeedback('');
      setAnsweredCorrectly(null);

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 500); // Phải khớp với thời gian transition của fade-out
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setQuestionAnimationClass('fade-out-reverse'); // Animation khi quay lại

      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setSelectedOption(null);
        setFeedback('');
        setAnsweredCorrectly(null);
        setShowResult(false);
      }, 500); // Phải khớp với thời gian transition của fade-out-reverse
    }
  };

  const restartQuiz = () => {
    // Kích hoạt animation out trước khi restart
    setQuestionAnimationClass('fade-out');
    setTimeout(() => {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setScore(0);
      setShowResult(false);
      setFeedback('');
      setAnsweredCorrectly(null);
      setQuestionAnimationClass('fade-in'); // Bắt đầu lại với animation in
    }, 500); // Phải khớp với thời gian transition của fade-out
  };

  if (showResult) {
    return (
      <Container className="quiz-container text-center my-5 p-4 border rounded shadow-lg bg-light">
        <h2 className="mb-4 text-primary">Kết Quả Quiz</h2>
        <Alert variant={score >= quizQuestions.length / 2 ? 'success' : 'danger'} className="p-3 my-4 fs-4">
          Bạn đạt được **{score}** trên **{quizQuestions.length}** câu hỏi!
        </Alert>
        <Button onClick={restartQuiz} variant="primary" size="lg">Làm lại Quiz</Button>
      </Container>
    );
  }

  return (
    <Container className="quiz-container my-5 p-4 border rounded shadow-lg bg-light">
      <h2 className="text-center mb-4 text-secondary">Thử Thách Kiến Thức Của Bạn!</h2>
      
      {/* Thanh tiến độ */}
      <div className="mb-4">
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} striped variant="info" />
        <p className="text-muted text-center mt-2">Câu hỏi {currentQuestionIndex + 1} / {quizQuestions.length}</p>
      </div>

      {/* Card câu hỏi với class animation */}
      <Card className={`quiz-question-card mb-4 shadow-sm ${questionAnimationClass}`}> {/* Thêm class animation ở đây */}
        <Card.Body>
          <Card.Title className="mb-4 fs-4 text-center">{currentQuestion.question}</Card.Title>
          <Row xs={1} md={2} className="g-3">
            {currentQuestion.options.map((option, index) => (
              <Col key={index}>
                <Button
                  variant={
                    selectedOption === option
                      ? (answeredCorrectly ? 'success' : 'danger')
                      : 'outline-secondary'
                  }
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                  className="w-100 py-2 fs-5 quiz-option-btn"
                >
                  {option}
                </Button>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Hiển thị Feedback */}
      {feedback && (
        <Alert variant={answeredCorrectly ? 'success' : 'danger'} className="mt-4 p-3 text-center fs-5">
          {feedback}
        </Alert>
      )}

      {/* Điều hướng */}
      <div className="quiz-navigation mt-4 d-flex justify-content-between">
        <Button 
          onClick={handlePreviousQuestion} 
          disabled={currentQuestionIndex === 0 || selectedOption !== null}
          variant="secondary"
          size="lg"
        >
          <i className="bi bi-arrow-left-circle me-2"></i> Câu hỏi trước
        </Button>
        <Button 
          onClick={handleNextQuestion} 
          disabled={selectedOption === null}
          variant="primary"
          size="lg"
        >
          {currentQuestionIndex === quizQuestions.length - 1 ? 'Hoàn thành Quiz' : 'Câu hỏi tiếp theo '}<i className="bi bi-arrow-right-circle ms-2"></i>
        </Button>
      </div>
    </Container>
  );
}

export default Quiz;