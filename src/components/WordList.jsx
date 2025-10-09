import React, { useState, useEffect } from 'react';
import { fetchWords, createWord, deleteWord } from '../data/api';

const WordList = () => {
  const [words, setWords] = useState([]); 
  const [newWord, setNewWord] = useState({ word: '', meaning: '' });
  const [message, setMessage] = useState(''); 
  
  useEffect(() => { fetchWords().then(setWords); }, []); 

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newWord.word || !newWord.meaning) {
      setMessage('❗ Екі өрісті де толтырыңыз. Бос қалдыруға болмайды.');
      return;
    }
    await createWord(newWord);
    setWords(await fetchWords());
    setNewWord({ word: '', meaning: '' });
    setMessage('✅ Жаңа сөз сәтті қосылды!');
  };

  const handleDelete = async (id) => { 
    await deleteWord(id);
    setWords(await fetchWords());
    setMessage('🗑️ Сөз жойылды.');
  };
  
  const msgStyle = { color: message.includes('✅') || message.includes('🗑️') ? '#28a745' : '#dc3545', fontWeight: 'bold' };

  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h3>✨ Сөздік Базасы (CRUD)</h3>
      <p style={msgStyle}>{message}</p>
      
      
      <form onSubmit={handleCreate} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input value={newWord.word} onChange={e => setNewWord({ ...newWord, word: e.target.value })} placeholder="Қазақша сөз" required style={{ flexGrow: 1, padding: '10px', borderRadius: '5px' }} />
        <input value={newWord.meaning} onChange={e => setNewWord({ ...newWord, meaning: e.target.value })} placeholder="Орысша мағынасы" style={{ flexGrow: 1, padding: '10px', borderRadius: '5px' }} />
        <button type="submit" style={{ background: '#28a745', color: 'white', padding: '10px 15px', border: 'none' }}>+ Қосу</button>
      </form>
      
      
      {words.map((w) => (
        <div key={w.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px dotted #eee' }}>
          <span style={{ fontWeight: 'bold' }}>{w.word}</span> <span> - {w.meaning}</span>
          <div>
            <button onClick={() => handleDelete(w.id)} style={{ background: '#dc3545', padding: '5px 10px' }}>Жою</button>
            <button style={{ background: 'orange', padding: '5px 10px' }}>Өзгерту (U)</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WordList;