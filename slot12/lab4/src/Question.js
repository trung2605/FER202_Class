import React from 'react';

const Question = ({ question, options, onAnswerClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center leading-relaxed">
        {question}
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(option)}
            className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out
                       transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 p-4"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
