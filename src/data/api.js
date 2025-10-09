export let wordsDB = [
  { id: 1, word: 'Аспан', meaning: 'Небо', example: 'Көк аспан' },
  { id: 2, word: 'Дастархан', meaning: 'Стол', example: 'Той дастарханы' },
  { id: 3, word: 'Мұғалім', meaning: 'Учитель', example: 'Жақсы мұғалім' },
];

/**
 * READ: Деректерді асинхронды түрде оқу (API шақыруын имитациялау)
 * @returns {Promise<Array>} 
 */
export const fetchWords = async () => {
 
  await new Promise(resolve => setTimeout(resolve, 300)); 
  return wordsDB;
};

/**
 * CREATE: Жаңа сөз қосу
 * @param {Object} newWord - 
 * @returns {Promise<Object>}
 */
export const createWord = async (newWord) => { 
  await new Promise(resolve => setTimeout(resolve, 100)); 
  const id = Date.now();
  const wordWithId = { ...newWord, id };
  wordsDB.push(wordWithId);
  return wordWithId;
};

/**
 * DELETE: Сөзді ID бойынша жою
 * @param {number} id - і
 * @returns {Promise<boolean>} 
 */
export const deleteWord = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 100)); 
  wordsDB = wordsDB.filter(word => word.id !== id);
  return true;
};

/**
 * UPDATE: Бар сөзді өзгерту
 * @param {number} id - 
 * @param {Object} updatedData - 
 * @returns {Promise<boolean>} 
 */
export const updateWord = async (id, updatedData) => { 
  await new Promise(resolve => setTimeout(resolve, 100)); 
  wordsDB = wordsDB.map(word => 
    word.id === id ? { ...word, ...updatedData } : word
  );
  return true;
};