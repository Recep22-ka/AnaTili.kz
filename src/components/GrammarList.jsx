import React from 'react';
import { grammarRules } from '../data/QuizData';
const GrammarList = () => (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h3>📘 Грамматика Ережелері</h3>
      {grammarRules.map((r) => <div key={r.id} style={{ borderLeft: '3px solid #007bff', paddingLeft: '15px', marginBottom: '15px', background: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
        <h4 style={{ margin: 0, color: '#007bff' }}>{r.title}</h4>
        <p style={{ margin: '5px 0 0 0' }}>{r.rule}</p>
      </div>)}
    </div>
);
export default GrammarList;