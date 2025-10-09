// src/components/Quiz.jsx
import React, { useState } from 'react';
import { quizQuestions } from '../data/QuizData';
const Quiz = () => {
  const [current, setCurrent] = useState(0); 
  const [score, setScore] = useState(0);
  const handleAnswer = (selected) => {
    if (selected === quizQuestions[current].answer) setScore(score + 1);
    setCurrent(current + 1);
  };
  if (current >= quizQuestions.length) return <h2 style={{color: '#28a745', textAlign: 'center'}}>Тест аяқталды! Нәтиже: {score}/{quizQuestions.length}</h2>;
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h3>Сұрақ {current + 1}: {quizQuestions[current].question}</h3>
      <div style={{ marginTop: '15px' }}>
        {quizQuestions[current].options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)} style={{ margin: '5px', background: '#007bff', color: 'white' }}>{opt}</button>
        ))}
      </div>
    </div>
  );
};
export default Quiz;