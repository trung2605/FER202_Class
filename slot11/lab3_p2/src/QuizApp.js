// QuizApp.jsx
import React, { useState } from 'react';
import Question from './Question'; // Import component Question
import Result from './Result';     // Import component Result

// Component QuizApp là component chính quản lý toàn bộ logic của ứng dụng quiz.
const QuizApp = () => {
  // Định nghĩa các câu hỏi cho quiz.
  const initialQuestions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      id: 3,
      question: "Which of these is a programming language?",
      options: ["HTML", "CSS", "Python", "JPEG"],
      answer: "Python"
    },
    {
      id: 4,
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "N2"],
      answer: "H2O"
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci"
    }
  ];

  // Khởi tạo các state sử dụng useState hook.
  const [questions, setQuestions] = useState(initialQuestions); // Mảng câu hỏi
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Chỉ số câu hỏi hiện tại
  const [score, setScore] = useState(0);                     // Điểm số
  const [quizEnd, setQuizEnd] = useState(false);             // Trạng thái kết thúc quiz

  // Hàm xử lý khi người dùng chọn một đáp án.
  const handleAnswerOptionClick = (selectedOption) => {
    // Lấy dữ liệu của câu hỏi hiện tại dựa trên chỉ số.
    const currentQuestionData = questions[currentQuestionIndex];

    // Kiểm tra xem lựa chọn có đúng không.
    if (selectedOption === currentQuestionData.answer) {
      // Nếu đúng, tăng điểm số.
      setScore(prevScore => prevScore + 1);
    }

    // Tính toán chỉ số của câu hỏi tiếp theo.
    const nextQuestionIndex = currentQuestionIndex + 1;

    // Kiểm tra xem còn câu hỏi nào nữa không.
    if (nextQuestionIndex < questions.length) {
      // Nếu còn, cập nhật chỉ số câu hỏi hiện tại.
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Nếu không còn, đặt trạng thái quizEnd thành true.
      setQuizEnd(true);
    }
  };

  // Hàm xử lý khi người dùng muốn bắt đầu lại quiz.
  const handleRestartQuiz = () => {
    // Reset tất cả các state về giá trị ban đầu.
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizEnd(false);
    // Nếu bạn muốn xáo trộn câu hỏi mỗi khi chơi lại, bạn có thể thêm logic xáo trộn ở đây.
    // Ví dụ: setQuestions(shuffleArray(initialQuestions));
  };

  // Lấy dữ liệu của câu hỏi hiện tại để truyền xuống component Question.
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-xl border border-blue-200 transform transition-all duration-300 ease-in-out hover:scale-[1.01]">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-8 drop-shadow-md">
          🧠 Awesome Quiz! 🚀
        </h1>

        {/* Logic hiển thị: Nếu quizEnd là true thì hiển thị Result, ngược lại hiển thị Question. */}
        {quizEnd ? (
          // Hiển thị component Result khi quiz kết thúc.
          <Result
            score={score} // Truyền điểm số hiện tại
            totalQuestions={questions.length} // Truyền tổng số câu hỏi
            onRestartQuiz={handleRestartQuiz} // Truyền hàm để bắt đầu lại quiz
          />
        ) : (
          // Hiển thị component Question khi quiz đang diễn ra.
          <>
            <div className="text-center mb-6 text-gray-700 font-semibold text-lg sm:text-xl">
              Question <span className="font-bold text-blue-600">{currentQuestionIndex + 1}</span> of <span className="font-bold text-purple-600">{questions.length}</span>
            </div>
            <Question
              question={currentQuestion.question}    // Truyền nội dung câu hỏi
              options={currentQuestion.options}      // Truyền mảng các lựa chọn
              onAnswerClick={handleAnswerOptionClick} // Truyền hàm xử lý click đáp án
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
